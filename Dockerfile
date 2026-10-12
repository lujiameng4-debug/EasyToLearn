FROM node:20-bookworm-slim AS build
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends openssl ca-certificates && rm -rf /var/lib/apt/lists/*
COPY package.json package-lock.json ./
COPY backend/package.json backend/package-lock.json ./backend/
RUN npm ci && npm --prefix backend ci
COPY . .
RUN cd backend && npx prisma generate --schema prisma/schema.postgres.prisma
RUN npm run build

FROM node:20-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production
RUN apt-get update && apt-get install -y --no-install-recommends openssl ca-certificates && rm -rf /var/lib/apt/lists/*
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/dist ./dist
COPY --from=build /app/src/data ./src/data
COPY --from=build /app/backend ./backend
EXPOSE 3000
CMD ["sh", "-c", "./backend/node_modules/.bin/prisma migrate deploy --schema backend/prisma/schema.postgres.prisma && node backend/server.js"]
