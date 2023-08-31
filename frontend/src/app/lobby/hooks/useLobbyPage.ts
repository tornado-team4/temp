import { User } from '@/types/User';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { uploadImage } from '@/libs/firebase/uploadImage';
import { BASE_URL, FE_URL } from '@/utils/baseUrl';
import { useToast } from '@chakra-ui/react';
import {
  onSnapshot,
  query,
  collection,
  addDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '@/libs/firebase/firebase';
import { fetchImageUrl } from '@/libs/firebase/fetchImageUrl';
import axios from 'axios';

type GameObjects = {
  Image: string;
  state: string;
};

type Props = {
  roomId: string;
};

export const useLobbyPage = ({ roomId }: Props) => {
  const router = useRouter();
  const toast = useToast();
  const [players, setPlayers] = useState<User[]>([]);
  const [gameObjects, setGameObjects] = useState<GameObjects>(
    {} as GameObjects,
  );
  const [image, setImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const id = roomId;

  const userRef = collection(db, 'room', id, 'users');
  const gameObjectRef = collection(db, 'room', id, 'gameObjects');

  if (gameObjects.state === 'playing') {
    router.replace('/ingame');
  }

  const createUserListener = () => {
    const q = query(userRef);

    return onSnapshot(q, (querySnapshot) => {
      const users: User[] = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data() as User);
      });
      setPlayers(users);
    });
  };

  const createGameObjectListener = () => {
    const q = query(gameObjectRef);

    return onSnapshot(q, (querySnapshot) => {
      let gameObject: GameObjects = {
        Image: '',
        state: 'waiting',
      };
      if (querySnapshot.docs.length === 0) {
        addDoc(gameObjectRef, gameObject);
      } else {
        gameObject = querySnapshot.docs[0].data() as GameObjects;
        console.log(gameObject);
        updateDoc(querySnapshot.docs[0].ref, gameObject);
      }
      setGameObjects(gameObject);
    });
  };

  useEffect(() => {
    const unsubscribeUser = createUserListener();
    const unsubscribeGameObject = createGameObjectListener();

    return () => {
      unsubscribeUser();
      unsubscribeGameObject();
    };
  }, []);

  const handleStart = async () => {
    setIsLoading(true);
    // TODO: ユーザーがホストなのか確認したい
    // if (ws.readyState === 1 && image) {
    if (image) {
      const q = query(gameObjectRef);
      const docRef = await getDocs(q);
      docRef.forEach(async (doc) => {
        await updateDoc(doc.ref, {
          state: 'playing',
        });
      });
      const res = await uploadImage(image);
      console.log(res);

      if (res) {
        const result = await fetchImageUrl(res);
        axios.post(`${BASE_URL}/api/v1/upload-image`, {
          room_id: roomId,
          url: result,
        });
      }
    }
  };
  const copylink = () => {
    const link = `${FE_URL}/top/${roomId}`;
    navigator.clipboard.writeText(link);
    toast({
      title: '招待リンクをコピーしました。',
      status: 'success',
      isClosable: true,
    });
  };

  return { players, setImage, handleStart, isLoading, copylink };
};
