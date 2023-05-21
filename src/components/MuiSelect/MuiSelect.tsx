import React, { forwardRef, useCallback } from 'react';
import { MenuItem } from '@mui/material';

import { PaperStyled, SelectStyled } from './MuiSelect.style';
import { MuiSelectProps, SelectItem } from './MuiSelect.types';

const MuiSelect = function <T = Record<string, string>>(
    { className, getValueDisplay, getValue, valueList, value, onChange, displayField, name }: MuiSelectProps<T>,
    ref?: React.ForwardedRef<HTMLInputElement>,
) {
    const valueOf = useCallback((item: SelectItem<T>) => (getValue ? getValue(item) : item.id), [getValue]);
    const displayOf = useCallback(
        (item: SelectItem<T>) =>
            getValueDisplay ? getValueDisplay(item) : displayField ? (item[displayField] as string) : item.id,
        [displayField, getValueDisplay],
    );

    return (
        <PaperStyled className={className}>
            <SelectStyled displayEmpty value={value ?? ''} onChange={onChange} name={name} inputRef={ref}>
                {valueList.map((item) => (
                    <MenuItem key={item.id} value={valueOf(item)}>
                        {displayOf(item)}
                    </MenuItem>
                ))}
            </SelectStyled>
        </PaperStyled>
    );
};

export default forwardRef(MuiSelect) as <T = Record<string, string>>(
    props: MuiSelectProps<T> & { ref?: React.ForwardedRef<HTMLInputElement> },
) => ReturnType<typeof MuiSelect>;
