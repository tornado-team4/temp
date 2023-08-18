from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

import cruds.read.root as read_root
import cruds.read.avatar_list as read_avatar_list
import cruds.create.create_room as create_room

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --------------------

# Firebase の認証

# --------------------
path = "path/db.json"
cred = credentials.Certificate(path)
firebase_admin.initialize_app(cred)
db = firestore.client()


# --------------------

# エンドポイント

# --------------------


@app.get(
    "/",
    summary="FastAPI の起動を確認するエンドポイント",
    description="FastAPI の起動を確認するエンドポイント",
    response_description="response description",
)
def get_root():
    res = read_root.root()
    return res


@app.get(
    "/api/v1/avatar-list",
    summary="アバター一覧を取得するエンドポイント",
    description="アバター一覧を取得するエンドポイント",
    response_description="アバターのリスト",
)
def get_avatar_list():
    res = read_avatar_list.avatar_list(db)
    return res


@app.post(
    "/api/v1/create-room",
    summary="ルームを作成するエンドポイント",
    description="ルームを作成するエンドポイント",
    response_description="ルームのIDとユーザーのID",
)
def post_create_room(name: str, avatar_url: str):
    res = create_room.create_room(db, name, avatar_url)
    return res


@app.post(
    "/api/v1/join-room",
    summary="ルームに参加するエンドポイント",
    description="ルームに参加するエンドポイント",
    response_description="ルームのIDとユーザーのID",
)
def post_join_room(room_id: str, name: str, avatar_url: str):
    res = {}
    return res
