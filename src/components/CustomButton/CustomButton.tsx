import React from 'react';

import { CustomButtonStyled, CustomLinkStyled } from './CustomButton.style';
import { CustomButtonProps } from './CustomButton.types';

export const CustomButton = ({ href, target, children, ...props }: CustomButtonProps) => {
    return (
        <CustomButtonStyled {...props}>
            {children}
            {href && <CustomLinkStyled href={href} target={target} />}
        </CustomButtonStyled>
    );
};
