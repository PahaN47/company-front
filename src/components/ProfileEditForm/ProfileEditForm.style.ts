import { Button } from '@mui/material';
import styled from 'styled-components';

import { Color } from '~/const';
import { textStyle } from '~/mixins';

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-end;
    transform: translateX(-90px);
`;

export const InputContainerStyled = styled.div`
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    & > *:nth-child(2) {
        width: calc(100% - 180px);
    }
`;

export const InputLabelStyled = styled.div`
    ${textStyle('MEDIUM')}
    color: ${Color.BLACK};
`;

export const ButtonStyled = styled(Button)`
    width: calc(100% - 180px);
`;
