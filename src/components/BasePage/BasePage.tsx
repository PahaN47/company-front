import React from 'react';

import { ContainerStyled, InnerContainerStyled } from './BasePage.style';
import { BasePageProps } from './BasePage.types';

import { Header } from '~/components/Header';

export const BasePage = ({ className, background, children }: BasePageProps) => {
    return (
        <ContainerStyled background={background}>
            <Header />
            <InnerContainerStyled className={className}>{children}</InnerContainerStyled>
        </ContainerStyled>
    );
};
