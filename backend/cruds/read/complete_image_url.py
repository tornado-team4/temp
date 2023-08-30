def complete_image_url(db, room_id: str):
    res = db.collection("room").document(room_id).collection("gameObjects").document("Image").get().to_dict().get("url")
    return res
