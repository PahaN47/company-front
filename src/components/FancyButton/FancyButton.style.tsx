import styled, { css } from 'styled-components';

import { PRESS_TRANSITION_TIME } from './FancyButton.const';
import { FancyButtonType } from './FancyButton.types';

import { CheckIconPath, CrossIconPath } from '~/assets/img';
import { CustomButton } from '~/components/CustomButton';
import { Color } from '~/const';

export const ContainerStyled = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    min-width: 30px;
    aspect-ratio: 10 / 11;
`;

export const FancyButtonStyled = styled(CustomButton)<{ buttonType?: FancyButtonType; pressed: boolean }>`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
    border-radius: 9999px;
    transition: all ${PRESS_TRANSITION_TIME}ms;

    &::before {
        position: absolute;
        z-index: 0;
        top: 0;
        right: 0;
        width: 100%;
        height: calc(10 / 11 * 100%);
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 50%;
        transition: all ${PRESS_TRANSITION_TIME}ms;
        content: '';
    }

    ${({ buttonType }) => css`
        background: ${buttonType === 'cross' ? Color.NEGATIVE_DARK : Color.MAIN_DARK};

        &::before {
            background-color: ${buttonType === 'cross' ? Color.NEGATIVE_LIGHT : Color.MAIN_SEMI_LIGHT};
            background-image: url(${buttonType === 'cross' ? CrossIconPath : CheckIconPath});
            background-size: ${buttonType === 'cross' ? (5 / 12) * 100 : (19 / 30) * 100}%;
        }
    `}

    ${({ pressed }) =>
        pressed &&
        css`
            height: calc(10 / 11 * 100%);
            border-radius: 50%;

            &::before {
                height: 100%;
            }
        `}
`;
