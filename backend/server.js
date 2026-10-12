import express from 'express';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { PrismaClient } from '@prisma/client';
import { validateReviewUpdate, validateStatsSync } from './validation.js';
import { identifyPracticeUser } from './identity.js';

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '64kb' }));

// Lightweight readiness check for local, CI, and deployment monitors.
app.get('/api/health', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'ok', database: 'ok' });
  } catch (error) {
    console.error('Health check failed:', error);
    res.status(503).json({ status: 'error', database: 'unavailable' });
  }
});

app.use('/api', identifyPracticeUser);
app.get('/api/session', (req, res) => res.json({ ready: true }));

// 词形变体解析工具 (用于解析 exchange 字段)
const parseExchange = (exchangeStr) => {
  if (!exchangeStr) return [];
  const map = {
    'p': '过去式',
    'd': '过去分词',
    'i': '现在分词',
    '3': '第三人称单数',
    's': '复数形式',
    'r': '比较级',
    't': '最高级',
    '0': '原形'
  };
  const parts = exchangeStr.split('/');
  const result = [];
  parts.forEach(part => {
    const [key, val] = part.split(':');
    if (key && val && map[key]) {
      result.push({ type: map[key], word: val });
    }
  });
  return result;
};

// API: 字典查询接口
app.get('/api/dictionary', async (req, res) => {
  let { word } = req.query;
  if (!word) return res.status(400).json({ error: 'Word is required' });
  
  word = word.toLowerCase().replace(/[^a-z0-9'-]/g, '');
  if (!word) return res.status(400).json({ error: 'Invalid word' });

  try {
    let entry = await prisma.dictionary.findUnique({
      where: { word: word }
    });

    if (!entry) {
      const candidates = await prisma.dictionary.findMany({
        where: {
          exchange: {
            contains: `:${word}`
          }
        },
        take: 1
      });
      if (candidates.length > 0) {
        entry = candidates[0];
      }
    }

    // 处理连字符单词的 Fallback (例如 post-pandemic -> pandemic)
    if (!entry && word.includes('-')) {
      const parts = word.split('-');
      console.log('Fallback for hyphenated word:', word, 'parts:', parts);
      // 从后往前找核心词汇
      for (let i = parts.length - 1; i >= 0; i--) {
        const part = parts[i];
        if (part) {
          entry = await prisma.dictionary.findUnique({
            where: { word: part }
          });
          console.log('Checking part:', part, 'entry found:', !!entry);
          if (!entry) {
            const candidates = await prisma.dictionary.findMany({
              where: { exchange: { contains: `:${part}` } },
              take: 1
            });
            if (candidates.length > 0) entry = candidates[0];
          }
          if (entry) {
            // 找到了连字符单词的某一部分
            console.log('Found fallback entry:', entry.word);
            break;
          }
        }
      }
    }

    if (!entry) {
      return res.status(404).json({ error: 'Word not found' });
    }

    const exchangeData = parseExchange(entry.exchange);
    
    res.json({
      word: entry.word,
      phonetic: entry.phonetic ? `/${entry.phonetic}/` : null,
      translation: entry.translation.replace(/\\n/g, '; '),
      definition: entry.definition,
      pos: entry.pos,
      exchange: exchangeData,
      isVariant: word !== entry.word ? true : false,
      queriedWord: word
    });
  } catch (error) {
    console.error('Dictionary API Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// API: 获取完整课程与题库
app.get('/api/curriculum', async (req, res) => {
  try {
    const curriculums = await prisma.curriculum.findMany({
      orderBy: { id: 'asc' },
      include: {
        sentences: { orderBy: { id: 'asc' } }
      }
    });
    if (!curriculums.length || curriculums.some(cur => cur.sentences.length !== 100)) {
      return res.status(503).json({ error: 'Curriculum is incomplete. Run npm run db:seed.' });
    }
    
    // 解析 JSON 字段，还原为前端所需的结构
    const formattedData = curriculums.map(cur => ({
      id: cur.id,
      title: cur.title,
      description: cur.description,
      sentences: cur.sentences.map(sent => ({
        id: sent.id,
        chinese: sent.chinese,
        english_full: sent.english_full,
        words: JSON.parse(sent.words),
        components: JSON.parse(sent.components),
        analysis: JSON.parse(sent.analysis)
      }))
    }));

    res.json(formattedData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// SRS 间隔：1天, 3天, 7天, 15天, 30天
const REVIEW_INTERVALS = [1, 3, 7, 15, 30];

// API: 获取今日待复习句子
app.get('/api/review/today', async (req, res) => {
  const userId = req.practiceUserId;
  try {
    const today = new Date();
    const dueProgress = await prisma.userProgress.findMany({
      where: {
        userId,
        status: { not: 'mastered' },
        nextReviewDate: { lte: today }
      },
      include: {
        sentence: true
      }
    });

    const formattedSentences = dueProgress.map(p => ({
      id: p.sentence.id,
      chinese: p.sentence.chinese,
      english_full: p.sentence.english_full,
      words: JSON.parse(p.sentence.words),
      components: JSON.parse(p.sentence.components),
      analysis: JSON.parse(p.sentence.analysis),
      progress: {
        reviewCount: p.reviewCount,
        failCount: p.failCount,
        status: p.status
      }
    }));

    res.json(formattedSentences);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// API: 更新复习进度
app.post('/api/review/update', async (req, res) => {
  const userId = req.practiceUserId;
  const { sentenceId, action } = req.body;
  // action: 'correct', 'wrong', 'mastered', 'forgot'
  const validationError = validateReviewUpdate({ userId, sentenceId, action });
  if (validationError) return res.status(400).json({ error: validationError });

  try {
    let progress = await prisma.userProgress.findUnique({
      where: { userId_sentenceId: { userId, sentenceId } }
    });

    if (!progress) {
       progress = await prisma.userProgress.create({
         data: { userId, sentenceId }
       });
    }

    const now = new Date();
    let nextDate = new Date(now);
    let newStatus = progress.status;
    let newReviewCount = progress.reviewCount;
    let newFailCount = progress.failCount;

    if (action === 'mastered') { // Ctrl + S
      newStatus = 'mastered';
      nextDate.setFullYear(2099);
    } else if (action === 'forgot' || action === 'wrong') { // Ctrl + D or typing error
      newStatus = 'review';
      newReviewCount = 0; // 重置进度
      newFailCount += 1;
      nextDate = now; // 如果是生词/错误，不只是明天，而是“立刻强制重置为今天内复习”，前端可以再次抓取到
    } else if (action === 'correct') {
      newStatus = 'review';
      newReviewCount += 1;
      const intervalIndex = Math.min(newReviewCount - 1, REVIEW_INTERVALS.length - 1);
      const daysToAdd = REVIEW_INTERVALS[intervalIndex];
      nextDate.setDate(now.getDate() + daysToAdd);
    }

    const updated = await prisma.userProgress.update({
      where: { id: progress.id },
      data: {
        status: newStatus,
        reviewCount: newReviewCount,
        failCount: newFailCount,
        nextReviewDate: nextDate,
        lastReviewDate: now
      }
    });

    res.json(updated);
  } catch (error) {
    console.error("Error updating progress:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// API: 获取全局统计信息 (Streak, History)
app.get('/api/stats', async (req, res) => {
  const userId = req.practiceUserId;
  try {
    let user = await prisma.user.findUnique({ where: { userId } });
    if (!user) {
      user = await prisma.user.create({ data: { userId } });
    }
    const dailyStats = await prisma.dailyStats.findMany({ where: { userId } });
    const history = {};
    dailyStats.forEach(stat => {
      history[stat.date] = stat.count;
    });
    
    res.json({
      lastActiveDate: user.lastActiveDate,
      currentStreak: user.currentStreak,
      history
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// API: 记录完成的句子，更新每日数据与Streak
app.post('/api/stats/record', async (req, res) => {
  const userId = req.practiceUserId;

  if (typeof userId !== 'string' || !userId.trim()) {
    return res.status(400).json({ error: 'userId must be a non-empty string' });
  }
  
  // 以当地时区获取 YYYY-MM-DD
  const today = new Date();
  const dateStr = today.getFullYear() + '-' + 
                  String(today.getMonth() + 1).padStart(2, '0') + '-' + 
                  String(today.getDate()).padStart(2, '0');

  try {
    // 1. Update DailyStats
    const daily = await prisma.dailyStats.upsert({
      where: { userId_date: { userId, date: dateStr } },
      update: { count: { increment: 1 } },
      create: { userId, date: dateStr, count: 1 }
    });

    // 2. Update Streak
    let user = await prisma.user.findUnique({ where: { userId } });
    if (!user) {
      user = await prisma.user.create({ data: { userId } });
    }

    let newStreak = user.currentStreak;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.getFullYear() + '-' + 
                         String(yesterday.getMonth() + 1).padStart(2, '0') + '-' + 
                         String(yesterday.getDate()).padStart(2, '0');

    if (user.lastActiveDate !== dateStr) {
      if (user.lastActiveDate === yesterdayStr) {
        newStreak += 1;
      } else {
        newStreak = 1; // broken streak, reset to 1
      }
    }

    user = await prisma.user.update({
      where: { userId },
      data: {
        currentStreak: newStreak,
        lastActiveDate: dateStr
      }
    });

    res.json({
      lastActiveDate: user.lastActiveDate,
      currentStreak: user.currentStreak,
      date: dateStr,
      count: daily.count
    });
  } catch (error) {
    console.error("Error updating stats:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// API: 同步本地历史数据到数据库
app.post('/api/stats/sync', async (req, res) => {
  const userId = req.practiceUserId;
  const { history = {}, lastActiveDate, currentStreak } = req.body;
  const validationError = validateStatsSync({ userId, history, lastActiveDate, currentStreak });
  if (validationError) return res.status(400).json({ error: validationError });
  try {
    let user = await prisma.user.findUnique({ where: { userId } });
    if (!user) {
      await prisma.user.create({ data: { userId, lastActiveDate, currentStreak } });
    } else {
      await prisma.user.update({
        where: { userId },
        data: { 
          lastActiveDate: lastActiveDate || user.lastActiveDate, 
          currentStreak: currentStreak !== undefined ? currentStreak : user.currentStreak 
        }
      });
    }

    for (const [date, count] of Object.entries(history)) {
      await prisma.dailyStats.upsert({
        where: { userId_date: { userId, date } },
        update: { count: count },
        create: { userId, date, count }
      });
    }
    res.json({ success: true });
  } catch (error) {
    console.error("Error syncing stats:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.use('/api', (req, res) => res.status(404).json({ error: 'API endpoint not found' }));

const distDir = resolve(process.cwd(), 'dist');
if (existsSync(resolve(distDir, 'index.html'))) {
  app.use(express.static(distDir));
  app.use((req, res, next) => {
    if (req.method !== 'GET') return next();
    res.sendFile(resolve(distDir, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
