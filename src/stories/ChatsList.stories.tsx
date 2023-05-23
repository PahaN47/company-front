import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { ChatsList } from '~/components/ChatsList';
import { ChatsListProps } from '~/components/ChatsList/ChatsList.types';
import { Color } from '~/const';

export default {
    title: 'Components/ChatsList',
    component: ChatsList,
    parameters: {
        backgrounds: {
            default: 'blue',
            values: [{ name: 'blue', value: Color.MAIN_LIGHT_FOCUS }],
        },
    },
} as Meta;

export const Default: Story<ChatsListProps> = (args) => <ChatsList {...args} />;
Default.args = {
    chats: [
        {
            id: 1,
            user: {
                id: 1,
                firstName: 'Огогр',
                lastName: 'Болотный',
                avatar: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png',
            },
        },
        {
            id: 2,
            user: {
                id: 2,
                firstName: 'Огогр',
                lastName: 'Болотный',
                avatar: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png',
            },
        },
        {
            id: 3,
            user: {
                id: 3,
                firstName: 'Огогр',
                lastName: 'Болотный',
                avatar: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png',
            },
        },
        {
            id: 4,
            user: {
                id: 4,
                firstName: 'Огогр',
                lastName: 'Болотный',
                avatar: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png',
            },
        },
        {
            id: 5,
            user: {
                id: 5,
                firstName: 'Огогр',
                lastName: 'Болотный',
                avatar: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png',
            },
        },
    ],
};
