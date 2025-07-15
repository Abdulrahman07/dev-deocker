FROM node:21-alpine AS base

WORKDIR /app
COPY package.json package-lock.json .

# ===== DEVELOPMENT STAGE =====
FROM base AS development

RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start-dev"]

# ===== PRODUCTION STAGE =====
FROM base AS production

RUN npm ci --omit=dev
COPY . .
EXPOSE 3000
CMD ["npm", "start"]