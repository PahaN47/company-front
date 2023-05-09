import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Header } from '~/components/Header';

export default {
    title: 'Components/Header',
    component: Header,
} as Meta;

export const Default: Story = () => <Header />;
