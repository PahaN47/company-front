import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { MatchItem } from '~/components/MatchItem';
import { MatchItemProps } from '~/components/MatchItem/MatchItem.types';
import { Color } from '~/const';

export default {
    title: 'Components/MatchItem',
    component: MatchItem,
    parameters: {
        backgrounds: {
            default: 'blue',
            values: [{ name: 'blue', value: Color.MAIN_LIGHT_FOCUS }],
        },
    },
} as Meta;

export const Default: Story<MatchItemProps> = (args) => (
    <>
        <MatchItem {...args} />
        <MatchItem {...args} />
        <MatchItem {...args} />
    </>
);

Default.args = {
    match: {
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
    type: 'incoming',
};
