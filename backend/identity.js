import { createHmac, randomUUID, timingSafeEqual } from 'node:crypto';

const COOKIE_NAME = 'etl_session';
const MAX_AGE_SECONDS = 60 * 60 * 24 * 180;
const secret = process.env.SESSION_SECRET || (process.env.NODE_ENV === 'production' ? '' : 'local-development-only');

if (!secret || (process.env.NODE_ENV === 'production' && secret.length < 32)) {
  throw new Error('SESSION_SECRET must contain at least 32 characters in production.');
}

const sign = (userId) => createHmac('sha256', secret).update(userId).digest('hex');

const getCookie = (header = '') => header.split(';').map(part => part.trim()).find(part => part.startsWith(`${COOKIE_NAME}=`))?.slice(COOKIE_NAME.length + 1);

const readIdentity = (cookie) => {
  if (!cookie) return null;
  const [userId, signature, extra] = cookie.split('.');
  if (extra || !/^[0-9a-f-]{36}$/.test(userId || '') || !/^[0-9a-f]{64}$/.test(signature || '')) return null;
  const expected = Buffer.from(sign(userId), 'hex');
  const actual = Buffer.from(signature, 'hex');
  return timingSafeEqual(actual, expected) ? userId : null;
};

export const identifyPracticeUser = (req, res, next) => {
  let userId = readIdentity(getCookie(req.headers.cookie));
  if (!userId) {
    userId = randomUUID();
    const flags = [`${COOKIE_NAME}=${userId}.${sign(userId)}`, 'HttpOnly', 'SameSite=Lax', 'Path=/api', `Max-Age=${MAX_AGE_SECONDS}`];
    if (process.env.SESSION_COOKIE_SECURE === 'true') flags.push('Secure');
    res.setHeader('Set-Cookie', flags.join('; '));
  }
  req.practiceUserId = userId;
  next();
};
