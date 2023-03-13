import styled, { css } from 'styled-components';

import { CustomButtonProps } from './CustomButton.types';

import { CustomLink } from '~/components/CustomLink';
import { Color } from '~/const';
import { textStyle } from '~/mixins';

type CustomButtonStyledProps = Pick<CustomButtonProps, 'size' | 'customStyle'>;

export const CustomLinkStyled = styled(CustomLink)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    border-radius: inherit;
    opacity: 0;
`;

const PRIMARY_LARGE = css`
    ${textStyle('MEDIUM')}
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 20px;
    color: ${Color.SECOND_LIGHT};
    background: ${Color.MAIN_GRADIENT};
    border: none;
    border-radius: 12px;
    outline: 2px solid ${Color.SECOND_LIGHT};

    & > * {
        z-index: 1;
    }

    &::before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        background: ${Color.MAIN_GRADIENT_HOVER};
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.5s;
        content: '';
    }

    &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        background: ${Color.MAIN_GRADIENT_FOCUS};
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.5s;
        content: '';
    }

    &:hover {
        &::before {
            opacity: 1;
        }
    }

    &:active {
        &::after {
            opacity: 1;
        }
    }
`;

const PRIMARY_MEDIUM = css`
    ${textStyle('SMALL')}
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 13px 20px;
    color: ${Color.SECOND_LIGHT};
    background: ${Color.MAIN_GRADIENT};
    border: none;
    border-radius: 10px;
    outline: 1px solid ${Color.SECOND_LIGHT};

    & > * {
        z-index: 1;
    }

    &::before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        background: ${Color.MAIN_GRADIENT_HOVER};
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.5s;
        content: '';
    }

    &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        background: ${Color.MAIN_GRADIENT_FOCUS};
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.5s;
        content: '';
    }

    &:hover {
        &::before {
            opacity: 1;
        }
    }

    &:active {
        &::after {
            opacity: 1;
        }
    }
`;

const PRIMARY_SMALL = css`
    ${textStyle('EXTRA_SMALL')}
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 18px;
    color: ${Color.SECOND_LIGHT};
    background: ${Color.MAIN_GRADIENT};
    border: none;
    border-radius: 8px;

    & > * {
        z-index: 1;
    }

    &::before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        background: ${Color.MAIN_GRADIENT_HOVER};
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.5s;
        content: '';
    }

    &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        background: ${Color.MAIN_GRADIENT_FOCUS};
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.5s;
        content: '';
    }

    &:hover {
        &::before {
            opacity: 1;
        }
    }

    &:active {
        &::after {
            opacity: 1;
        }
    }
`;

const SECONDARY_LARGE = css`
    ${textStyle('MEDIUM')}
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 20px;
    color: ${Color.MAIN_DARK};
    background: ${Color.MAIN_LIGHT};
    border: none;
    border-radius: 12px;
    transition: background-color 0.5s;

    &:hover {
        background: ${Color.MAIN_LIGHT_HOVER};
    }

    &:active {
        background: ${Color.MAIN_LIGHT_FOCUS};
    }
`;

const SECONDARY_MEDIUM = css`
    ${textStyle('SMALL')}
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 13px 20px;
    color: ${Color.MAIN_DARK};
    background: ${Color.MAIN_LIGHT};
    border: none;
    border-radius: 10px;
    transition: background-color 0.5s;

    &:hover {
        background: ${Color.MAIN_LIGHT_HOVER};
    }

    &:active {
        background: ${Color.MAIN_LIGHT_FOCUS};
    }
`;

const SECONDARY_SMALL = css`
    ${textStyle('EXTRA_SMALL')}
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 18px;
    color: ${Color.MAIN_DARK};
    background: ${Color.MAIN_LIGHT};
    border: none;
    border-radius: 8px;
    transition: background-color 0.5s;

    &:hover {
        background: ${Color.MAIN_LIGHT_HOVER};
    }

    &:active {
        background: ${Color.MAIN_LIGHT_FOCUS};
    }
`;

const OUTLINE_LARGE = css`
    ${textStyle('MEDIUM')}
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 19px;
    color: ${Color.MAIN_DARK};
    background: transparent;
    border: 1px solid ${Color.MAIN_DARK};
    border-radius: 12px;
    transition: background-color 0.5s;

    &:hover {
        background: ${Color.MAIN_15};
    }

    &:active {
        background: ${Color.MAIN_40};
    }
`;

const OUTLINE_MEDIUM = css`
    ${textStyle('SMALL')}
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 19px;
    color: ${Color.MAIN_DARK};
    background: transparent;
    border: 1px solid ${Color.MAIN_DARK};
    border-radius: 10px;
    transition: background-color 0.5s;

    &:hover {
        background: ${Color.MAIN_15};
    }

    &:active {
        background: ${Color.MAIN_40};
    }
`;

const OUTLINE_SMALL = css`
    ${textStyle('EXTRA_SMALL')}
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 9px 17px;
    color: ${Color.MAIN_DARK};
    background: transparent;
    border: 1px solid ${Color.MAIN_DARK};
    border-radius: 8px;
    transition: background-color 0.5s;

    &:hover {
        background: ${Color.MAIN_15};
    }

    &:active {
        background: ${Color.MAIN_40};
    }
`;

export const CustomButtonStyled = styled.button<CustomButtonStyledProps>`
    position: relative;

    ${({ size, customStyle }) => {
        if (!size || !customStyle) {
            return;
        }

        switch (customStyle) {
            case 'primary':
                return (
                    (size === 'large' && PRIMARY_LARGE) ||
                    (size === 'medium' && PRIMARY_MEDIUM) ||
                    (size === 'small' && PRIMARY_SMALL)
                );
            case 'secondary':
                return (
                    (size === 'large' && SECONDARY_LARGE) ||
                    (size === 'medium' && SECONDARY_MEDIUM) ||
                    (size === 'small' && SECONDARY_SMALL)
                );
            case 'outline':
                return (
                    (size === 'large' && OUTLINE_LARGE) ||
                    (size === 'medium' && OUTLINE_MEDIUM) ||
                    (size === 'small' && OUTLINE_SMALL)
                );
        }
    }}
`;
