import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { ChatHeader } from '~/components/ChatHeader';
import { ChatHeaderProps } from '~/components/ChatHeader/ChatHeader.types';
import { Color } from '~/const';

export default {
    title: 'Components/ChatHeader',
    component: ChatHeader,
    parameters: {
        backgrounds: {
            default: 'yellow',
            values: [{ name: 'yellow', value: Color.SECOND_LIGHT }],
        },
    },
} as Meta;

export const Default: Story<ChatHeaderProps> = (args) => <ChatHeader {...args} />;
Default.args = {
    user: {
        id: 1,
        firstName: 'Огогр',
        lastName: 'Болотный',
        avatar: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png',
    },
};
