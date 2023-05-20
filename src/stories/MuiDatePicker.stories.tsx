import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { MuiDatePicker } from '~/components/MuiDatePicker';
import { MuiDatePickerProps } from '~/components/MuiDatePicker/MuiDatePicker.types';

export default {
    title: 'Components/MuiDatePicker',
    component: MuiDatePicker,
} as Meta;

export const Default: Story<MuiDatePickerProps> = (args) => <MuiDatePicker {...args} />;
Default.args = {
    label: 'Label',
};
