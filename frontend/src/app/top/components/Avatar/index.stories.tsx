// Avatar.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './index';

const meta: Meta<typeof Avatar> = {
  title: 'TopPage/Avatar',
  component: Avatar,
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
