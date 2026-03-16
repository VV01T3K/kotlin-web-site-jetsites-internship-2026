FROM oven/bun:1.3.10 AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM deps AS build
WORKDIR /app
COPY . .
RUN bun run build

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package.json ./
COPY public ./public
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/build ./build
EXPOSE 3000
CMD ["node", "./node_modules/@react-router/serve/bin.js", "./build/server/index.js"]
