import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { MessageDisplay } from '~/components/MessageDisplay';
import { MessageDisplayProps } from '~/components/MessageDisplay/MessageDisplay.types';
import { Color } from '~/const';

export default {
    title: 'Components/MessagesDisplay',
    component: MessageDisplay,
    parameters: {
        backgrounds: {
            default: 'yellow',
            values: [{ name: 'yellow', value: Color.SECOND_LIGHT }],
        },
    },
} as Meta;

export const Default: Story<MessageDisplayProps> = (args) => (
    <>
        <MessageDisplay {...args} />
        <MessageDisplay {...args} />
        <MessageDisplay {...args} />
    </>
);
Default.args = {
    user: {
        id: 1,
        firstName: 'Огогр',
        lastName: 'Болотный',
        avatar: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png',
    },
    message: {
        id: 1,
        date: '2002-05-27T03:24:00+04:00',
        message: 'message',
    },
};
