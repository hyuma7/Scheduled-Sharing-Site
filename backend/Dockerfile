# Cloud Run用のベースイメージ
FROM python:3.9-slim

# 作業ディレクトリを設定
WORKDIR /app

# 必要なパッケージをインストール
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# アプリケーションのソースコードをコピー
COPY . .

# 環境変数の設定
ENV PORT 8000

# FastAPIアプリケーションを起動（Cloud Run用の設定）
CMD exec uvicorn main:app --host 0.0.0.0 --port ${PORT} 