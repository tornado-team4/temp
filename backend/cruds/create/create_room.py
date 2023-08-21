def create_room(db, name, avatar_url):
    room_collection_ref = db.collection("room")
    room_doc_id = room_collection_ref.document().id

    users_collection_ref = room_collection_ref.document(room_doc_id).collection("users")
    user_doc_ref = users_collection_ref.document()
    user_doc_ref.set({"role": "host", "name": name, "avatar": avatar_url})

    return {
        "room_id": room_doc_id,
        "user_id": user_doc_ref.id,
        "role": "host"
    }
