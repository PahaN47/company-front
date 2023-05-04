import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { Meta } from '@storybook/react/types-6-0';

export default {
    title: 'Components/MuiButton',
    component: MuiButton,
    argTypes: {},
} as Meta;

export interface Props extends MuiButtonProps {
    text: string;
}

export const Default = ({ text, ...args }: Props) => (
    <MuiButton {...args} color="primary" variant="contained">
        {text}
    </MuiButton>
);

Default.args = {
    text: 'Help',
};
