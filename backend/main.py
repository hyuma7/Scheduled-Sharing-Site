from fastapi import FastAPI
import os

app = FastAPI()

@app.get("/env")
def read_env():
    secret_value = os.getenv("SECRET", "Not Found")
    return {"SECRET": secret_value} 