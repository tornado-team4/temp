import type { Meta, StoryObj } from '@storybook/react';

import { Mobile } from './index';

const meta: Meta<typeof Mobile> = {
  title: 'TopPage/Mobile',
  component: Mobile,
};

export default meta;
type Story = StoryObj<typeof Mobile>;

export const Default: Story = {
  args: {
    bgColor: 'blue',
  },
};
