FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
COPY nuxt.config.js ./
COPY urls/index.ts ./urls/index.ts
COPY utils/createJSON_LD.ts ./utils/createJSON_LD.ts
COPY model ./model
COPY --from=builder ./app/.nuxt ./.nuxt/
COPY --from=builder ./app/server-middleware ./server-middleware
# COPY --from=builder ./app/node_modules/@nuxtjs/sitemap ./node_modules/@nuxtjs/sitemap
# RUN npm ci --production && npm cache clean --force
RUN npm i -g nuxt-start && npm i -g @nuxtjs/sitemap@2.4.0 && npm cache clean --force
ENV HOST=0.0.0.0
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "npx", "nuxt-start" ]
