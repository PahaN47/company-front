import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { UserStack } from '~/components/UserStack';

export default {
    title: 'Components/UserStack',
    component: UserStack,
} as Meta;

export const Default: Story = (args) => <UserStack {...args} />;
Default.args = {
    users: [
        {
            id: 1,
            age: 1,
            firstName: 'Огогр',
            avatar: 'https://www.thefactsite.com/wp-content/uploads/2012/05/shrek-facts.jpg',
        },
        {
            id: 2,
            age: 2,
            firstName: 'Огогр',
            avatar: 'https://www.thefactsite.com/wp-content/uploads/2012/05/shrek-facts.jpg',
        },
        {
            id: 3,
            age: 3,
            firstName: 'Огогр',
            avatar: 'https://www.thefactsite.com/wp-content/uploads/2012/05/shrek-facts.jpg',
        },
        {
            id: 4,
            age: 4,
            firstName: 'Огогр',
            avatar: 'https://www.thefactsite.com/wp-content/uploads/2012/05/shrek-facts.jpg',
        },

        {
            id: 5,
            age: 5,
            firstName: 'Огогр',
            avatar: 'https://www.thefactsite.com/wp-content/uploads/2012/05/shrek-facts.jpg',
        },

        {
            id: 6,
            age: 6,
            firstName: 'Огогр',
            avatar: 'https://www.thefactsite.com/wp-content/uploads/2012/05/shrek-facts.jpg',
        },
    ],
};
