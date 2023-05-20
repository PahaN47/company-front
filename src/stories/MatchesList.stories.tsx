import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { MatchesList } from '~/components/MatchesList';
import { MatchesListProps } from '~/components/MatchesList/MatchesList.types';
import { Color } from '~/const';

export default {
    title: 'Components/MatchesList',
    component: MatchesList,
    parameters: {
        backgrounds: {
            default: 'blue',
            values: [{ name: 'blue', value: Color.MAIN_LIGHT_FOCUS }],
        },
    },
} as Meta;

export const Default: Story<MatchesListProps> = (args) => <MatchesList {...args} />;

Default.args = {
    incoming: [
        {
            id: 1,
            initiator: {
                id: 1,
                firstName: 'Огогр',
                lastName: 'Болотный',
                avatar: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png',
            },
            reciever: {
                id: 1,
                firstName: 'Огогр',
                lastName: 'Болотный',
                avatar: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png',
            },
            date: new Date(),
            status: 'pending',
        },
        {
            id: 2,
            initiator: {
                id: 1,
                firstName: 'Огогр',
                lastName: 'Болотный',
                avatar: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png',
            },
            reciever: {
                id: 1,
                firstName: 'Огогр',
                lastName: 'Болотный',
                avatar: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png',
            },
            date: new Date(),
            status: 'pending',
        },
        {
            id: 3,
            initiator: {
                id: 1,
                firstName: 'Огогр',
                lastName: 'Болотный',
                avatar: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png',
            },
            reciever: {
                id: 1,
                firstName: 'Огогр',
                lastName: 'Болотный',
                avatar: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png',
            },
            date: new Date(),
            status: 'pending',
        },
    ],
    outgoing: [
        {
            id: 1,
            initiator: {
                id: 1,
                firstName: 'Огогр',
                lastName: 'Болотный',
                avatar: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png',
            },
            reciever: {
                id: 1,
                firstName: 'Огогр',
                lastName: 'Болотный',
                avatar: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png',
            },
            date: new Date(),
            status: 'pending',
        },
        {
            id: 2,
            initiator: {
                id: 1,
                firstName: 'Огогр',
                lastName: 'Болотный',
                avatar: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png',
            },
            reciever: {
                id: 1,
                firstName: 'Огогр',
                lastName: 'Болотный',
                avatar: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png',
            },
            date: new Date(),
            status: 'pending',
        },
        {
            id: 3,
            initiator: {
                id: 1,
                firstName: 'Огогр',
                lastName: 'Болотный',
                avatar: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png',
            },
            reciever: {
                id: 1,
                firstName: 'Огогр',
                lastName: 'Болотный',
                avatar: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png',
            },
            date: new Date(),
            status: 'pending',
        },
    ],
};
