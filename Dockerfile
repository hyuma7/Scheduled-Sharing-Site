FROM node:20-slim as builder

# 環境変数を設定するARG命令を追加
ARG REACT_APP_ENV

# ビルド時に環境変数を設定
ENV REACT_APP_ENV=$REACT_APP_ENV

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"] 