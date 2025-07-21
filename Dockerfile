# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app
COPY . .

# Install and build
RUN npm install
RUN npm run build

# Stage 2: Run
FROM node:20-alpine

WORKDIR /app

# Only copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json

# Install only production deps
RUN npm install --omit=dev

EXPOSE 3000

CMD ["npm", "start"]
