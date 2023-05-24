import { InputBase } from '@mui/material';
import styled from 'styled-components';

import { Color } from '~/const';
import { customScrollBar, textStyle } from '~/mixins';

export const ConatinerStyled = styled.div`
    display: flex;
    align-items: stretch;
    height: fit-content;
    background: ${Color.WHITE};
    border-top: 1px solid ${Color.MAIN_SEMI_LIGHT};
`;

export const InputContainerStyled = styled.div`
    ${customScrollBar()}
    flex-grow: 1;
    overflow: auto;
`;

export const ButtonContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 22px 25px;
`;

export const InputStyled = styled(InputBase)`
    align-items: flex-start !important;
    width: 100%;
    min-height: 100%;
    padding: 8px 12px !important;

    textarea {
        ${textStyle('MEDIUM')}
        color: ${Color.BLACK};

        &::placeholder {
            color: ${Color.BLACK_40};
            opacity: 1;
        }
    }
`;

export const ButtonStyled = styled.button`
    width: 43px;
    height: 43px;
    padding: 0;
    background: none;
    border: none;
    transition: opacity 0.5s;

    svg {
        width: 100%;
        height: 100%;

        path {
            transition: fill 0.5s;
            fill: ${Color.MAIN_DARK};
        }
    }

    &:disabled {
        cursor: default;
        opacity: 0.3;
    }

    &:not(:disabled):hover svg path {
        fill: ${Color.MAIN_SEMI_DARK};
    }
`;
