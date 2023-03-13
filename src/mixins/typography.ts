import { css } from 'styled-components';

import { TextStyle } from '~/types';

export const typography = (style: TextStyle) => {
    switch (style) {
        case 'LARGEST':
            return css`
                font-weight: 700;
                font-size: 28px;
                line-height: 32px;
            `;
        case 'EXTRA_LARGE':
            return css`
                font-weight: 600;
                font-size: 24px;
                line-height: 28px;
            `;
        case 'LARGE':
            return css`
                font-weight: 500;
                font-size: 20px;
                line-height: 24px;
            `;
        case 'MEDIUM':
            return css`
                font-weight: 500;
                font-size: 16px;
                line-height: 20px;
            `;
        case 'SMALL':
            return css`
                font-weight: 500;
                font-size: 14px;
                line-height: 18px;
            `;
        case 'EXTRA_SMALL':
            return css`
                font-weight: 500;
                font-size: 12px;
                line-height: 16px;
            `;
        case 'SMALLEST':
            return css`
                font-weight: 600;
                font-size: 10px;
                line-height: 12px;
            `;
    }
};
