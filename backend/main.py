from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

import cruds.read.root as read_root

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def get_root():
    res = read_root.root()
    return res
