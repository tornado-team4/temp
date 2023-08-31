import { atom } from 'recoil';
import { User } from '@/types/User';

type Room = {
  roomId: string;
};

export const userState = atom<User & Room>({
  key: 'userState',
  default: {
    id: '',
    name: '',
    avatarUrl: '',
    role: '',
    roomId: '',
  },
});
