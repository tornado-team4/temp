import { ref, uploadBytes } from 'firebase/storage';
import { generateRandomString } from '@/utils/generateRandomString';
import { storage } from './firebase'; // FIXME: 絶対パスで指定するようにする

export const uploadImage = async (file: File) => {
  let fileName = generateRandomString(30);

  const storageRef = ref(storage, fileName);

  await uploadBytes(storageRef, file)
    .then(() => {
      // do nothing
    })
    .catch(() => {
      fileName = ''; // 送信に失敗した場合は空文字を返す
    });

  return fileName;
};
