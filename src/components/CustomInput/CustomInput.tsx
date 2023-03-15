import React from 'react';

import { CustomInputStyled, CustomTextAreaStyled } from './CustomInput.style';
import { CustomInputProps } from './CustomInput.types';

export const CustomInput = ({ valid = true, ...props }: CustomInputProps) => {
    const dataValid = valid ? undefined : false;

    return props.type === 'textarea' ? (
        <CustomTextAreaStyled rows={1} {...props} data-valid={dataValid} />
    ) : (
        <CustomInputStyled {...props} type="text" data-valid={dataValid} />
    );
};
