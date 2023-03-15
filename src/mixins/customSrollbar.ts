import { css } from 'styled-components';

import { Color } from '~/const';

type CustomScrollBarParams = {
    color?: Color;
    thumb?: number;
    track?: number;
};

export const customScrollBar = ({
    thumb = 4,
    track = 16,
    color = Color.BLACK_25,
}: CustomScrollBarParams | undefined = {}) => css`
    scrollbar-gutter: stable;

    &::-webkit-scrollbar {
        background-color: transparent;
    }

    &::-webkit-scrollbar:vertical {
        width: ${track}px;
    }

    &::-webkit-scrollbar:horizontal {
        height: ${track}px;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${color};
        background-clip: padding-box;
        border: ${(track - thumb) / 2}px solid transparent;
        border-radius: 9999px;
    }
`;
