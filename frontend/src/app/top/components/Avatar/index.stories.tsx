// Avatar.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './index';

const meta: Meta<typeof Avatar> = {
  title: 'TopPage/Avatar',
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;
const dummyAvatarImgList = [
  'https://bit.ly/dan-abramov',
  'https://bit.ly/kent-c-dodds',
  'https://bit.ly/ryan-florence',
  'https://bit.ly/prosper-baba',
  'https://bit.ly/code-beast',
];
export const Default: Story = {
  args: {
    avatarList: dummyAvatarImgList,
  },
};

export const Md: Story = {
  args: {
    boxSize: 105,
    avatarSize: 'xl',
    iconButtonSize: 'sm',
    iconSize: 18,
  },
};

export const Sm: Story = {
  args: {
    boxSize: 70,
    avatarSize: 'lg',
    iconButtonSize: 'xs',
    iconSize: 14,
  },
};
