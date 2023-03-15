import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { CustomInput } from '~/components/CustomInput';
import { CustomInputProps } from '~/components/CustomInput/CustomInput.types';

export default {
    title: 'Components/CustomInput',
    component: CustomInput,
    argTypes: {},
} as Meta;

export const Default: Story<CustomInputProps> = (args) => <CustomInput {...args} />;

Default.args = {
    type: undefined,
    valid: undefined,
    placeholder: undefined,
    rows: 1,
};
