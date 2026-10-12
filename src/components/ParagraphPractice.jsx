import React, { useEffect, useState } from 'react';
import { writingPrompts } from '../data/writingPrompts';

const draftKey = (id) => `easyToLearn_paragraph_prompt_${id}`;
const functionKey = (id) => `easyToLearn_paragraph_functions_${id}`;
const versionKey = (id) => `easyToLearn_paragraph_versions_${id}`;
const reviewKey = (id) => `easyToLearn_paragraph_review_${id}`;
const planKey = (id) => `easyToLearn_paragraph_plan_${id}`;
const coverageKey = (id) => `easyToLearn_paragraph_plan_coverage_${id}`;
const revisionKey = (id) => `easyToLearn_paragraph_next_revision_${id}`;
const taskCheckKey = (id) => `easyToLearn_paragraph_task_checks_${id}`;
const evaluationKey = (id, mode) => `easyToLearn_ielts_${mode}_evaluation_${id}`;
const sentenceKey = (id) => `easyToLearn_ielts_sentence_draft_${id}`;
const lastPromptKey = 'easyToLearn_paragraph_last_prompt';
const readLastPrompt = () => writingPrompts.find((item) => item.id === localStorage.getItem(lastPromptKey));
const countWords = (text) => text.match(/[A-Za-z]+(?:['’-][A-Za-z]+)*/g)?.length || 0;
const planPrompts = {
  position: '这段的核心立场是什么？',
  cause: '造成这一现象的具体机制是什么？',
  effect: '这一做法会带来什么结果？对谁产生影响？',
  example: '用哪个具体情境或例子证明观点？',
  contrast: '比较哪两种做法？差异的关键是什么？',
  concession: '承认什么限制？如何回应它？',
  conclusion: '这一段能得出什么结论或建议？',
};
const reviewItems = [
  { id: 'answer', label: '开头直接回应题目，观点明确。' },
  { id: 'explain', label: '解释了原因或影响，而不只是重复观点。' },
  { id: 'support', label: '有具体例子、比较或合理让步来支撑论点。' },
  { id: 'connect', label: '句子之间衔接自然，所选论证功能服务于同一个中心。' },
];

const readDrafts = () => Object.fromEntries(writingPrompts.map((prompt) => {
  const saved = localStorage.getItem(draftKey(prompt.id));
  const isFirstPrompt = writingPrompts.find((item) => item.scenario === prompt.scenario)?.id === prompt.id;
  const legacy = isFirstPrompt ? localStorage.getItem(`easyToLearn_paragraph_${prompt.scenario}`) : null;
  return [prompt.id, saved ?? legacy ?? ''];
}));

const readFunctions = () => Object.fromEntries(writingPrompts.map((prompt) => {
  try {
    const saved = JSON.parse(localStorage.getItem(functionKey(prompt.id)));
    if (Array.isArray(saved)) return [prompt.id, saved];
  } catch { /* Ignore invalid local preferences. */ }
  return [prompt.id, prompt.suggested];
}));

const readVersions = () => Object.fromEntries(writingPrompts.map((prompt) => {
  try {
    const saved = JSON.parse(localStorage.getItem(versionKey(prompt.id)));
    if (Array.isArray(saved)) return [prompt.id, saved.filter((item) => typeof item?.text === 'string' && Number.isFinite(item?.createdAt)).slice(0, 5)];
  } catch { /* Ignore invalid local history. */ }
  return [prompt.id, []];
}));

const readReviews = () => Object.fromEntries(writingPrompts.map((prompt) => {
  try {
    const saved = JSON.parse(localStorage.getItem(reviewKey(prompt.id)));
    if (Array.isArray(saved)) return [prompt.id, saved.filter((id) => reviewItems.some((item) => item.id === id))];
  } catch { /* Ignore invalid local review data. */ }
  return [prompt.id, []];
}));

const readPlans = () => Object.fromEntries(writingPrompts.map((prompt) => {
  try {
    const saved = JSON.parse(localStorage.getItem(planKey(prompt.id)));
    if (saved && typeof saved === 'object' && !Array.isArray(saved)) {
      return [prompt.id, Object.fromEntries(Object.entries(saved).filter(([id, value]) => Object.hasOwn(planPrompts, id) && typeof value === 'string'))];
    }
  } catch { /* Ignore invalid local plans. */ }
  return [prompt.id, {}];
}));

const readCoverage = () => Object.fromEntries(writingPrompts.map((prompt) => {
  try {
    const saved = JSON.parse(localStorage.getItem(coverageKey(prompt.id)));
    if (Array.isArray(saved)) return [prompt.id, saved.filter((id) => Object.hasOwn(planPrompts, id))];
  } catch { /* Ignore invalid local coverage. */ }
  return [prompt.id, []];
}));

const readRevisions = () => Object.fromEntries(writingPrompts.map((prompt) => [prompt.id, localStorage.getItem(revisionKey(prompt.id)) || '']));

const readTaskChecks = () => Object.fromEntries(writingPrompts.map((prompt) => {
  try {
    const saved = JSON.parse(localStorage.getItem(taskCheckKey(prompt.id)));
    if (Array.isArray(saved)) return [prompt.id, saved.filter((index) => Number.isInteger(index) && index >= 0 && index < prompt.checks.length)];
  } catch { /* Ignore invalid local task checks. */ }
  return [prompt.id, []];
}));

const readEvaluations = () => Object.fromEntries(writingPrompts.flatMap((prompt) => ['sentence', 'paragraph'].map((mode) => {
  const key = `${prompt.id}:${mode}`;
  try {
    const saved = JSON.parse(localStorage.getItem(evaluationKey(prompt.id, mode)));
    if (saved && typeof saved.draft === 'string' && Array.isArray(saved.criteria) &&
      saved.criteria.length === 4 && saved.criteria.every((item) => item && Object.hasOwn(criterionLabels, item.id) &&
        (item.band === null || (Number.isInteger(item.band) && item.band >= 1 && item.band <= 9)) &&
        typeof item.analysis === 'string' && typeof item.improvement === 'string') &&
      (saved.estimate === null || (typeof saved.estimate === 'number' && Number.isFinite(saved.estimate) && saved.estimate >= 1 && saved.estimate <= 9)) &&
      Array.isArray(saved.corrections) && saved.corrections.every((item) => item && typeof item.original === 'string' &&
        typeof item.corrected === 'string' && typeof item.reason === 'string' && Object.hasOwn(correctionLabels, item.type)) &&
      typeof saved.summary === 'string' && typeof saved.priority === 'string' && Number.isFinite(saved.evaluatedAt)) return [key, saved];
  } catch { /* Ignore invalid local feedback. */ }
  return [key, null];
})));

const readSentences = () => Object.fromEntries(writingPrompts.map((prompt) => [prompt.id, localStorage.getItem(sentenceKey(prompt.id)) || '']));
const criterionLabels = { taskResponse: '任务回应', coherenceCohesion: '连贯与衔接', lexicalResource: '词汇资源', grammar: '语法多样性与准确性' };
const correctionLabels = { grammar: '语法', vocabulary: '词汇', punctuation: '标点' };

const readTransferDrafts = (sentences) => Object.fromEntries(sentences.map((sentence) => [
  sentence.id,
  localStorage.getItem(`easyToLearn_transfer_${sentence.id}`) || '',
]));

function ParagraphPractice({ scenarios, functions, sentences, selectedScenario, transferTarget, userProgress, onPracticeFunction, theme }) {
  const [scenario, setScenario] = useState(() => selectedScenario === 'all' ? readLastPrompt()?.scenario || 'education' : selectedScenario);
  const [promptId, setPromptId] = useState(() => readLastPrompt()?.id || 'education_assessment');
  const [drafts, setDrafts] = useState(readDrafts);
  const [chosenByPrompt, setChosenByPrompt] = useState(readFunctions);
  const [versionsByPrompt, setVersionsByPrompt] = useState(readVersions);
  const [reviewsByPrompt, setReviewsByPrompt] = useState(readReviews);
  const [plansByPrompt, setPlansByPrompt] = useState(readPlans);
  const [coverageByPrompt, setCoverageByPrompt] = useState(readCoverage);
  const [revisionsByPrompt, setRevisionsByPrompt] = useState(readRevisions);
  const [taskChecksByPrompt, setTaskChecksByPrompt] = useState(readTaskChecks);
  const [evaluationsByPrompt, setEvaluationsByPrompt] = useState(readEvaluations);
  const [sentencesByPrompt, setSentencesByPrompt] = useState(readSentences);
  const [evaluationMode, setEvaluationMode] = useState('paragraph');
  const [evaluatingPromptId, setEvaluatingPromptId] = useState(null);
  const [evaluationError, setEvaluationError] = useState('');
  const [transferDrafts, setTransferDrafts] = useState(() => readTransferDrafts(sentences));
  const [showReferences, setShowReferences] = useState(false);
  const [showTransferDrafts, setShowTransferDrafts] = useState(false);
  const [targetFunction, setTargetFunction] = useState('position');
  const [notice, setNotice] = useState('');

  useEffect(() => {
    if (selectedScenario !== 'all') setScenario(selectedScenario);
  }, [selectedScenario]);

  const availablePrompts = writingPrompts.filter((item) => item.scenario === scenario);
  const activePromptId = availablePrompts.some((item) => item.id === promptId) ? promptId : availablePrompts[0].id;

  useEffect(() => localStorage.setItem(lastPromptKey, activePromptId), [activePromptId]);
  const prompt = writingPrompts.find((item) => item.id === activePromptId);
  const draft = drafts[activePromptId] || '';
  const chosen = chosenByPrompt[activePromptId] || [];
  const versions = versionsByPrompt[activePromptId] || [];
  const checkedReviewItems = reviewsByPrompt[activePromptId] || [];
  const plan = plansByPrompt[activePromptId] || {};
  const coveredFunctions = coverageByPrompt[activePromptId] || [];
  const checkedTaskItems = taskChecksByPrompt[activePromptId] || [];
  const evaluation = evaluationsByPrompt[`${activePromptId}:${evaluationMode}`];
  const sentenceDraft = sentencesByPrompt[activePromptId] || '';
  const evaluationDraft = evaluationMode === 'sentence' ? sentenceDraft : draft;
  const plannedFunctions = chosen.filter((id) => Object.hasOwn(planPrompts, id) && plan[id]?.trim());
  const references = sentences.filter((item) => item.scenario === scenario && chosen.includes(item.argumentFunction));
  const matchingTransferDrafts = references.filter((item) => transferDrafts[item.id]?.trim());
  const suggestedProgress = prompt.suggested.map((id) => {
    const items = sentences.filter((item) => item.scenario === scenario && item.argumentFunction === id);
    return {
      id,
      total: items.length,
      mastered: items.filter((item) => userProgress[item.id] === 'mastered').length,
      unfamiliar: items.some((item) => userProgress[item.id] === 'unfamiliar'),
    };
  });
  const recommendedFunction = [...suggestedProgress]
    .filter((item) => item.mastered < item.total)
    .sort((left, right) => Number(right.unfamiliar) - Number(left.unfamiliar) || left.mastered - right.mastered)[0];

  useEffect(() => {
    const refreshTransferDrafts = () => setTransferDrafts(readTransferDrafts(sentences));
    window.addEventListener('easyToLearn:transferDraftChanged', refreshTransferDrafts);
    return () => window.removeEventListener('easyToLearn:transferDraftChanged', refreshTransferDrafts);
  }, [sentences]);
  const promptStatus = (item) => {
    const text = drafts[item.id] || '';
    if (!text.trim()) return '未开始';
    const selected = chosenByPrompt[item.id] || [];
    const notes = plansByPrompt[item.id] || {};
    const planned = selected.filter((id) => Object.hasOwn(planPrompts, id) && notes[id]?.trim());
    const covered = coverageByPrompt[item.id] || [];
    const reviews = reviewsByPrompt[item.id] || [];
    const taskChecks = taskChecksByPrompt[item.id] || [];
    const words = countWords(text);
    if (words >= 80 && words <= 120 && reviews.length === reviewItems.length && taskChecks.length === item.checks.length && planned.length >= 2 && planned.every((id) => covered.includes(id))) return '已自查';
    return '草稿中';
  };
  const functionStatus = (item, functionId) => {
    if (promptStatus(item) !== '已自查') return '待完成段落';
    const planned = plansByPrompt[item.id]?.[functionId]?.trim();
    const covered = coverageByPrompt[item.id]?.includes(functionId);
    return planned && covered ? '目标功能已核对' : '目标功能待练';
  };
  const completedCount = writingPrompts.filter((item) => promptStatus(item) === '已自查').length;
  const portfolioEntries = writingPrompts.filter((item) =>
    drafts[item.id]?.trim() || Object.values(plansByPrompt[item.id] || {}).some((value) => value.trim()) || revisionsByPrompt[item.id]?.trim()
  );
  const scenarioCompletedCount = availablePrompts.filter((item) => promptStatus(item) === '已自查').length;
  const currentIndex = writingPrompts.findIndex((item) => item.id === activePromptId);
  const nextPrompt = [...writingPrompts.slice(currentIndex + 1), ...writingPrompts.slice(0, currentIndex)]
    .find((item) => promptStatus(item) !== '已自查');
  const targetPrompts = writingPrompts
    .filter((item) => item.suggested.includes(targetFunction))
    .sort((left, right) => Number(functionStatus(left, targetFunction) === '目标功能已核对') - Number(functionStatus(right, targetFunction) === '目标功能已核对'));
  const targetCompletedCount = targetPrompts.filter((item) => functionStatus(item, targetFunction) === '目标功能已核对').length;
  const hasSentenceProgress = sentences.some((item) => Boolean(userProgress[item.id]));
  const recommendedTarget = writingPrompts.flatMap((item) => item.suggested.map((functionId) => {
    const related = sentences.filter((sentence) => sentence.scenario === item.scenario && sentence.argumentFunction === functionId);
    return {
      prompt: item,
      functionId,
      total: related.length,
      mastered: related.filter((sentence) => userProgress[sentence.id] === 'mastered').length,
      unfamiliar: related.filter((sentence) => userProgress[sentence.id] === 'unfamiliar').length,
    };
  }))
    .filter((item) => functionStatus(item.prompt, item.functionId) !== '目标功能已核对')
    .sort((left, right) => right.unfamiliar - left.unfamiliar || (left.mastered / (left.total || 1)) - (right.mastered / (right.total || 1)))[0];

  const goToPrompt = (item, focusFunction) => {
    setScenario(item.scenario);
    setPromptId(item.id);
    if (focusFunction && !(chosenByPrompt[item.id] || []).includes(focusFunction)) {
      const next = [...(chosenByPrompt[item.id] || []), focusFunction];
      setChosenByPrompt((previous) => ({ ...previous, [item.id]: next }));
      localStorage.setItem(functionKey(item.id), JSON.stringify(next));
    }
  };

  useEffect(() => {
    if (!transferTarget) return;
    const current = writingPrompts.find((item) => item.id === activePromptId);
    const matchingPrompt = current?.scenario === transferTarget.scenario && current.suggested.includes(transferTarget.functionId)
      ? current
      : writingPrompts.find((item) => item.scenario === transferTarget.scenario && item.suggested.includes(transferTarget.functionId));
    if (matchingPrompt) goToPrompt(matchingPrompt, transferTarget.functionId);
    setTargetFunction(transferTarget.functionId);
    setShowTransferDrafts(true);
    requestAnimationFrame(() => requestAnimationFrame(() => document.getElementById('paragraph-transfer-drafts')?.scrollIntoView({ behavior: 'smooth', block: 'center' })));
  }, [transferTarget]);

  useEffect(() => { setNotice(''); setEvaluationError(''); }, [activePromptId]);

  const evaluateDraft = async () => {
    const requestedPromptId = activePromptId;
    const requestedMode = evaluationMode;
    const requestedDraft = evaluationDraft;
    setEvaluatingPromptId(requestedPromptId);
    setEvaluationError('');
    try {
      const response = await fetch('/api/writing/evaluate', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ promptId: requestedPromptId, draft: requestedDraft, functions: chosen, mode: requestedMode }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || '评阅失败，请稍后重试。');
      const saved = { ...result, draft: requestedDraft, functions: [...chosen], evaluatedAt: Date.now() };
      setEvaluationsByPrompt((previous) => ({ ...previous, [`${requestedPromptId}:${requestedMode}`]: saved }));
      localStorage.setItem(evaluationKey(requestedPromptId, requestedMode), JSON.stringify(saved));
    } catch (error) {
      setEvaluationError(error.message || '评阅失败，请稍后重试。');
    } finally {
      setEvaluatingPromptId(null);
    }
  };

  const updateSentenceDraft = (value) => {
    setSentencesByPrompt((previous) => ({ ...previous, [activePromptId]: value }));
    localStorage.setItem(sentenceKey(activePromptId), value);
    setEvaluationError('');
  };

  const updateDraft = (value) => {
    setDrafts((previous) => ({ ...previous, [activePromptId]: value }));
    localStorage.setItem(draftKey(activePromptId), value);
    setReviewsByPrompt((previous) => ({ ...previous, [activePromptId]: [] }));
    localStorage.removeItem(reviewKey(activePromptId));
    setCoverageByPrompt((previous) => ({ ...previous, [activePromptId]: [] }));
    localStorage.removeItem(coverageKey(activePromptId));
    setTaskChecksByPrompt((previous) => ({ ...previous, [activePromptId]: [] }));
    localStorage.removeItem(taskCheckKey(activePromptId));
    setNotice('');
    setEvaluationError('');
  };

  const toggleReviewItem = (id) => {
    const next = checkedReviewItems.includes(id)
      ? checkedReviewItems.filter((item) => item !== id)
      : [...checkedReviewItems, id];
    setReviewsByPrompt((previous) => ({ ...previous, [activePromptId]: next }));
    localStorage.setItem(reviewKey(activePromptId), JSON.stringify(next));
  };

  const toggleTaskCheck = (index) => {
    const next = checkedTaskItems.includes(index)
      ? checkedTaskItems.filter((item) => item !== index)
      : [...checkedTaskItems, index];
    setTaskChecksByPrompt((previous) => ({ ...previous, [activePromptId]: next }));
    localStorage.setItem(taskCheckKey(activePromptId), JSON.stringify(next));
  };

  const updatePlan = (id, value) => {
    const next = { ...plan, [id]: value };
    setPlansByPrompt((previous) => ({ ...previous, [activePromptId]: next }));
    localStorage.setItem(planKey(activePromptId), JSON.stringify(next));
    const nextCoverage = coveredFunctions.filter((item) => item !== id);
    setCoverageByPrompt((previous) => ({ ...previous, [activePromptId]: nextCoverage }));
    localStorage.setItem(coverageKey(activePromptId), JSON.stringify(nextCoverage));
  };

  const toggleCoverage = (id) => {
    const next = coveredFunctions.includes(id) ? coveredFunctions.filter((item) => item !== id) : [...coveredFunctions, id];
    setCoverageByPrompt((previous) => ({ ...previous, [activePromptId]: next }));
    localStorage.setItem(coverageKey(activePromptId), JSON.stringify(next));
  };

  const updateRevision = (value) => {
    setRevisionsByPrompt((previous) => ({ ...previous, [activePromptId]: value }));
    localStorage.setItem(revisionKey(activePromptId), value);
  };

  const addTransferDraft = (sentence) => {
    const expression = transferDrafts[sentence.id]?.trim();
    if (!expression || draft.includes(expression)) return;
    updateDraft(draft.trim() ? `${draft.trimEnd()} ${expression}` : expression);
    setNotice('已加入段落，请检查它是否贴合本题观点');
  };

  const toggleFunction = (id) => {
    const next = chosen.includes(id) ? chosen.filter((item) => item !== id) : [...chosen, id];
    setChosenByPrompt((previous) => ({ ...previous, [activePromptId]: next }));
    localStorage.setItem(functionKey(activePromptId), JSON.stringify(next));
    if (!next.includes(id)) {
      const nextCoverage = coveredFunctions.filter((item) => item !== id);
      setCoverageByPrompt((previous) => ({ ...previous, [activePromptId]: nextCoverage }));
      localStorage.setItem(coverageKey(activePromptId), JSON.stringify(nextCoverage));
    }
  };

  const storeVersions = (next) => {
    setVersionsByPrompt((previous) => ({ ...previous, [activePromptId]: next }));
    localStorage.setItem(versionKey(activePromptId), JSON.stringify(next));
  };

  const saveVersion = () => {
    if (!draft.trim() || versions[0]?.text === draft) return;
    storeVersions([{ text: draft, createdAt: Date.now() }, ...versions].slice(0, 5));
    setNotice('已保存当前版本');
  };

  const restoreVersion = (version) => {
    const preserveCurrent = draft !== version.text && Boolean(draft.trim());
    if (preserveCurrent) {
      storeVersions([{ text: draft, createdAt: Date.now() }, ...versions].slice(0, 5));
    }
    updateDraft(version.text);
    setNotice(preserveCurrent ? '已恢复旧稿；恢复前的内容已保留在版本记录中' : '已恢复旧稿');
  };

  const copyDraft = async () => {
    try {
      await navigator.clipboard.writeText(draft);
      setNotice('已复制');
    } catch {
      setNotice('复制失败，请手动选择文字');
    }
  };

  const downloadPortfolio = (functionId = null) => {
    const entries = functionId
      ? portfolioEntries.filter((item) => functionStatus(item, functionId) === '目标功能已核对')
      : portfolioEntries;
    if (entries.length === 0) return;
    const exportedAt = new Date();
    const lines = [
      '# EasyToLearn 大作文段落练习记录',
      '',
      `导出日期：${exportedAt.toLocaleDateString('zh-CN')}`,
      ...(functionId ? [`训练目标：${functions.find((item) => item.id === functionId)?.title || functionId}`] : []),
      `题目数：${entries.length} · 已自查：${entries.filter((item) => promptStatus(item) === '已自查').length}`,
      '',
      ...entries.flatMap((item) => {
        const itemDraft = drafts[item.id]?.trim() || '';
        const itemPlan = plansByPrompt[item.id] || {};
        const itemFunctions = chosenByPrompt[item.id] || [];
        const planLines = [...new Set([...itemFunctions, ...Object.keys(itemPlan)])].filter((id) => itemPlan[id]?.trim()).map((id) =>
          `- ${functions.find((entry) => entry.id === id)?.title || id}：${itemPlan[id].trim()}`
        );
        return [
          `## ${scenarios.find((entry) => entry.id === item.scenario)?.title || item.scenario} · ${item.title}`,
          '',
          `**题目：** ${item.question}`,
          `**状态：** ${promptStatus(item)}${itemDraft ? ` · ${countWords(itemDraft)} 词` : ''}`,
          '',
          '### 论证计划',
          '',
          ...(planLines.length ? planLines : ['暂无']),
          '',
          '### 英文段落',
          '',
          itemDraft || '暂无',
          '',
          '### 下一次修改目标',
          '',
          revisionsByPrompt[item.id]?.trim() || '暂无',
          '',
          '---',
          '',
        ];
      }),
    ];
    const file = new Blob([lines.join('\n')], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = `EasyToLearn-writing-portfolio${functionId ? `-${functionId}` : ''}-${exportedAt.toISOString().slice(0, 10)}.md`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice(`已导出 ${entries.length} 道题的练习记录`);
  };

  const wordCount = countWords(draft);
  const lengthStatus = wordCount < 80 ? '还可补充论证' : wordCount > 120 ? '可尝试精简' : '达到练习词数目标';
  const completionSteps = [
    { label: '写好至少两项论证计划', done: plannedFunctions.length >= 2 },
    { label: `写出 80–120 词段落（当前 ${wordCount} 词）`, done: wordCount >= 80 && wordCount <= 120 },
    { label: '完成通用写作自查', done: checkedReviewItems.length === reviewItems.length },
    { label: '完成本题审题检查', done: checkedTaskItems.length === prompt.checks.length },
    { label: '核对计划要点已写入段落', done: plannedFunctions.length >= 2 && plannedFunctions.every((id) => coveredFunctions.includes(id)) },
  ];
  const completedSteps = completionSteps.filter((step) => step.done).length;
  const nextStep = completionSteps.find((step) => !step.done);

  return (
    <section className={`mb-10 rounded-3xl border ${theme.secondary} ${theme.cardBg} p-6 md:p-8`} aria-labelledby="paragraph-practice-title">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <span className={`text-[11px] font-mono tracking-[0.2em] uppercase ${theme.accent}`}>From sentences to a paragraph</span>
          <h2 id="paragraph-practice-title" className={`mt-2 text-xl font-semibold ${theme.text}`}>段落应用练习</h2>
          <p className={`mt-2 max-w-2xl text-sm ${theme.accent}`}>选择一道大作文题目，挑选 2–3 种论证功能，写一段 80–120 词的英文主体段。参考表达结构，用自己的内容论证。</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <label className={`flex items-center gap-2 text-sm ${theme.text}`}>
            场景
            <select value={scenario} onChange={(event) => setScenario(event.target.value)} className={`rounded-xl border ${theme.secondary} ${theme.cardBg} ${theme.text} px-3 py-2`}>
              {scenarios.filter((item) => item.id !== 'all').map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
            </select>
          </label>
          <button type="button" onClick={() => downloadPortfolio()} disabled={portfolioEntries.length === 0}
            className={`rounded-xl border ${theme.secondary} px-3 py-2 text-xs font-medium ${theme.text} disabled:opacity-40`}>
            导出练习记录 ({portfolioEntries.length})
          </button>
        </div>
      </div>

      <div className={`mt-5 rounded-2xl border ${theme.secondary} p-4`}>
        {recommendedTarget && <div className={`mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border ${theme.secondary} p-3`}>
          <div>
            <p className={`text-xs font-medium ${theme.text}`}>{hasSentenceProgress ? '基于单句掌握记录的练习建议' : '从这道题开始练习'}</p>
            <p className={`mt-1 text-xs ${theme.accent}`}>
              {scenarios.find((item) => item.id === recommendedTarget.prompt.scenario)?.title} · {recommendedTarget.prompt.title} · {functions.find((item) => item.id === recommendedTarget.functionId)?.title}
              {hasSentenceProgress && `（单句已掌握 ${recommendedTarget.mastered}/${recommendedTarget.total}${recommendedTarget.unfamiliar ? `，待加强 ${recommendedTarget.unfamiliar}` : ''}）`}
            </p>
          </div>
          <button type="button" onClick={() => {
            setTargetFunction(recommendedTarget.functionId);
            goToPrompt(recommendedTarget.prompt, recommendedTarget.functionId);
          }} className="rounded-xl bg-indigo-600 px-3 py-2 text-xs font-medium text-white">练这道题 →</button>
        </div>}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className={`text-sm font-medium ${theme.text}`}>按论证功能找题</h3>
            <p className={`mt-1 text-xs ${theme.accent}`}>跨场景练同一种表达。只有在完成段落自查、写好该功能计划并核对成稿后，才记为目标功能已练。</p>
          </div>
          <label className={`flex items-center gap-2 text-xs ${theme.text}`}>
            训练目标
            <select value={targetFunction} onChange={(event) => setTargetFunction(event.target.value)}
              className={`rounded-xl border ${theme.secondary} ${theme.cardBg} ${theme.text} px-3 py-2`}>
              {functions.filter((item) => item.id !== 'all').map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
            </select>
          </label>
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {targetPrompts.map((item) => <button key={item.id} type="button" onClick={() => goToPrompt(item, targetFunction)}
            aria-current={item.id === activePromptId ? 'true' : undefined}
            className={`rounded-xl border p-3 text-left transition-colors ${item.id === activePromptId ? 'border-indigo-500 bg-indigo-500/10' : theme.secondary}`}>
            <span className={`block text-xs font-medium ${theme.text}`}>{item.title}</span>
            <span className={`mt-1 block text-xs ${theme.accent}`}>{scenarios.find((entry) => entry.id === item.scenario)?.title} · {functionStatus(item, targetFunction)}</span>
          </button>)}
        </div>
        <p className={`mt-2 text-xs ${theme.accent}`}>“{functions.find((item) => item.id === targetFunction)?.title}”已核对 {targetCompletedCount}/{targetPrompts.length} 题。点击题目会将该功能加入本段计划。</p>
        {targetCompletedCount > 0 && <details className={`mt-3 rounded-xl border ${theme.secondary} p-3`}>
          <summary className={`cursor-pointer text-xs font-medium ${theme.text}`}>回顾已核对的目标功能 ({targetCompletedCount})</summary>
          <div className="mt-3 space-y-3">
            {targetPrompts.filter((item) => functionStatus(item, targetFunction) === '目标功能已核对').map((item) => <div key={item.id} className={`rounded-lg border ${theme.secondary} p-3`}>
              <p className={`text-xs font-medium ${theme.text}`}>{scenarios.find((entry) => entry.id === item.scenario)?.title} · {item.title}</p>
              <p className={`mt-1 whitespace-pre-wrap text-xs leading-5 ${theme.accent}`}>{plansByPrompt[item.id]?.[targetFunction]}</p>
              <button type="button" onClick={() => goToPrompt(item, targetFunction)} className="mt-2 text-xs font-medium text-indigo-600 dark:text-indigo-300">查看段落 →</button>
            </div>)}
            <button type="button" onClick={() => downloadPortfolio(targetFunction)} className={`rounded-xl border ${theme.secondary} px-3 py-2 text-xs font-medium ${theme.text}`}>
              导出当前功能练习记录
            </button>
          </div>
        </details>}
      </div>

      <div className={`mt-5 rounded-2xl border ${theme.secondary} p-4`}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <label htmlFor="paragraph-prompt" className={`text-xs font-semibold ${theme.text}`}>写作题目</label>
          <p className={`text-xs ${theme.accent}`}>本场景已自查 {scenarioCompletedCount}/{availablePrompts.length} · 全部 {completedCount}/{writingPrompts.length}</p>
        </div>
        <select id="paragraph-prompt" value={activePromptId} onChange={(event) => setPromptId(event.target.value)}
          className={`mt-2 w-full rounded-xl border ${theme.secondary} ${theme.cardBg} ${theme.text} px-3 py-2 text-sm`}>
          {availablePrompts.map((item) => <option key={item.id} value={item.id}>{item.title} · {promptStatus(item)}</option>)}
        </select>
        <p className={`mt-3 text-sm font-medium leading-relaxed ${theme.text}`}>{prompt.question}</p>
        <p className={`mt-1 text-xs ${theme.accent}`}>{prompt.focus}</p>
        <div className={`mt-4 rounded-xl border ${theme.secondary} p-3`}>
          <p className={`text-xs font-medium ${theme.text}`}>本题建议功能 · 单句掌握情况</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {suggestedProgress.map((item) => <span key={item.id} className={`rounded-lg border ${theme.secondary} px-2 py-1 text-xs ${theme.accent}`}>
              {functions.find((entry) => entry.id === item.id)?.title} · {item.mastered}/{item.total} 已掌握{item.unfamiliar ? ' · 待加强' : ''}
            </span>)}
          </div>
          {recommendedFunction ? <button type="button" onClick={() => onPracticeFunction(scenario, recommendedFunction.id)}
            className="mt-3 text-xs font-medium text-indigo-600 dark:text-indigo-300 hover:underline">
            先练{functions.find((item) => item.id === recommendedFunction.id)?.title} →
          </button> : <p className={`mt-2 text-xs ${theme.accent}`}>建议功能的单句均已掌握，可以直接写段落。</p>}
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <p className={`text-xs ${theme.accent}`}>当前：{promptStatus(prompt)} · 完成进度 {completedSteps}/{completionSteps.length}。{nextStep ? `下一步：${nextStep.label}。` : '所有完成条件已满足。'}</p>
          <button type="button" onClick={() => nextPrompt && goToPrompt(nextPrompt)} disabled={!nextPrompt}
            className={`rounded-xl border ${theme.secondary} px-3 py-2 text-xs font-medium ${theme.text} disabled:opacity-40`}>
            {nextPrompt ? '继续下一道待完成题' : completedCount === writingPrompts.length ? '所有题目均已自查' : '完成当前题目即可收官'}
          </button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2" aria-label="本题完成条件">
          {completionSteps.map((step) => <span key={step.label} className={`rounded-lg border ${theme.secondary} px-2 py-1 text-xs ${step.done ? 'text-emerald-700 dark:text-emerald-300' : theme.accent}`}>
            {step.done ? '✓' : '○'} {step.label}
          </span>)}
        </div>
      </div>

      <div className="mt-5">
        <p className={`text-xs font-semibold ${theme.text}`}>本段想用的论证功能 <span className={`font-normal ${theme.accent}`}>（建议选 2–3 种）</span></p>
        <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="选择段落论证功能">
          {functions.filter((item) => item.id !== 'all').map((item) => <button key={item.id} type="button"
            onClick={() => toggleFunction(item.id)} aria-pressed={chosen.includes(item.id)}
            className={`rounded-xl px-3 py-2 text-xs transition-colors ${chosen.includes(item.id) ? 'bg-indigo-600 text-white' : `border ${theme.secondary} ${theme.accent} hover:${theme.text}`}`}>
            {item.title}
          </button>)}
        </div>
      </div>

      <div className={`mt-5 rounded-2xl border ${theme.secondary} p-4`}>
        <h3 className={`text-sm font-medium ${theme.text}`}>论证计划</h3>
        <p className={`mt-1 text-xs leading-5 ${theme.accent}`}>先为所选功能记下具体要点，再用自己的英文表达。计划按题目自动保存。</p>
        {chosen.length === 0 ? <p className={`mt-3 text-xs ${theme.accent}`}>选择上方的论证功能后，在这里整理思路。</p> : (
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {chosen.filter((id) => Object.hasOwn(planPrompts, id)).map((id) => <label key={id} className={`block text-xs font-medium ${theme.text}`}>
              {functions.find((item) => item.id === id)?.title || id}
              <span className={`mt-1 block font-normal ${theme.accent}`}>{planPrompts[id]}</span>
              <textarea value={plan[id] || ''} onChange={(event) => updatePlan(id, event.target.value)} rows={2}
                placeholder="写下与这道题相关的具体要点"
                className={`mt-2 w-full resize-y rounded-xl border ${theme.secondary} ${theme.cardBg} ${theme.text} p-3 text-xs leading-5 outline-none focus:border-indigo-500`} />
            </label>)}
          </div>
        )}
      </div>

      <button type="button" onClick={() => setShowReferences((value) => !value)} aria-expanded={showReferences}
        className={`mt-5 text-sm font-medium ${theme.text} underline underline-offset-4`}>
        {showReferences ? '收起' : '查看'}所选功能的表达参考
      </button>
      {showReferences && (
        <div className="mt-3 grid gap-2 md:grid-cols-2">
          {references.length === 0 ? <p className={`text-xs ${theme.accent}`}>先选择至少一种论证功能。</p> : references.map((reference) => <div key={reference.id} className={`rounded-xl border ${theme.secondary} p-3`}>
              <p className={`text-xs font-semibold ${theme.text}`}>{functions.find((item) => item.id === reference.argumentFunction)?.title}</p>
              <p className={`mt-1 text-xs leading-relaxed ${theme.accent}`}>{reference?.english_full}</p>
            </div>)}
        </div>
      )}

      <div id="paragraph-transfer-drafts" className="mt-4">
        <button type="button" onClick={() => {
          setTransferDrafts(readTransferDrafts(sentences));
          setShowTransferDrafts((value) => !value);
        }} aria-expanded={showTransferDrafts} className={`text-sm font-medium ${theme.text} underline underline-offset-4`}>
          {showTransferDrafts ? '收起' : '查看'}我的迁移表达（当前匹配 {matchingTransferDrafts.length} 条）
        </button>
        {showTransferDrafts && <div className="mt-3 grid gap-2 md:grid-cols-2">
          {matchingTransferDrafts.length === 0 ? <p className={`text-xs ${theme.accent}`}>当前场景与所选功能下还没有迁移表达。可先完成单句练习，再写下自己的句子。</p> : matchingTransferDrafts.map((sentence) => <div key={sentence.id} className={`rounded-xl border ${sentence.id === transferTarget?.sentenceId ? 'border-indigo-500 bg-indigo-500/10' : theme.secondary} p-3`}>
            <p className={`text-xs font-semibold ${theme.text}`}>{functions.find((item) => item.id === sentence.argumentFunction)?.title}</p>
            <p className={`mt-2 whitespace-pre-wrap text-xs leading-relaxed ${theme.text}`}>{transferDrafts[sentence.id]}</p>
            <button type="button" onClick={() => addTransferDraft(sentence)} disabled={draft.includes(transferDrafts[sentence.id].trim())}
              className="mt-3 text-xs font-medium text-indigo-600 dark:text-indigo-300 disabled:opacity-40">
              {draft.includes(transferDrafts[sentence.id].trim()) ? '已在段落中' : '加入段落 →'}
            </button>
          </div>)}
        </div>}
        {showTransferDrafts && matchingTransferDrafts.length > 0 && <p className={`mt-2 text-xs ${theme.accent}`}>加入后请按当前题目调整内容，并检查句子间的衔接。</p>}
      </div>

      <label htmlFor="paragraph-draft" className={`mt-6 block text-sm font-medium ${theme.text}`}>我的英文段落</label>
      <textarea id="paragraph-draft" value={draft} onChange={(event) => updateDraft(event.target.value)} rows={7}
        placeholder="Write your own academic paragraph here..."
        className={`mt-2 w-full resize-y rounded-2xl border ${theme.secondary} ${theme.cardBg} ${theme.text} p-4 text-sm leading-7 outline-none focus:border-indigo-500`} />
      <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
        <p className={`text-xs ${theme.accent}`}>{wordCount} 词 · {lengthStatus}（目标 80–120 词） · 草稿自动保存</p>
        <div className="flex items-center gap-3">
          {notice && <span role="status" className={`text-xs ${theme.accent}`}>{notice}</span>}
          <button type="button" onClick={() => updateDraft('')} disabled={!draft} className={`text-xs ${theme.accent} underline disabled:opacity-40`}>清空草稿</button>
          <button type="button" onClick={saveVersion} disabled={!draft.trim() || versions[0]?.text === draft} className={`rounded-xl border ${theme.secondary} px-4 py-2 text-xs font-medium ${theme.text} disabled:opacity-40`}>保存版本</button>
          <button type="button" onClick={copyDraft} disabled={!draft.trim()} className="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-medium text-white disabled:opacity-40">复制段落</button>
        </div>
      </div>
      <div className={`mt-5 rounded-2xl border ${theme.secondary} p-4`}>
        <h3 className={`text-sm font-medium ${theme.text}`}>雅思写作参考评阅</h3>
        <p className={`mt-1 text-xs leading-5 ${theme.accent}`}>依据 IELTS Writing Task 2 四项公开评分维度分析，给出水平估计、原文依据和语法等修改建议。结果仅用于练习，不是官方成绩。<a href="https://ielts.org/cdn/ielts-guides/ielts-writing-band-descriptors.pdf" target="_blank" rel="noreferrer" className="ml-1 underline underline-offset-2">查看官方评分描述</a></p>
        <div className="mt-3 flex gap-2" role="group" aria-label="评阅内容类型">
          {['paragraph', 'sentence'].map((mode) => <button key={mode} type="button" onClick={() => { setEvaluationMode(mode); setEvaluationError(''); }}
            aria-pressed={evaluationMode === mode} className={`rounded-xl border px-3 py-2 text-xs ${evaluationMode === mode ? 'border-indigo-500 bg-indigo-500/10 text-indigo-700 dark:text-indigo-200' : `${theme.secondary} ${theme.text}`}`}>
            {mode === 'paragraph' ? '评阅当前段落' : '评阅单句'}
          </button>)}
        </div>
        {evaluationMode === 'sentence' && <label className={`mt-4 block text-xs font-medium ${theme.text}`}>
          输入与本题相关的英文句子
          <textarea value={sentenceDraft} onChange={(event) => updateSentenceDraft(event.target.value)} rows={3}
            placeholder="Write one sentence you would use in this essay..."
            className={`mt-2 w-full resize-y rounded-xl border ${theme.secondary} ${theme.cardBg} ${theme.text} p-3 text-sm leading-6 outline-none focus:border-indigo-500`} />
        </label>}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <p className={`text-xs ${theme.accent}`}>{evaluationMode === 'sentence'
            ? '单句只估计词汇和语法表现，无法评定整篇 Task 2 的任务回应与结构。'
            : '仅依据这一段估计四项表现；完整 Task 2 作文需结合全篇判断。'}</p>
          <button type="button" onClick={evaluateDraft}
            disabled={countWords(evaluationDraft) < (evaluationMode === 'sentence' ? 3 : 20) || evaluationDraft.length > 3000 || evaluatingPromptId !== null}
            className="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-medium text-white disabled:opacity-40">
            {evaluatingPromptId === activePromptId ? '评阅中…' : evaluation ? '重新评阅' : '开始评阅'}
          </button>
        </div>
        <p className={`mt-2 text-xs ${theme.accent}`}>点击后会将当前题目和输入的英文内容发送至配置的评阅服务。单句至少 3 词，段落至少 20 词，最多 3000 字符。</p>
        {evaluationError && <p role="alert" className="mt-3 text-xs text-red-600 dark:text-red-300">{evaluationError}</p>}
        {evaluation && <div className="mt-4 space-y-3">
          <p className={`text-sm font-semibold ${theme.text}`}>{evaluationMode === 'sentence' ? '局部语言水平估计' : '本段 Task 2 水平估计'}：{evaluation.estimate === null ? '证据不足' : `约 ${evaluation.estimate.toFixed(1)}`}
            <span className={`ml-2 text-xs font-normal ${theme.accent}`}>{new Date(evaluation.evaluatedAt).toLocaleString('zh-CN')}</span>
          </p>
          {(evaluation.draft !== evaluationDraft || JSON.stringify(evaluation.functions || []) !== JSON.stringify(chosen)) && <p role="status" className="text-xs font-medium text-amber-700 dark:text-amber-300">这是旧稿或旧论证功能的评阅。内容已修改，请重新评阅。</p>}
          <p className={`text-xs leading-6 ${theme.text}`}>{evaluation.summary}</p>
          <p className="text-xs font-medium text-indigo-600 dark:text-indigo-300">下一步优先修改：{evaluation.priority}</p>
          <div className="grid gap-2 md:grid-cols-2">
            {evaluation.criteria.map((item) => <div key={item.id} className={`rounded-xl border ${theme.secondary} p-3`}>
              <p className={`text-xs font-semibold ${theme.text}`}>{criterionLabels[item.id]} · {item.band === null ? '单句无法评定' : `参考 ${item.band}`}</p>
              {item.evidence && <p className={`mt-2 text-xs italic leading-5 ${theme.accent}`}>原文：“{item.evidence}”</p>}
              <p className={`mt-2 text-xs leading-5 ${theme.text}`}>{item.analysis}</p>
              <p className={`mt-2 text-xs leading-5 ${theme.accent}`}>改进：{item.improvement}</p>
            </div>)}
          </div>
          <h4 className={`pt-2 text-xs font-semibold ${theme.text}`}>语言纠错</h4>
          {evaluation.corrections.length === 0 ? <p className={`text-xs ${theme.accent}`}>未发现需要明确纠正的语法、词汇或标点错误。</p> :
            <div className="space-y-2">{evaluation.corrections.map((item, index) => <div key={`${item.original}-${index}`} className={`rounded-xl border ${theme.secondary} p-3 text-xs leading-5 ${theme.text}`}>
              <p className="font-medium">{correctionLabels[item.type]}：{item.original} → {item.corrected}</p>
              <p className={`mt-1 ${theme.accent}`}>{item.reason}</p>
            </div>)}</div>}
        </div>}
      </div>
      {versions.length > 0 && (
        <details key={activePromptId} className={`mt-5 rounded-2xl border ${theme.secondary} p-4`}>
          <summary className={`cursor-pointer text-sm font-medium ${theme.text}`}>历史版本 ({versions.length}/5)</summary>
          <div className="mt-4 space-y-3">
            {versions.map((version, index) => <div key={`${version.createdAt}-${index}`} className={`rounded-xl border ${theme.secondary} p-3`}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className={`text-xs ${theme.accent}`}>{new Date(version.createdAt).toLocaleString('zh-CN')} · {countWords(version.text)} 词</p>
                <button type="button" onClick={() => restoreVersion(version)} disabled={draft === version.text} className="text-xs font-medium text-indigo-600 dark:text-indigo-300 disabled:opacity-40">恢复此版本</button>
              </div>
              <p className={`mt-2 whitespace-pre-wrap text-xs leading-relaxed ${theme.text}`}>{version.text}</p>
            </div>)}
          </div>
        </details>
      )}
      <div className={`mt-5 rounded-2xl border ${theme.secondary} p-4`}>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className={`text-sm font-medium ${theme.text}`}>写作自查 · {checkedReviewItems.length}/{reviewItems.length}</h3>
          <p className={`text-xs ${theme.accent}`}>修改草稿后需重新自查</p>
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {reviewItems.map((item) => <label key={item.id} className={`flex items-start gap-2 text-xs leading-5 ${theme.text} ${!draft.trim() ? 'opacity-50' : ''}`}>
            <input type="checkbox" checked={checkedReviewItems.includes(item.id)} onChange={() => toggleReviewItem(item.id)} disabled={!draft.trim()} className="mt-0.5 accent-indigo-600" />
            <span>{item.label}</span>
          </label>)}
        </div>
        <h4 className={`mt-5 text-xs font-medium ${theme.text}`}>本题审题检查 · {checkedTaskItems.length}/{prompt.checks.length}</h4>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {prompt.checks.map((item, index) => <label key={index} className={`flex items-start gap-2 text-xs leading-5 ${theme.text} ${!draft.trim() ? 'opacity-50' : ''}`}>
            <input type="checkbox" checked={checkedTaskItems.includes(index)} onChange={() => toggleTaskCheck(index)} disabled={!draft.trim()} className="mt-0.5 accent-indigo-600" />
            <span>{item}</span>
          </label>)}
        </div>
        {checkedReviewItems.length === reviewItems.length && checkedTaskItems.length === prompt.checks.length && <p role="status" className="mt-3 text-xs font-medium text-indigo-600 dark:text-indigo-300">已完成通用与本题自查。可以继续核对论证计划，或保存当前版本。</p>}
      </div>
      <div className={`mt-5 rounded-2xl border ${theme.secondary} p-4`}>
        <h3 className={`text-sm font-medium ${theme.text}`}>计划与成稿核对 · {plannedFunctions.filter((id) => coveredFunctions.includes(id)).length}/{plannedFunctions.length}</h3>
        <p className={`mt-1 text-xs ${theme.accent}`}>回看计划，逐项确认要点是否已经在英文段落中得到解释。修改计划或草稿后，需要重新确认。</p>
        {plannedFunctions.length === 0 ? <p className={`mt-3 text-xs ${theme.accent}`}>先在上方的论证计划中写下要点。</p> : (
          <div className="mt-3 space-y-3">
            {plannedFunctions.map((id) => <label key={id} className={`flex items-start gap-2 text-xs leading-5 ${theme.text} ${!draft.trim() ? 'opacity-50' : ''}`}>
              <input type="checkbox" checked={coveredFunctions.includes(id)} onChange={() => toggleCoverage(id)} disabled={!draft.trim()} className="mt-0.5 accent-indigo-600" />
              <span><strong>{functions.find((item) => item.id === id)?.title || id}：</strong>{plan[id]}</span>
            </label>)}
          </div>
        )}
        <label htmlFor="paragraph-next-revision" className={`mt-4 block text-xs font-medium ${theme.text}`}>下一次准备改进什么？</label>
        <textarea id="paragraph-next-revision" value={revisionsByPrompt[activePromptId] || ''} onChange={(event) => updateRevision(event.target.value)} rows={2}
          placeholder="例如：补充一个更具体的例子，并解释它如何支持观点。"
          className={`mt-2 w-full resize-y rounded-xl border ${theme.secondary} ${theme.cardBg} ${theme.text} p-3 text-xs leading-5 outline-none focus:border-indigo-500`} />
      </div>
    </section>
  );
}

export default ParagraphPractice;
