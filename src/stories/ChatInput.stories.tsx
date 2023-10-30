import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { ChatInput } from '~/components/ChatInput';
import { ChatInputProps } from '~/components/ChatInput/ChatInput.types';
import { Color } from '~/const';

export default {
    title: 'Components/ChatInput',
    component: ChatInput,
    parameters: {
        backgrounds: {
            default: 'yellow',
            values: [{ name: 'yellow', value: Color.SECOND_LIGHT }],
        },
    },
} as Meta;

export const Default: Story<ChatInputProps> = (args) => <ChatInput {...args} />;
Default.args = {};
