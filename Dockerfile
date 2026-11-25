# ─── Xapely marketing site (Vite + React SPA) ────────────────────────────────
# Builds the static site, then serves dist/ with nginx.
#
#   docker build -t xapely-web \
#     --build-arg VITE_API_URL=https://xapely-orbit-backend-bootstrap.onrender.com \
#     --build-arg VITE_WEBSITE_URL=https://xapely.com .
#   docker run -p 8080:8080 xapely-web

# ─── Build ───────────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# VITE_* values are baked into the bundle at build time.
# Render passes the service's environment variables as build args.
ARG VITE_API_URL
ARG VITE_WEBSITE_URL
RUN npm run build

# ─── Serve ───────────────────────────────────────────────────────────────────
FROM nginx:1.27-alpine

# nginx renders /etc/nginx/templates/*.template with the container's env on
# start, so `listen ${PORT}` picks up the port Render injects.
ENV PORT=8080
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080
