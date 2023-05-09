import React from 'react';

import { ContainerStyled, CustomLinkStyled, ImageStyled } from './CustomAvatar.style';
import { CustomAvatarProps } from './CustomAvatar.types';

export const CustomAvatar = ({ src, onClick, href }: CustomAvatarProps) => {
    return (
        <ContainerStyled onClick={onClick}>
            {href && <CustomLinkStyled href={href} />}
            <ImageStyled src={src} />
        </ContainerStyled>
    );
};
