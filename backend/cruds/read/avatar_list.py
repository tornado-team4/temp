def avatar_list(db):
    res = db.collection("avatar").document("list").get().to_dict().get("url")
    return res
