import { Button } from '@mui/material';
import styled from 'styled-components';

import { BasePage } from '~/components/BasePage';
import { CustomAvatar } from '~/components/CustomAvatar';
import { Color } from '~/const';
import { textStyle } from '~/mixins';

export const BasePageStyled = styled(BasePage)`
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-end;
`;

export const AvatarContainerStyled = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 31.25%;
    height: fit-content;
    transform: translateY(-50%);
`;

export const AvatarBorderStyled = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    aspect-ratio: 1 / 1;

    circle:nth-child(1) {
        fill: none;
        stroke: ${Color.WHITE};
        stroke-width: 3.75%;
    }

    circle:nth-child(2) {
        fill: none;
        stroke: ${Color.MAIN_SEMI_LIGHT};
        stroke-width: 1px;
        stroke-dasharray: calc(3.1416 * 50%);
        stroke-dashoffset: calc(3.1416 * 50%);
    }

    circle:nth-child(3) {
        fill: none;
        stroke: ${Color.WHITE};
        stroke-width: 1px;
        stroke-dasharray: calc(3.1416 * 50%);
    }
`;

export const AvatarStyled = styled(CustomAvatar)`
    width: 100%;
`;

export const ProfileContainerStyled = styled.div`
    position: absolute;
    display: flex;
    gap: 32px;
    width: 100vw;
    height: calc(350 / 630 * 100%);
    padding-left: 16px;
    background: ${Color.WHITE};
    border-top: 1px solid ${Color.MAIN_SEMI_LIGHT};
`;

export const TextContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;
    padding-top: 7px;
`;

export const NameStyled = styled.span`
    ${textStyle('XXL')}
    text-transform: capitalize;
`;

export const DetailContainerStyled = styled.div`
    display: flex;
    gap: 50px;
    align-items: baseline;
`;

export const DetailStyled = styled.span`
    ${textStyle('EXTRA_LARGE')}
    text-transform: capitalize;
`;

export const BackButtonStyled = styled.button`
    position: absolute;
    top: 16px;
    left: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    padding: 0;
    background: none;
    border: none;

    svg {
        width: 100%;
        height: 100%;

        path {
            transition: fill 0.5s;
            fill: ${Color.MAIN_DARK};
        }
    }

    &:hover svg path {
        fill: ${Color.MAIN_SEMI_DARK};
    }
`;

export const EditButtonStyled = styled(Button)`
    position: absolute;
    top: 16px;
    right: 16px;
`;
