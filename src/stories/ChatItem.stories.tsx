import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { ChatItem } from '~/components/ChatItem';
import { ChatItemProps } from '~/components/ChatItem/ChatItem.types';
import { Color } from '~/const';

export default {
    title: 'Components/ChatItem',
    component: ChatItem,
    parameters: {
        backgrounds: {
            default: 'blue',
            values: [{ name: 'blue', value: Color.MAIN_LIGHT_FOCUS }],
        },
    },
} as Meta;

export const Default: Story<ChatItemProps> = (args) => (
    <>
        <ChatItem {...args} />
        <ChatItem {...args} />
        <ChatItem {...args} />
    </>
);
Default.args = {
    id: 1,
    firstName: 'Огогр',
    lastName: 'Болотный',
    avatar: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png',
};
