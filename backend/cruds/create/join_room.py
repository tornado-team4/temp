def join_room(db, room_id, name, avatar_url):
    users_collection_ref = db.collection("room").document(room_id).collection("users")
    user_doc_ref = users_collection_ref.document()
    user_doc_ref.set({"role": "participant", "name": name, "avatar": avatar_url})

    return {
        "room_id": room_id,
        "user_id": user_doc_ref.id,
        "role": "participant"
    }
