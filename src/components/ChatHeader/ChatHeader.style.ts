import styled from 'styled-components';

import { CustomAvatar } from '~/components/CustomAvatar';
import { CustomLink } from '~/components/CustomLink';
import { Color } from '~/const';
import { textStyle } from '~/mixins';

export const ContainerStyled = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    padding: 12px 8px;
    background: ${Color.WHITE};
    border-bottom: 1px solid ${Color.MAIN_SEMI_LIGHT};
`;

export const BackButtonStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    padding: 0;
    background: none;
    border: none;

    svg {
        width: 100%;
        height: 100%;

        path {
            transition: fill 0.5s;
            fill: ${Color.MAIN_DARK};
        }
    }

    &:hover svg path {
        fill: ${Color.MAIN_SEMI_DARK};
    }
`;

export const ProfileContainerStyled = styled.div`
    position: relative;
    display: flex;
    gap: 21px;
    align-items: center;
`;

export const AvatarStyled = styled(CustomAvatar)`
    width: 50px;
`;

export const NameContainerStyled = styled.div`
    ${textStyle('EXTRA_LARGE')}
    color: ${Color.BLACK};
`;

export const CustomLinkStyled = styled(CustomLink)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;
