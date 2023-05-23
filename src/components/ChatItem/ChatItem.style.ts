import styled from 'styled-components';

import { CustomAvatar } from '~/components/CustomAvatar';
import { CustomLink } from '~/components/CustomLink';
import { Color } from '~/const';
import { textStyle } from '~/mixins';

export const ContainerStyled = styled.div`
    position: relative;
    display: flex;
    gap: 35px;
    align-items: center;
    padding: 10px 24px 10px 20px;
    background: ${Color.WHITE};

    &:not(:last-child) {
        &::after {
            position: absolute;
            right: 20px;
            bottom: 0;
            left: 20px;
            height: 1px;
            background: ${Color.BLACK_25};
            content: '';
        }
    }
`;

export const CustomAvatarStyled = styled(CustomAvatar)`
    width: 65px;
`;

export const NameContainerStyled = styled.div`
    ${textStyle('MEDIUM')}
`;

export const CustomLinkStyled = styled(CustomLink)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: ${Color.BLACK};
`;
