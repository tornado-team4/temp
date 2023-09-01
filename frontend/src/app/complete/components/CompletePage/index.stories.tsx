import type { Meta, StoryObj } from '@storybook/react';

import { CompletePage } from './index';

const meta: Meta<typeof CompletePage> = {
  title: 'CompletePage/Template',
  component: CompletePage,
};

export default meta;
type Story = StoryObj<typeof CompletePage>;

const commentList = [
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

export const ImageSizePattern1: Story = {
  args: {
    commentList: commentList,
    imageUrl: 'https://placehold.jp/272343/ffd803/640x400.png',
  },
};

export const ImageSizePattern2: Story = {
  args: {
    commentList: commentList,
    imageUrl: 'https://tools.arashichang.com/hd1080',
  },
};

export const Small: Story = {
  args: {
    commentList: commentList,
    imageUrl: 'https://tools.arashichang.com/300x200/cccccc/ffffff',
  },
};

export const Vertical: Story = {
  args: {
    commentList: commentList,
    imageUrl: 'https://tools.arashichang.com/wideskyscraper',
  },
};
