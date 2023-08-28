def comment_list(db, id):
    docs = db.collection("room").document(id).collection("comments").stream()

    res = []
    # ドキュメントの値を表示
    for doc in docs:
        res.append(
            {
                "id": doc.id,  # 自動採番される id
                "gameProgress": doc.to_dict().get("gameProgress"),
                "text": doc.to_dict().get("text"),
                "user_id": doc.to_dict().get("userId"),
                "user_name": doc.to_dict().get("userName"),
            }
        )
    return res
