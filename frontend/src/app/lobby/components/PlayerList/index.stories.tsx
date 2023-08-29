// PlayerList.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { PlayerList } from './index';

const meta: Meta<typeof PlayerList> = {
  title: 'LobbyPage/PlayerList',
  component: PlayerList,
};

export default meta;
type Story = StoryObj<typeof PlayerList>;

export const Default: Story = {
  args: {
    list: [
      {
        id: '1',
        name: 'test1',
        avatarUrl: 'https://bit.ly/kent-c-dodds',
        role: 'host',
      },
      {
        id: '2',
        name: 'test2',
        avatarUrl: 'https://bit.ly/kent-c-dodds',
        role: 'participant',
      },
      {
        id: '3',
        name: 'test3',
        avatarUrl: 'https://bit.ly/kent-c-dodds',
        role: 'participant',
      },
      {
        id: '4',
        name: 'test4',
        avatarUrl: 'https://bit.ly/kent-c-dodds',
        role: 'participant',
      },
      {
        id: '5',
        name: 'test5',
        avatarUrl: 'https://bit.ly/kent-c-dodds',
        role: 'participant',
      },
      {
        id: '6',
        name: 'test6',
        avatarUrl: 'https://bit.ly/kent-c-dodds',
        role: 'participant',
      },
    ],
  },
};
