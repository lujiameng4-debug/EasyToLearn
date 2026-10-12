import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateReviewUpdate,
  validateStatsSync,
} from '../backend/validation.js';

test('review updates accept supported actions and require a sentence ID', () => {
  assert.equal(validateReviewUpdate({ sentenceId: 'sentence-1', action: 'correct' }), null);
  assert.equal(validateReviewUpdate({ action: 'correct' }), 'userId and sentenceId are required');
  assert.equal(validateReviewUpdate({ sentenceId: 'sentence-1', action: 'skip' }), 'Invalid review action');
});

test('stats sync accepts valid history and rejects malformed dates and counts', () => {
  assert.equal(validateStatsSync({
    history: { '2026-10-08': 3 },
    lastActiveDate: '2026-10-08',
    currentStreak: 4,
  }), null);
  assert.match(validateStatsSync({ history: { '2026-02-31': 1 } }), /valid dates/);
  assert.match(validateStatsSync({ history: { '2026-10-08': -1 } }), /non-negative integer/);
  assert.match(validateStatsSync({ currentStreak: 1.5 }), /currentStreak/);
});

test('stats sync rejects array payloads and blank user IDs', () => {
  assert.match(validateStatsSync({ history: [] }), /history must be an object/);
  assert.match(validateStatsSync({ userId: '  ' }), /userId/);
});
