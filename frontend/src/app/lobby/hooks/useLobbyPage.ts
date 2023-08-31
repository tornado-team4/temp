import { User } from '@/types/User';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { uploadImage } from '@/libs/firebase/uploadImage';
import { BASE_URL } from '@/utils/baseUrl';
import { WS_URL } from '@/utils/baseUrl';
import { useToast } from '@chakra-ui/react';
// import { useRecoilState } from 'recoil';
// import { userAtom } from '@/libs/atoms/userAtom';

type Props = {
  roomId: string;
};

export const useLobbyPage = ({ roomId }: Props) => {
  const router = useRouter();
  const toast = useToast();
  const [players, setPlayers] = useState<User[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const id = roomId;

  // const [user, setuser] = useRecoilState(userAtom);

  const url = `${WS_URL}/ws/${id}`;
  const ws = new WebSocket(url);

  useEffect(() => {
    ws.onopen = () => {
      // 参加者の通知を検知してリストを更新する際のwsメッセージ
      ws.send('connect');
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (typeof data === 'string' && data === 'start') {
        router.replace('/ingame');
      } else {
        setPlayers(data);
      }
    };
    ws.onclose = () => {};
    // コンポーネントがアンマウントされたらWebSocket接続をクローズ
    return () => {
      ws.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const connectImageNameToRoomId = async ({
    fileName,
  }: {
    fileName: string;
  }) => {
    await fetch(
      `
    ${BASE_URL}/api/v1/upload-image
    `,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ room_id: roomId, file_name: fileName }),
      },
    )
      .then(() => {
        if (ws.readyState === 1) {
          // ゲームの開始ボタンが押された場合に参加者にその旨を知らせるためのwsメッセージ
          ws.send('start');

          router.replace('/ingame');
        }
      })
      .catch(() => {
        setIsLoading(false);
        return () =>
          toast({
            title: '通信に失敗しました。',
            description:
              '申し訳ありませんが、時間をおいてもう一度お試しください。',
            status: 'error',
            isClosable: true,
          });
      });
  };

  const handleStart = () => {
    setIsLoading(true);
    // TODO: ユーザーがホストなのか確認したい
    if (ws.readyState === 1 && image) {
      uploadImage(image).then((res) => {
        if (res) {
          connectImageNameToRoomId({ fileName: res });
        } else {
          setIsLoading(false);
          toast({
            title: '画像のアップロードに失敗しました。',
            description:
              '申し訳ありませんが、時間をおいてもう一度お試しください。',
            status: 'error',
            isClosable: true,
          });
        }
      });
    }
  };

  const copylink = () => {
    const path = window.location.origin;
    const link = `${path}/top/${roomId}`;
    navigator.clipboard.writeText(link);
    toast({
      title: '招待リンクをコピーしました。',
      status: 'success',
      isClosable: true,
    });
  };

  return { players, setImage, handleStart, isLoading, copylink };
};
