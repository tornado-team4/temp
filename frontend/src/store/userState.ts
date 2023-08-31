import { atom } from 'recoil';
import { User } from '@/types/User';

export const userState = atom<User>({
  key: 'userState',
  default: {
    id: '',
    name: '',
    avatarUrl: '',
    role: '',
    roomId: '',
  },
});
