def upload_image(db, room_id, file_name):
    images_collection_ref = db.collection("room").document(room_id).collection("images")
    images_doc_ref = images_collection_ref.document()
    images_doc_ref.set({"file_name": file_name})

    return "success"
