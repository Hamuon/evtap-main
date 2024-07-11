
FROM node:22 as base
WORKDIR /app

# Stage 1: Build the Next.js app
FROM base AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build


FROM base AS final
WORKDIR /app

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.mjs ./next.config.mjs

EXPOSE 3000
CMD ["npm", "run", "start"]