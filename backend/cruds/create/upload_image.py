def upload_image(db, room_id, url):
    images_collection_ref = db.collection("room").document(room_id).collection("images")
    images_doc_ref = images_collection_ref.document()
    images_doc_ref.set({"url": url})

    images_doc_ref = db.collection("room").document(room_id).collection("gameObjects").document("Image")
    images_doc_ref.set({"url": url})

    return "success"
