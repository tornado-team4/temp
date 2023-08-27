def image_list(db, room_id):
    docs = db.collection("room").document(room_id).collection("images").stream()
    res = []
    for doc in docs:
        res.append(doc.to_dict().get("file_name"))

    return res
