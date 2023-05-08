import { createTheme } from '@mui/material';

import { Color } from './color';

export const theme = createTheme({
    palette: {
        primary: {
            main: Color.MAIN_DARK,
            contrastText: Color.WHITE,
        },
    },
});
