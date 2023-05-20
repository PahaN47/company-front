import styled, { css } from 'styled-components';

import { BasePageProps } from './BasePage.types';

import { Color } from '~/const';
import { customScrollBar } from '~/mixins';

export const ContainerStyled = styled.div<Pick<BasePageProps, 'background'>>`
    width: 100%;
    height: 100%;

    ${({ background }) =>
        css`
            background: ${background ?? Color.SECOND_LIGHT};
        `}
`;

export const InnerContainerStyled = styled.div<Pick<BasePageProps, 'scrollable'>>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100% - 90px);
    box-sizing: border-box;

    ${({ scrollable }) =>
        scrollable
            ? css`
                  ${customScrollBar()}
                  overflow: auto;
              `
            : css`
                  overflow: hidden;
              `}
`;
