import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase'; // FIXME: 絶対パスで指定するようにする

export const fetchImageUrl = async (fileName: string) => {
  let url = '';

  await getDownloadURL(ref(storage, fileName))
    .then((res) => {
      url = res;
    })
    .catch(() => {
      // do nothing
    });

  return url;
};
