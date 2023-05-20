import React from 'react';

import { ContainerStyled, CustomLinkStyled, ImageStyled } from './CustomAvatar.style';
import { CustomAvatarProps } from './CustomAvatar.types';

export const CustomAvatar = ({ src, onClick, href, className }: CustomAvatarProps) => {
    return (
        <ContainerStyled className={className} onClick={onClick}>
            {href && <CustomLinkStyled href={href} />}
            {src && <ImageStyled src={src} />}
        </ContainerStyled>
    );
};
