import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import { FancyButton } from '~/components/FancyButton';

export default {
    title: 'Components/FancyButton',
    component: FancyButton,
} as Meta;

const Asdfad = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const Default: Story = (args) => (
    <Asdfad>
        <FancyButton {...args} />
    </Asdfad>
);
Default.args = {
    style: {
        width: '100px',
    },
};
