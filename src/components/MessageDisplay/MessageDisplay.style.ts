import styled, { css } from 'styled-components';

import { CustomAvatar } from '~/components/CustomAvatar';
import { Color } from '~/const';
import { textStyle } from '~/mixins';

type MessageDisplayStyledProps = {
    isOwn: boolean;
};

export const ContainerStyled = styled.div<MessageDisplayStyledProps>`
    display: flex;
    gap: 16px;
    align-items: flex-end;
    justify-content: flex-start;
    height: fit-content;
    padding: 4px 0;

    ${({ isOwn }) =>
        isOwn
            ? css`
                  flex-direction: row-reverse;
              `
            : css`
                  flex-direction: row;
              `}
`;

export const AvatarStyled = styled(CustomAvatar)`
    width: 50px;
`;

export const MessageContainerStyled = styled.div<MessageDisplayStyledProps>`
    ${textStyle('MEDIUM')}
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    max-width: calc(50% - 84px);
    height: fit-content;
    min-height: 69px;
    padding: 14px 40px 14px 24px;
    word-break: break-word;

    button {
        opacity: 0;
        transition: opacity 0.5s;
    }

    &:hover button {
        opacity: 1;
    }

    ${({ isOwn }) =>
        isOwn
            ? css`
                  color: ${Color.BLACK};
                  background: ${Color.WHITE};
                  border-radius: 24px 24px 0 24px;
              `
            : css`
                  color: ${Color.WHITE};
                  background: ${Color.MAIN_DARK};
                  border-radius: 24px 24px 24px 0;
              `}
`;

export const TimeStyled = styled.div`
    ${textStyle('SMALLEST')}
    position: absolute;
    right: 14px;
    bottom: 4px;
`;

export const DeleteButtonStyled = styled.button`
    position: absolute;
    top: 14px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 0;
    color: ${Color.ERROR};
    background: none;
    border: none;

    & > svg {
        width: 100%;
        height: 100%;
    }
`;
