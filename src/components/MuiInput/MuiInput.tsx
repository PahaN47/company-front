import React, { forwardRef, useMemo } from 'react';

import { InputBaseStyled, PaperStyled } from './MuiInput.style';
import { MuiInputProps } from './MuiInput.types';

export const MuiInput = forwardRef(
    ({ value, onChange, ...props }: MuiInputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
        const memoizedProps = useMemo(() => props, [props]);

        return (
            <PaperStyled>
                <InputBaseStyled inputProps={memoizedProps} inputRef={ref} value={value} onChange={onChange} />
            </PaperStyled>
        );
    },
);
