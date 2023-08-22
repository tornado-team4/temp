def participant_list(db, id):
    docs = db.collection("room").document(id).collection("users").stream()

    res = []
    # ドキュメントの値を表示
    for doc in docs:
        print(f"{doc.id} => {doc.to_dict()}")
        res.append(
            {
                "id": doc.id,
                "name": doc.to_dict().get("name"),
                "avatar_url": doc.to_dict().get("avatar"),
                "role": doc.to_dict().get("role"),
            }
        )
    return res
