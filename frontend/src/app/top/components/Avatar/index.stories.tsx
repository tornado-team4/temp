// Avatar.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Avatar } from './index';

const meta: Meta<typeof Avatar> = {
  title: 'TopPage/Avatar',
  component: Avatar,
  decorators: [
    (_Avatar, context) => {
      const dummyAvatarImgList = [
        'https://bit.ly/dan-abramov',
        'https://bit.ly/kent-c-dodds',
        'https://bit.ly/ryan-florence',
        'https://bit.ly/prosper-baba',
        'https://bit.ly/code-beast',
      ];
      const [avatar, setAvatar] = useState('');
      return (
        <_Avatar
          args={{
            ...context.args,
            avatarUrl: avatar,
            setAvatarUrl: setAvatar,
            avatarList: dummyAvatarImgList,
          }}
        />
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {},
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
