import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { CustomButton } from '~/components/CustomButton/CustomButton';
import { CustomButtonProps } from '~/components/CustomButton/CustomButton.types';

export default {
    title: 'Components/CustomButton',
    component: CustomButton,
    argTypes: {},
} as Meta;

export const Default: Story<CustomButtonProps> = (args) => <CustomButton {...args} />;

Default.args = {
    href: '',
    target: '',
    size: undefined,
    customStyle: undefined,
    children: 'Button',
};
