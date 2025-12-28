FROM node:20-alpine as builder

WORKDIR /app
RUN corepack enable

COPY package.json pnpm-workspace.yaml turbo.json ./
COPY pnpm-lock.yaml ./pnpm-lock.yaml
COPY apps/web/package.json apps/web/package.json

RUN pnpm install

COPY . .

RUN pnpm --filter web build

FROM node:20-alpine as runner
WORKDIR /app
RUN corepack enable
ENV NODE_ENV=production

COPY --from=builder /app/apps/web/.next/standalone ./
COPY --from=builder /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder /app/apps/web/public ./public

EXPOSE 3000
CMD ["node", "apps/web/server.js"]
