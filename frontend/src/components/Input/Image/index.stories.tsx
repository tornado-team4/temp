// InputImage.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { InputImage } from './index';

const meta: Meta<typeof InputImage> = {
  title: 'Input/InputImage',
  component: InputImage,
};

export default meta;
type Story = StoryObj<typeof InputImage>;

export const Default: Story = {
  args: {
    label: '新規パズル作成',
    isChange: false,
  },
};
