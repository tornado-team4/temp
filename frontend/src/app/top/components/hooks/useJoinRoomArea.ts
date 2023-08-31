/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@chakra-ui/react';
import { BASE_URL } from '@/utils/baseUrl';
import { useSetRecoilState } from 'recoil';
import { userState } from '@/store/userState';

export const useJoinRoomArea = () => {
  const setRecoil = useSetRecoilState(userState);
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
      .then((res) => {
        res.json().then((data) => {
          setRecoil({
            role: data.role,
            roomId: data.room_id,
            id: data.user_id,
            name: '',
            avatarUrl: '',
          });
        });
        router.replace('/');
      })
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
    ${BASE_URL}/api/v1/join-room
    `,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, avatar_url: avatarUrl, room_id: roomId }),
      },
    )
      .then((res) => {
        res.json().then((data) => {
          setRecoil({
            role: data.role,
            roomId: data.room_id,
            id: data.user_id,
            name: '',
            avatarUrl: '',
          });
        });
        router.replace('/');
      })
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
