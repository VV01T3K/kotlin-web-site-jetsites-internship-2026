# ---- deps stage: install all dependencies ----
FROM oven/bun:1-alpine AS deps

WORKDIR /app

COPY package.json bun.lock ./
COPY patches/ ./patches/

RUN bun install --frozen-lockfile

# ---- builder stage: build the app ----
FROM deps AS builder

COPY . .

RUN bun --bun react-router build

# ---- runner stage: production image ----
FROM oven/bun:1-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=9001

# Copy only production dependencies
COPY package.json bun.lock ./
COPY patches/ ./patches/
RUN bun install --frozen-lockfile --production

# Copy build output
COPY --from=builder /app/build ./build

EXPOSE 9001

CMD ["bun", "--bun", "react-router-serve", "./build/server/index.js"]
