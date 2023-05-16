import styled, { css } from 'styled-components';

import { Color } from '~/const';
import { textStyle } from '~/mixins';

export const ContainerStyled = styled.div<{ zIndex?: number }>`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    max-width: 400px;
    aspect-ratio: 4 / 5;
    overflow: hidden;
    background: ${Color.WHITE};
    border-radius: calc(3 / 50 * 100%);
    box-shadow: ${Color.SHADOW_1};

    ${({ zIndex }) =>
        zIndex &&
        css`
            z-index: ${zIndex};
        `}
`;

export const ImageStyled = styled.img`
    width: 100%;
    height: calc(358 / 500 * 100%);
    object-fit: cover;
`;

export const DecriptionStyled = styled.div`
    ${textStyle('LARGEST')}

    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(142 / 500 * 100%);
`;
