import React, { forwardRef } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { DatePickerStyled, PaperStyled } from './MuiDatePicker.style';
import { MuiDatePickerProps } from './MuiDatePicker.types';

export const MuiDatePicker = forwardRef((props: MuiDatePickerProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
        <PaperStyled>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePickerStyled ref={ref} format="DD.MM.YYYY" {...props} />
            </LocalizationProvider>
        </PaperStyled>
    );
});
