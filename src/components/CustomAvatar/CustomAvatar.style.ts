import styled from 'styled-components';

import { CustomLink } from '~/components/CustomLink';
import { Color } from '~/const';

export const ContainerStyled = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background: linear-gradient(${Color.BLACK_25}, ${Color.BLACK_25}), ${Color.WHITE};
    border-radius: 50%;
`;

export const CustomLinkStyled = styled(CustomLink)`
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const ImageStyled = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
