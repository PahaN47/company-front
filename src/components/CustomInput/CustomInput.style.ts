import styled, { css } from 'styled-components';

import { Color } from '~/const';
import { customScrollBar, textStyle } from '~/mixins';

const COMMON_STYLES = css`
    ${textStyle('MEDIUM')}
    padding: 14px 15px;
    color: ${Color.BLACK};
    background: ${Color.WHITE};
    border: 1px solid ${Color.MAIN};
    border-radius: 12px;
    caret-color: ${Color.MAIN_DARK};
    transition: border-color 0.5s, color 0.5s, caret-color 0.5s, box-shadow 0.5s;

    &::placeholder {
        color: ${Color.BLACK_40};
        transition: opacity 0.5s;
    }

    &:focus {
        border-color: ${Color.MAIN_DARK};

        &::placeholder {
            opacity: 0;
        }
    }

    &[data-valid='false'] {
        color: ${Color.ERROR};
        border-color: ${Color.ERROR};
        caret-color: ${Color.ERROR};
    }
`;

export const CustomInputStyled = styled.input`
    ${COMMON_STYLES}
`;

export const CustomTextAreaStyled = styled.textarea`
    ${COMMON_STYLES}
    ${customScrollBar()}
    padding-right: 0;
    resize: none;
`;
