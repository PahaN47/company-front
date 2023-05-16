import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { UserCard } from '~/components/UserCard';

export default {
    title: 'Components/UserCard',
    component: UserCard,
} as Meta;

export const Default: Story = (args) => <UserCard {...args} />;
Default.args = {
    user: {
        avatar: 'https://www.thefactsite.com/wp-content/uploads/2012/05/shrek-facts.jpg',
        firstName: 'Огогр',
        age: 45,
    },
};
