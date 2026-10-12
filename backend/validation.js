const validDate = (date) => {
  if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  return new Date(`${date}T00:00:00Z`).toISOString().slice(0, 10) === date;
};

export const validateReviewUpdate = ({ userId = 'local_user', sentenceId, action } = {}) => {
  if (typeof userId !== 'string' || !userId.trim() || typeof sentenceId !== 'string' || !sentenceId.trim()) {
    return 'userId and sentenceId are required';
  }
  if (!['correct', 'wrong', 'mastered', 'forgot'].includes(action)) {
    return 'Invalid review action';
  }
  return null;
};

export const validateStatsSync = ({ userId = 'local_user', history = {}, lastActiveDate, currentStreak } = {}) => {
  if (typeof userId !== 'string' || !userId.trim()) {
    return 'userId must be a non-empty string';
  }
  if (!history || typeof history !== 'object' || Array.isArray(history)) {
    return 'history must be an object keyed by YYYY-MM-DD dates';
  }
  const historyIsValid = Object.entries(history).every(([date, count]) =>
    validDate(date) && Number.isInteger(count) && count >= 0
  );
  if (!historyIsValid) {
    return 'history must contain valid dates and non-negative integer counts';
  }
  if (lastActiveDate != null && !validDate(lastActiveDate)) {
    return 'lastActiveDate must use YYYY-MM-DD format';
  }
  if (currentStreak != null && (!Number.isInteger(currentStreak) || currentStreak < 0)) {
    return 'currentStreak must be a non-negative integer';
  }
  return null;
};
