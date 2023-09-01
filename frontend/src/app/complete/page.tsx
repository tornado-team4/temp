'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { fetchCommentList } from '@/app/api/fetchCommentList';
import { fetchCompleteImage } from '@/app/api/fetchCompleteImage';
import { CompletePage } from '@/app/complete/components/CompletePage';
import { userState } from '@/store/userState';
import { Comment } from '@/types/Comment';

export type CommentObj = {
  allComments: Comment[];
  albumComments: Comment[];
};
export default function Complete() {
  const router = useRouter();
  const recoilData = useRecoilValue(userState);

  const [commentObj, setCommentObj] = useState<CommentObj | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    const roomId = recoilData.roomId;

    if (roomId !== '') {
      fetchCommentList(roomId, setCommentObj);
      fetchCompleteImage(roomId, setImageUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBackHome = () => {
    router.replace('/');
  };

  const handleEdit = () => {
    // TODO: 編集する処理を実装
  };

  return (
    commentObj &&
    commentObj.allComments && (
      <CompletePage
        imageUrl={imageUrl}
        commentList={commentObj.allComments}
        onClickBackHome={handleBackHome}
        onClickEdit={handleEdit}
      />
    )
  );
}
