import { Button } from '@mui/material';
import styled from 'styled-components';

import { Color } from '~/const';

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 90px;
    background: ${Color.MAIN_LIGHT};
    border-bottom: 1px solid ${Color.MAIN};
`;

export const ButtonStyled = styled(Button)`
    && {
        position: absolute;
    }
    top: 50%;
    transform: translateY(-50%);
    right: 38px;
    left: auto;
`;
