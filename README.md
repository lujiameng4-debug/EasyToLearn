# EasyToLearn

An English sentence practice app with a React/Vite frontend and an Express/Prisma backend.

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

## Optional IELTS writing feedback

The paragraph practice page sends text only after the learner clicks **开始评阅**. It supports one sentence or the current body paragraph. Feedback uses the four public [IELTS Writing Task 2 assessment criteria](https://ielts.org/cdn/ielts-guides/ielts-writing-key-assessment-criteria.pdf) and includes grounded grammar, vocabulary and punctuation corrections. A sentence receives only lexical and grammar estimates; a body paragraph receives provisional estimates on all four dimensions. Neither is an official IELTS band. Feedback is saved in the browser with the related text and included in writing backups; changed text is marked as needing a new evaluation.

Choose one backend provider:

- **Local Ollama:** install and run Ollama, download a writing-capable model with `ollama pull qwen3:8b`, then start the API with `WRITING_EVALUATION_PROVIDER=ollama OLLAMA_WRITING_MODEL=qwen3:8b npm start`. Ollama must run on the same machine as the backend, at `127.0.0.1:11434`. Local inference has no per-request API charge but needs enough memory and processing power. The model is not downloaded by this project.
- **OpenAI API:** set `OPENAI_API_KEY` and `OPENAI_WRITING_MODEL` on the backend process before `npm start`. The default provider is `openai`. Keep the key on the server; never expose it through a `VITE_` variable.

With no configured provider model, the endpoint returns a configuration message instead of a score. For public deployment, add authentication or request limits to the evaluation endpoint to control resource use.

## Data safety

- Prisma's SQLite database is stored at `backend/prisma/dev.db`.
- Do not run `db:seed:reset` against data you need to keep. It deliberately deletes curriculum, sentences, and sentence review progress before reseeding.
- Production deployments need a managed backup and restore process before using persistent user data. The current schema and fixed local user ID are intended for a local single-user setup.

## Build

```sh
npm run build
npm run preview
```

The current Vite proxy is for development only. A production deployment must route `/api` to the backend through its hosting or reverse-proxy configuration.
