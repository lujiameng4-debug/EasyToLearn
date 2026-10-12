import React, { useState } from 'react';

const draftKey = (id) => `easyToLearn_transfer_${id}`;
const readDrafts = (sentences) => Object.fromEntries(sentences.map((sentence) => [sentence.id, localStorage.getItem(draftKey(sentence.id)) || '']));

function TransferDrafts({ sentences, scenarios, functions, selectedScenario, selectedFunction, theme, onPractice, onUseInParagraph }) {
  const [drafts, setDrafts] = useState(() => readDrafts(sentences));
  const [expanded, setExpanded] = useState(false);

  const saved = sentences.filter((sentence) => drafts[sentence.id]?.trim());
  const visible = saved.filter((sentence) =>
    (selectedScenario === 'all' || sentence.scenario === selectedScenario) &&
    (selectedFunction === 'all' || sentence.argumentFunction === selectedFunction)
  );

  const updateDraft = (id, value) => {
    setDrafts((previous) => ({ ...previous, [id]: value }));
    if (value) localStorage.setItem(draftKey(id), value);
    else localStorage.removeItem(draftKey(id));
    window.dispatchEvent(new Event('easyToLearn:transferDraftChanged'));
  };

  return (
    <section className={`mb-10 rounded-3xl border ${theme.secondary} ${theme.cardBg} p-6 md:p-8`} aria-labelledby="transfer-drafts-title">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 id="transfer-drafts-title" className={`text-lg font-semibold ${theme.text}`}>我的迁移表达</h2>
          <p className={`mt-1 text-xs ${theme.accent}`}>已保存 {saved.length} 条 · 当前筛选显示 {visible.length} 条 · 草稿只保存在本设备</p>
        </div>
        <button type="button" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded}
          className={`rounded-xl border ${theme.secondary} px-4 py-2 text-sm ${theme.text} hover:bg-black/5 dark:hover:bg-white/5`}>
          {expanded ? '收起表达' : '查看表达'}
        </button>
      </div>

      {expanded && (
        <div className="mt-5 space-y-3">
          {visible.length === 0 ? (
            <p className={`rounded-xl border border-dashed ${theme.secondary} p-5 text-sm ${theme.accent}`}>
              {saved.length === 0 ? '完成单句练习后，在“迁移到你的作文”写下自己的句子，这里会汇集草稿。' : '当前筛选下没有迁移表达，可切换上方场景或论证功能查看。'}
            </p>
          ) : visible.map((sentence) => (
            <article key={sentence.id} className={`rounded-2xl border ${theme.secondary} p-4`}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className={`text-xs font-semibold ${theme.text}`}>
                  {scenarios.find((item) => item.id === sentence.scenario)?.title} · {functions.find((item) => item.id === sentence.argumentFunction)?.title}
                </p>
                <div className="flex items-center gap-3">
                  <button type="button" onClick={() => onUseInParagraph(sentence)} className="text-xs font-medium text-indigo-600 dark:text-indigo-300 hover:underline">用于段落 →</button>
                  <button type="button" onClick={() => onPractice(sentence)} className="text-xs font-medium text-indigo-600 dark:text-indigo-300 hover:underline">复练原句 →</button>
                </div>
              </div>
              <p className={`mt-2 text-xs leading-relaxed ${theme.accent}`}>参考：{sentence.english_full}</p>
              <label htmlFor={`draft-${sentence.id}`} className={`mt-3 block text-xs ${theme.text}`}>我的表达</label>
              <textarea id={`draft-${sentence.id}`} value={drafts[sentence.id]} onChange={(event) => updateDraft(sentence.id, event.target.value)} rows={2}
                className={`mt-1 w-full resize-y rounded-xl border ${theme.secondary} ${theme.cardBg} ${theme.text} p-3 text-sm leading-relaxed outline-none focus:border-indigo-500`} />
              <div className="mt-2 flex items-center justify-between gap-2">
                <p className={`text-[11px] ${theme.accent}`}>修改后自动保存</p>
                <button type="button" onClick={() => updateDraft(sentence.id, '')} className={`text-xs ${theme.accent} hover:underline`}>删除这条草稿</button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default TransferDrafts;
