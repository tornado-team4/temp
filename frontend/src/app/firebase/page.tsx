// TODO: 作業確認のためのファイルのため、後で削除する
'use client';

import React, { ChangeEvent, useState } from 'react';
import { fetchImageUrl } from '@/firebase/fetchImageUrl';
import { uploadImage } from '@/firebase/uploadImage';

export default function FirebaseConnectTest() {
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');

  const onSubmit = () => {
    if (image) {
      uploadImage(image).then((res) => {
        if (res) {
          fetchImageUrl(res).then((url) => {
            if (url) {
              setImageUrl(url);
            }
          });
        }
      });
    }
  };

  const handleImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  return (
    <div className="App">
      <h1>画像アップロード</h1>
      <input type="file" onChange={handleImage} />
      <button onClick={onSubmit}>Upload</button>
      <img src={imageUrl} alt="uploaded" />
    </div>
  );
}
