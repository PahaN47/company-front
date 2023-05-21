import { Paper } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import styled from 'styled-components';

import { MuiArrowDownIconPath } from '~/assets/img';
import { Color } from '~/const';
import { textStyle } from '~/mixins';

export const PaperStyled = styled(Paper)`
    padding: 0;
`;

export const DatePickerStyled = styled(DatePicker<Dayjs>)`
    width: 100%;

    fieldset {
        border: none;
    }

    label {
        ${textStyle('MEDIUM')}
        color: ${Color.BLACK_40};

        &[data-shrink='true'] {
            transform: translate(12px, -9px), scale(0.75);
        }

        &[data-shrink='false'] {
            transform: translate(12px, 14px);
        }
    }

    & > div:first-of-type {
        padding-right: 12px;

        input {
            ${textStyle('MEDIUM')}
            height: 20px;
            padding: 14px 0 14px 12px;
            color: ${Color.BLACK};

            &::placeholder {
                color: ${Color.BLACK};
            }
        }

        button {
            padding: 12px;

            svg {
                opacity: 0;
            }

            &::before {
                position: absolute;
                width: 100%;
                height: 100%;
                background-image: url(${MuiArrowDownIconPath});
                background-repeat: no-repeat;
                background-position: center;
                transition: transform 0.5s;
                content: '';
            }
        }

        &.Mui-focused {
            button::before {
                transform: rotate(-180deg);
            }
        }
    }
`;

export const InputStyled = styled.input`
    width: 0;
    height: 0;
    pointer-events: none;
`;
