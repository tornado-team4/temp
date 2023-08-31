import { User } from '@/types/User';
import { atom } from 'recoil';

export const userAtom = atom<User>({
  key: 'userAtom',
  default: {
    id: '',
    name: '',
    avatarUrl: '',
    role: '',
  },
});
