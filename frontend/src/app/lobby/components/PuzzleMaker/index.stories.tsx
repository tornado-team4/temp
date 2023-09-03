// PuzzleMaker.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { PuzzleMaker } from './index';

const meta: Meta<typeof PuzzleMaker> = {
  title: 'LobbyPage/PuzzleMaker',
  component: PuzzleMaker,
};

export default meta;
type Story = StoryObj<typeof PuzzleMaker>;

export const Default: Story = {
  args: {},
};
