from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import firebase_admin
from firebase_admin import credentials, firestore

import cruds.read.root as read_root
import cruds.read.avatar_list as read_avatar_list
import cruds.read.participant_list as read_participant_list
import cruds.create.create_room as create_room
import cruds.create.join_room as join_room
import utils.convert_env_to_dict as convert_env_to_dict

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
service_account_dict = convert_env_to_dict.convert_env_to_dict()
cred = credentials.Certificate(service_account_dict)
firebase_admin.initialize_app(cred)
db = firestore.client()


# --------------------

# Websocket

# --------------------
# WebSocket接続を管理するための dict
connected_clients = {}

# --------------------

# Pydanticのデータモデル

# --------------------
# Roomの作成、参加に関するパラメータ
class RoomParams(BaseModel):
    name: str
    avatar_url: str

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
def post_create_room(params: RoomParams):
    name = params.name
    avatar_url = params.avatar_url
    res = create_room.create_room(db, name, avatar_url)
    return res


@app.post(
    "/api/v1/join-room",
    summary="ルームに参加するエンドポイント",
    description="ルームに参加するエンドポイント",
    response_description="ルームのIDとユーザーのID",
)
def post_join_room(room_id: str, name: str, avatar_url: str):
    res = join_room.join_room(db, room_id, name, avatar_url)
    return res


# WebSocket用のエンドポイント
@app.websocket("/ws/{client_id}")
async def websocket_endpoint(ws: WebSocket, client_id: str):
    await ws.accept()
    key = ws.headers.get("sec-websocket-key")

    # クライアントIDを辞書に追加
    if client_id not in connected_clients:
        connected_clients[client_id] = {}
        connected_clients[client_id][key] = ws
    else:
        connected_clients[client_id][key] = ws

    try:
        # クライアントからのメッセージを待ち受け
        while True:
            _ = await ws.receive_text()

            res = read_participant_list.participant_list(db, client_id)
            for client in connected_clients[client_id].values():
                await client.send_json(res)

    except WebSocketDisconnect:
        # エラーが発生した場合や接続が閉じられた場合、辞書からクライアントを削除
        del connected_clients[client_id]
