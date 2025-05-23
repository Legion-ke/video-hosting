# Build stage
FROM node:lts-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build
RUN npm run preview # Optional: for local preview, not needed for static export

# If using adapter-static, the static site is in /app/build
# Production stage
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
