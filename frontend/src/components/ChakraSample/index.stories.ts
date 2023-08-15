import type { Meta, StoryObj } from '@storybook/react';

import ChakraSample from './index';

const meta: Meta<typeof ChakraSample> = {
  title: 'ChakraSample',
  component: ChakraSample,
};

export default meta;
type Story = StoryObj<typeof ChakraSample>;

export const Default: Story = {
  args: {},
};
