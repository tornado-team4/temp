def selection_album_comments(original_data: list):
    # 参加人数は6人, gameProgress は1(アルバムに使用する画像は1枚)のミニマムな実装をしている
    # userId の重複する人がいる場合1ユーザー1コメントにする
    s = set()
    res = []
    for data in original_data:
        if data["user_id"] not in s:
            res.append(data)
            s.add(data["user_id"])
    return res
