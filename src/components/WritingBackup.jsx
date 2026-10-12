import React, { useState } from 'react';
import { writingPrompts } from '../data/writingPrompts';

const backupFormat = 'EasyToLearnWritingBackup';
const backupVersion = 1;
const paragraphPrefixes = [
  'easyToLearn_paragraph_prompt_',
  'easyToLearn_paragraph_functions_',
  'easyToLearn_paragraph_versions_',
  'easyToLearn_paragraph_review_',
  'easyToLearn_paragraph_plan_',
  'easyToLearn_paragraph_plan_coverage_',
  'easyToLearn_paragraph_next_revision_',
  'easyToLearn_paragraph_task_checks_',
  'easyToLearn_paragraph_evaluation_',
  'easyToLearn_ielts_paragraph_evaluation_',
  'easyToLearn_ielts_sentence_evaluation_',
  'easyToLearn_ielts_sentence_draft_',
];

const readProgress = () => {
  try {
    const value = JSON.parse(localStorage.getItem('easyToLearn_progress') || '{}');
    return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
  } catch { return {}; }
};

function WritingBackup({ sentences, theme }) {
  const [pending, setPending] = useState(null);
  const [error, setError] = useState('');
  const paragraphKeys = writingPrompts.flatMap((prompt) => paragraphPrefixes.map((prefix) => `${prefix}${prompt.id}`));
  const transferKeys = sentences.map((sentence) => `easyToLearn_transfer_${sentence.id}`);
  const allowedKeys = new Set([...paragraphKeys, ...transferKeys, 'easyToLearn_paragraph_last_prompt']);
  const sentenceIds = new Set(sentences.map((sentence) => sentence.id));

  const exportBackup = () => {
    const records = Object.fromEntries([...allowedKeys].flatMap((key) => {
      const value = localStorage.getItem(key);
      return value === null ? [] : [[key, value]];
    }));
    const progress = Object.fromEntries(Object.entries(readProgress()).filter(([id, value]) =>
      sentenceIds.has(id) && ['practiced', 'mastered', 'unfamiliar'].includes(value)
    ));
    const payload = { format: backupFormat, version: backupVersion, exportedAt: new Date().toISOString(), records, progress };
    const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `EasyToLearn-writing-backup-${payload.exportedAt.slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setError('');
  };

  const selectBackup = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    setPending(null);
    setError('');
    if (!file) return;
    if (file.size > 2_000_000) {
      setError('备份文件超过 2 MB，无法导入。');
      return;
    }
    try {
      const data = JSON.parse(await file.text());
      if (data?.format !== backupFormat || data.version !== backupVersion ||
        !data.records || typeof data.records !== 'object' || Array.isArray(data.records) ||
        !data.progress || typeof data.progress !== 'object' || Array.isArray(data.progress)) {
        throw new Error('文件不是受支持的 EasyToLearn 写作备份。');
      }
      if (Object.entries(data.records).some(([key, value]) => !allowedKeys.has(key) || typeof value !== 'string' || value.length > 100_000) ||
        Object.entries(data.progress).some(([id, value]) => !sentenceIds.has(id) || !['practiced', 'mastered', 'unfamiliar'].includes(value))) {
        throw new Error('备份中包含无效的练习数据。');
      }
      const draftCount = writingPrompts.filter((prompt) => data.records[`easyToLearn_paragraph_prompt_${prompt.id}`]?.trim()).length;
      const transferCount = transferKeys.filter((key) => data.records[key]?.trim()).length;
      setPending({ data, fileName: file.name, draftCount, transferCount });
    } catch (reason) {
      setError(reason instanceof SyntaxError ? 'JSON 文件无法解析。' : reason.message || '无法读取备份文件。');
    }
  };

  const importBackup = () => {
    if (!pending || !window.confirm('导入将覆盖本设备现有的写作草稿、计划、版本、迁移表达和大作文句型掌握记录。确定继续吗？')) return;
    const keys = [...allowedKeys, 'easyToLearn_progress'];
    const previous = Object.fromEntries(keys.map((key) => [key, localStorage.getItem(key)]));
    try {
      for (const key of allowedKeys) localStorage.removeItem(key);
      for (const [key, value] of Object.entries(pending.data.records)) localStorage.setItem(key, value);
      // Empty prompt keys prevent older scenario drafts from reappearing after import.
      for (const prompt of writingPrompts) {
        const key = `easyToLearn_paragraph_prompt_${prompt.id}`;
        if (!Object.hasOwn(pending.data.records, key)) localStorage.setItem(key, '');
      }
      const progress = readProgress();
      for (const id of sentenceIds) delete progress[id];
      Object.assign(progress, pending.data.progress);
      localStorage.setItem('easyToLearn_progress', JSON.stringify(progress));
      window.location.reload();
    } catch {
      for (const [key, value] of Object.entries(previous)) {
        if (value === null) localStorage.removeItem(key);
        else localStorage.setItem(key, value);
      }
      setError('导入失败，原有记录已恢复。请检查浏览器存储空间。');
    }
  };

  return (
    <section className={`mb-10 rounded-3xl border ${theme.secondary} ${theme.cardBg} p-6 md:p-8`} aria-labelledby="writing-backup-title">
      <h2 id="writing-backup-title" className={`text-lg font-semibold ${theme.text}`}>写作数据备份</h2>
      <p className={`mt-2 text-xs leading-6 ${theme.accent}`}>保存段落草稿、计划、历史版本、迁移表达与大作文句型掌握记录。备份文件只下载到本设备。</p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button type="button" onClick={exportBackup} className="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-medium text-white">下载 JSON 备份</button>
        <label className={`text-xs font-medium ${theme.text}`}>
          选择备份文件
          <input type="file" accept=".json,application/json" onChange={selectBackup}
            className={`mt-1 block max-w-full text-xs ${theme.accent} file:mr-3 file:rounded-xl file:border file:border-current file:bg-transparent file:px-4 file:py-2 file:text-xs file:font-medium`} />
        </label>
      </div>
      {error && <p role="alert" className="mt-3 text-xs text-red-600 dark:text-red-300">{error}</p>}
      {pending && <div className={`mt-4 rounded-xl border ${theme.secondary} p-4`}>
        <p className={`text-xs font-medium ${theme.text}`}>{pending.fileName}</p>
        <p className={`mt-1 text-xs ${theme.accent}`}>包含 {pending.draftCount} 篇段落草稿、{pending.transferCount} 条迁移表达、{Object.keys(pending.data.progress).length} 条大作文句型进度。</p>
        <p className={`mt-2 text-xs ${theme.accent}`}>导入会覆盖本设备的写作记录；其他练习模块的掌握记录会保留。</p>
        <button type="button" onClick={importBackup} className="mt-3 rounded-xl border border-red-500/50 px-4 py-2 text-xs font-medium text-red-700 dark:text-red-300">确认覆盖并导入</button>
      </div>}
    </section>
  );
}

export default WritingBackup;
