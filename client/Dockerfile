# ─── Build Stage ──────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

# Accept build arguments
ARG VITE_API_BASE_URL
# Set as environment variable for Vite to use during build
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build the Vite React app
COPY . .
RUN npm run build

# ─── Production Stage ─────────────────────────────────────────────────────────
FROM nginx:alpine

# Copy the custom Nginx config that listens on port 8080
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built artifacts from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
