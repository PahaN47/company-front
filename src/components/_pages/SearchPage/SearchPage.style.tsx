import styled from 'styled-components';

import { BasePage } from '~/components/BasePage';
import { CustomLink } from '~/components/CustomLink';
import { FancyButton } from '~/components/FancyButton';
import { Color } from '~/const';

export const BasePageStyled = styled(BasePage)`
    column-gap: 79px;
    padding-top: 54px;
`;

export const FancyButtonStyled = styled(FancyButton)`
    width: 120px;
`;

export const HeaderStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100vw;
    height: 54px;
    box-sizing: border-box;
    padding: 0 67px;
    background: ${Color.WHITE};
    border-bottom: 1px solid ${Color.MAIN_SEMI_LIGHT};
`;

export const CustomLinkStyled = styled(CustomLink)`
    width: 56px;
    height: 46px;
    color: ${Color.MAIN_DARK};
    transition: color 0.5s;

    & > svg {
        width: 100%;
        height: 100%;
    }

    &:hover {
        color: ${Color.MAIN_SEMI_DARK};
    }
`;
