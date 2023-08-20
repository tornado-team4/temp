// JoinRoomArea.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { JoinRoomArea } from './index';

const meta: Meta<typeof JoinRoomArea> = {
  title: 'TopPage/JoinRoomArea',
  component: JoinRoomArea,
};

export default meta;
type Story = StoryObj<typeof JoinRoomArea>;

export const Default: Story = {
  args: {},
};
