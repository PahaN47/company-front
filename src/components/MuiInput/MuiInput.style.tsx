import { InputBase, Paper } from '@mui/material';
import styled from 'styled-components';

import { Color } from '~/const';
import { textStyle } from '~/mixins';

export const PaperStyled = styled(Paper)`
    padding: 0;
`;

export const InputBaseStyled = styled(InputBase)`
    width: 100%;
    height: 100%;
    padding: 14px 12px;

    input {
        ${textStyle('MEDIUM')}
        height: 20px;
        padding: 0;
        color: ${Color.BLACK};

        &::placeholder {
            color: ${Color.BLACK_40};
            opacity: 1;
        }
    }
`;
