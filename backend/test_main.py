from fastapi.testclient import TestClient

from main import app

client = TestClient(app)


def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == "Hello World v0.0!"


def test_read_avatar_list():
    response = client.get("/api/v1/avatar-list")
    assert response.status_code == 200
    assert response.json() == [
        "https://bit.ly/prosper-baba",
        "https://bit.ly/dan-abramov",
        "https://bit.ly/kent-c-dodds",
        "https://bit.ly/ryan-florence",
        "https://bit.ly/code-beast",
    ]
