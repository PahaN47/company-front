import styled, { css } from 'styled-components';

import { Color } from '~/const';
import { customScrollBar } from '~/mixins';

export const ContainerStyled = styled.div<{ background?: Color }>`
    width: 100%;
    height: 100%;

    ${({ background }) =>
        css`
            background: ${background ?? Color.SECOND_LIGHT};
        `}
`;

export const InnerContainerStyled = styled.div`
    ${customScrollBar()}
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100% - 90px);
    overflow: auto;
`;
