# EasyToLearn

An English sentence practice app with a React/Vite frontend and an Express/Prisma backend. It has 22 standard modules with 100 sentence questions each. Daily review and a custom sentence library are separate practice tools.

Development happens on `dev`. Merge reviewed changes into `main` when ready to release.

## Requirements

- Node.js 18 or newer
- npm

## Local development

Install dependencies at the project root and in `backend/`:

```sh
npm install
npm --prefix backend install
npm run db:generate
npm run db:push
```

Seed curriculum data on the first run. Normal seeding is idempotent and keeps existing learning progress:

```sh
npm run db:seed
```

To intentionally clear curriculum, sentences, and associated review progress in a local/test database:

```sh
npm run db:seed:reset
```

Run the API and frontend in separate terminals:

```sh
npm start
npm run dev
```

The API listens on port `3000` by default. Set `PORT` to change it. The Vite `/api` proxy uses `http://localhost:3000` by default and can be changed with `VITE_API_PROXY_TARGET`.

Check backend and database readiness at `http://localhost:3000/api/health`.

## Data safety

- Prisma's SQLite database is stored at `backend/prisma/dev.db`.
- Do not run `db:seed:reset` against data you need to keep. It deliberately deletes curriculum, sentences, and sentence review progress before reseeding.
- The local development schema uses SQLite; the server deployment uses a separate PostgreSQL schema and versioned migrations.
- Practice APIs identify a browser with a signed cookie. This separates test users but does not provide login, account recovery, or cross-device sync.
- Production deployments need external backups, restore practice, and an account system before using persistent user data.

## Build

```sh
npm run build
npm run preview
```

The Vite proxy is for development only. After `npm run build`, Express serves `dist/` and the API on the same origin. The single-server Tencent Cloud staging setup is documented in [deploy/README.md](deploy/README.md).
