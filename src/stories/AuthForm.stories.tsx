import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { AuthForm } from '~/components/AuthForm';
import { AuthFormProps } from '~/components/AuthForm/AuthForm.types';

export default {
    title: 'Components/AuthForm',
    component: AuthForm,
} as Meta;

export const Default: Story<AuthFormProps> = (args) => <AuthForm {...args} />;
Default.args = {
    onSubmit: (data: unknown) => alert(JSON.stringify(data)),
    data: {
        email: 'email',
        password: 'password',
    },
    type: 'login',
};
