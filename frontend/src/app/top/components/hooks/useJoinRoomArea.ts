import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@chakra-ui/react';
import { BASE_URL } from '@/utils/baseUrl';

export const useJoinRoomArea = () => {
  const router = useRouter();
  const toast = useToast();
  const {
    data: avatarList,
    error,
    isLoading,
  } = useSWR<string[]>(
    `
  ${BASE_URL}/api/v1/avatar-list
  `,
    fetcher,
  );
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  // リストの最初の値を初期に表示されるavatarとする
  const initialAvatar = avatarList ? avatarList[0] : '';

  const onCreateRoomHandler = async () => {
    const avatarUrl = avatar ? avatar : initialAvatar;

    await fetch(
      `
    ${BASE_URL}/api/v1/create-room
    `,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, avatar_url: avatarUrl }),
      },
    )
      .then(() => router.replace('/'))
      .catch(() =>
        toast({
          title: '通信に失敗しました。',
          description:
            '申し訳ありませんが、時間をおいてもう一度お試しください。',
          status: 'error',
          isClosable: true,
        }),
      );
  };

  const onJoinRoomHandler = async (roomId: string) => {
    const avatarUrl = avatar ? avatar : initialAvatar;

    await fetch(
      `
    ${BASE_URL}/api/v1/create-room
    `,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, avatar_url: avatarUrl, room_id: roomId }),
      },
    )
      .then(() => router.replace('/'))
      .catch(() =>
        toast({
          title: '通信に失敗しました。',
          description:
            '申し訳ありませんが、時間をおいてもう一度お試しください。',
          status: 'error',
          isClosable: true,
        }),
      );
  };

  return {
    avatarList,
    avatarListError: error,
    avatarListIsLoading: isLoading,
    avatar: avatar ? avatar : initialAvatar,
    setAvatar,
    name,
    setName,
    onCreateRoomHandler,
    onJoinRoomHandler,
  };
};
