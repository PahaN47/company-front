import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import { BasePage } from '~/components/BasePage';

export default {
    title: 'Pages/BasePage',
    component: BasePage,
    parameters: {
        layout: 'fullscreen',
    },
} as Meta;

const Container = styled.div`
    width: 100%;
    aspect-ratio: 16 / 9;
`;

export const Default: Story = (args) => (
    <Container>
        <BasePage {...args} />
    </Container>
);
Default.args = {
    children: 'ass',
};
