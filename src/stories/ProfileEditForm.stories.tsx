import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { ProfileEditForm } from '~/components/ProfileEditForm';
import { ProfileEditFormProps } from '~/components/ProfileEditForm/ProfileEditForm.types';

export default {
    title: 'Components/ProfileEditForm',
    component: ProfileEditForm,
} as Meta;

export const Default: Story<ProfileEditFormProps> = (args) => <ProfileEditForm {...args} />;
Default.args = {};
