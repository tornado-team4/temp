// HowToPlayArea.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { HowToPlayArea } from './index';

const meta: Meta<typeof HowToPlayArea> = {
  title: 'TopPage/HowToPlayArea',
  component: HowToPlayArea,
};

export default meta;
type Story = StoryObj<typeof HowToPlayArea>;

export const Default: Story = {
  args: {},
};
