'use client';

import { CompletePage } from '@/app/complete/components/CompletePage';

export default function Complete() {
  // TODO: ダミーデータを API つなぎ込みの後に削除
  const dummyCommentList = [
    {
      id: '1',
      text: 'test1',
      gameProgress: 1,
      userId: 'user-id-1',
      userName: 'user-name-1',
    },
    {
      id: '2',
      text: '文字数最大のコメントのテストをしてみるぞ',
      gameProgress: 1,
      userId: 'user-id-2',
      userName: 'user-name-2',
    },
    {
      id: '3',
      text: 'test3',
      gameProgress: 1,
      userId: 'user-id-3',
      userName: 'user-name-3',
    },
    {
      id: '4',
      text: 'test4',
      gameProgress: 1,
      userId: 'user-id-4',
      userName: 'user-name-4',
    },
    {
      id: '5',
      text: 'test5',
      gameProgress: 1,
      userId: 'user-id-5',
      userName: 'user-name-5',
    },
    {
      id: '6',
      text: 'test6',
      gameProgress: 1,
      userId: 'user-id-6',
      userName: 'user-name-6',
    },
  ];
  const imageUrl = 'https://placehold.jp/272343/ffd803/640x400.png';

  const handleBackHome = () => {
    // TODO: ホームに戻る処理を実装
  };

  const handleEdit = () => {
    // TODO: 編集する処理を実装
  };

  return (
    <CompletePage
      imageUrl={imageUrl}
      commentList={dummyCommentList}
      onClickBackHome={handleBackHome}
      onClickEdit={handleEdit}
    />
  );
}
