import { Paper, Select, SelectProps } from '@mui/material';
import styled from 'styled-components';

import { MuiArrowDownIconPath } from '~/assets/img';
import { Color } from '~/const';
import { textStyle } from '~/mixins';

export const PaperStyled = styled(Paper)`
    padding: 0;
`;

export const SelectStyled = styled(Select)`
    && {
        width: 100%;
        height: 100%;
    }

    fieldset {
        border: none;
    }

    svg {
        opacity: 0;
    }

    & > div {
        ${textStyle('MEDIUM')}
        height: 20px !important;
        min-height: initial !important;
        padding: 14px 12px;

        &::before {
            position: absolute;
            top: 12px;
            right: 12px;
            width: 24px;
            height: 24px;
            background-image: url(${MuiArrowDownIconPath});
            background-repeat: no-repeat;
            background-position: center;
            transition: transform 0.5s;
            content: '';
        }

        &[aria-expanded='true']::before {
            transform: rotate(-180deg);
        }
    }
` as (<T>(props: SelectProps<T>) => JSX.Element) & {
    muiName: string;
};

export const PlaceholderStyled = styled.span`
    ${textStyle('MEDIUM')}
    color: ${Color.BLACK_40}
`;
