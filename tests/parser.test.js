import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseRawTextToLibrary,
  stringifyLibraryToRawText,
} from '../src/utils/parser.js';

test('empty input returns an empty library', () => {
  assert.deepEqual(parseRawTextToLibrary('  \n  '), []);
});

test('parses sentence pairs, capitalizes the first word, and keeps punctuation', () => {
  const [sentence] = parseRawTextToLibrary('你好。\nhello, world!');

  assert.equal(sentence.chinese, '你好。');
  assert.equal(sentence.english_full, 'hello, world!');
  assert.deepEqual(sentence.words, [
    { word: 'Hello', punctuation: ',' },
    { word: 'world', punctuation: '!' },
  ]);
});

test('collects analysis lines and parses multiple sentence blocks', () => {
  const library = parseRawTextToLibrary(
    '你好\nhello there.\n# 主谓结构\n# 注意语序\n\n再见\ngoodbye',
  );

  assert.equal(library.length, 2);
  assert.deepEqual(library[0].analysis, ['主谓结构', '注意语序']);
  assert.deepEqual(library[1].analysis, []);
});

test('stringify output can be parsed back without losing sentence or analysis text', () => {
  const original = parseRawTextToLibrary('你好\nhello, world!\n# 语法说明');
  const parsedAgain = parseRawTextToLibrary(stringifyLibraryToRawText(original));

  assert.equal(parsedAgain[0].chinese, original[0].chinese);
  assert.equal(parsedAgain[0].english_full, original[0].english_full);
  assert.deepEqual(parsedAgain[0].analysis, original[0].analysis);
});

test('incomplete sentence pairs are ignored safely', () => {
  assert.deepEqual(parseRawTextToLibrary('只有中文'), []);
});

test('stringify handles structured analysis and malformed word tokens without undefined text', () => {
  const rawText = stringifyLibraryToRawText([{
    chinese: '你好',
    english_full: 'Hello there.',
    words: [{ punctuation: '!' }],
    analysis: [{ type: '句型', text: '这是一个说明。' }],
  }]);

  assert.equal(rawText, '你好\nHello there.\n# 这是一个说明。');
  assert.doesNotMatch(rawText, /undefined|\[object Object\]/);
});
