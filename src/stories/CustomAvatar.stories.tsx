import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { CustomAvatar } from '~/components/CustomAvatar';
import { CustomAvatarProps } from '~/components/CustomAvatar/CustomAvatar.types';

export default {
    title: 'Components/CustomAvatar',
    component: CustomAvatar,
} as Meta;

export const Default: Story<CustomAvatarProps> = (args) => <CustomAvatar {...args} />;
Default.args = {
    src: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png',
};
