import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { MuiInput } from '~/components/MuiInput';

export default {
    title: 'Components/MuiInput',
    component: MuiInput,
} as Meta;

export const Default: Story = (args) => <MuiInput {...args} />;
Default.args = {
    placeholder: 'Placeholder',
};
