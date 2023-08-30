import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './index';

const meta: Meta<typeof CommentList> = {
  title: 'CompletePage/CommentList',
  component: CommentList,
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Default: Story = {
  args: {
    commentList: [
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
      {
        id: '7',
        text: 'test7',
        gameProgress: 2,
        userId: 'user-id-7',
        userName: 'user-name-7',
      },
      {
        id: '8',
        text: 'test8',
        gameProgress: 2,
        userId: 'user-id-8',
        userName: 'user-name-8',
      },
      {
        id: '9',
        text: 'test9',
        gameProgress: 2,
        userId: 'user-id-9',
        userName: 'user-name-9',
      },
      {
        id: '10',
        text: 'test10',
        gameProgress: 2,
        userId: 'user-id-10',
        userName: 'user-name-10',
      },
    ],
  },
};
