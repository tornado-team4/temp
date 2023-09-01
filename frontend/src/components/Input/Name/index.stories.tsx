// InputName.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { InputName } from './index';

const meta: Meta<typeof InputName> = {
  title: 'Input/InputName',
  component: InputName,
};

export default meta;
type Story = StoryObj<typeof InputName>;

export const Default: Story = {
  args: {
    borderColor: '#56C1FC',
  },
};
