import axios from 'axios';
import { BASE_URL } from '@/utils/baseUrl';
import { Dispatch, SetStateAction } from 'react';

export const fetchCompleteImage = (
  roomId: string,
  setState: Dispatch<SetStateAction<string>>,
) => {
  axios
    .get(`${BASE_URL}/api/v1/complete-image-url?room_id=${roomId}`)
    .then((res) => {
      setState(res.data);
    });
};
