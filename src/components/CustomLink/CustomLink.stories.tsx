import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { CustomLink } from './CustomLink';
import { CustomLinkProps } from './CustomLink.types';

export default {
    title: 'Components/CustomLink',
    component: CustomLink,
    argTypes: {},
} as Meta;

export const Default: Story<CustomLinkProps> = (args) => <CustomLink {...args} />;

Default.args = {
    href: '',
    children: '',
    target: undefined,
};
