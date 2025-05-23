# Build stage
FROM golang:latest AS builder

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN go build -o server .

# Final stage
FROM alpine:latest

WORKDIR /root/
COPY --from=builder /app/server .

CMD ["./server"]

