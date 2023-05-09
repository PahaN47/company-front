import React from 'react';

import { ContainerStyled, FancyButtonStyled } from './FancyButton.style';
import { FancyButtonProps } from './FancyButton.types';

export const FancyButton = ({ className, style, ...props }: FancyButtonProps) => {
    return (
        <ContainerStyled className={className} style={style}>
            <FancyButtonStyled {...props} />
        </ContainerStyled>
    );
};
