import type { Meta, StoryObj } from '@storybook/react';
import PageError from 'widgets/PageError/ui/PageError';

const meta: Meta<typeof PageError> = {
    title: 'Widgets/PageError/UI',
    component: PageError,
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const PageErrorLight: Story = {
    name: 'Classic',
};
