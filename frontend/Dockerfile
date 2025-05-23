# Build stage
FROM node:lts-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/public /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]

