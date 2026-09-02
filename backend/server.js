import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../dist')));

// API: 获取完整课程与题库
app.get('/api/curriculum', async (req, res) => {
  try {
    const curriculums = await prisma.curriculum.findMany({
      include: {
        sentences: true
      }
    });
    
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
  const { userId = 'local_user' } = req.query;
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
  const { userId = 'local_user', sentenceId, action } = req.body;
  // action: 'correct', 'wrong', 'mastered', 'forgot'
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
  const { userId = 'local_user' } = req.query;
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
  const { userId = 'local_user' } = req.body;
  
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
  const { userId = 'local_user', history = {}, lastActiveDate, currentStreak } = req.body;
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

// Fallback for React Router (if used in future) and to serve the main index.html for non-API routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`- Frontend is served from this port in production.`);
  console.log(`- Fetch sentences: http://localhost:${PORT}/api/curriculum`);
});
