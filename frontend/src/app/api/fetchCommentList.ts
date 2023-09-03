import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';

import { CommentObj } from '@/app/complete/page';
import { BASE_URL } from '@/utils/baseUrl';

export const fetchCommentList = (
  roomId: string,
  setState: Dispatch<SetStateAction<CommentObj | null>>,
) => {
  axios.get(`${BASE_URL}/api/v1/comment-list?room_id=${roomId}`).then((res) => {
    setState(res.data);
  });
};
