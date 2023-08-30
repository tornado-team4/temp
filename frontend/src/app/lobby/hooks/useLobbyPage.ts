import { User } from '@/types/User';
import { useState, useEffect } from 'react';

type Props = {
  roomId: string;
};

export const useLobbyPage = ({ roomId }: Props) => {
  const [players, setPlayers] = useState<User[]>([]);
  const id = roomId;
  const domain = new URL(process.env.NEXT_PUBLIC_BACKEND_URL ?? '');
  const host = domain.host;
  const url = `ws://${host}/ws/${id}`;
  const ws = new WebSocket(url);

  useEffect(() => {
    ws.onopen = () => {
      // 参加者の通知を検知してリストを更新する際のwsメッセージ
      ws.send('connect');
    };
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (typeof data === 'string' && data === 'start') {
        console.log('ゲームの開始を検知');
      } else {
        const participantList: User[] = [];
        data.map((d) =>
          participantList.push({
            id: d.id,
            name: d.name,
            avatarUrl: d.avatar_url,
            role: d.role,
          }),
        );
        setPlayers(participantList);
      }
    };
    ws.onclose = () => {};
    // コンポーネントがアンマウントされたらWebSocket接続をクローズ
    return () => {
      ws.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { players };
};
