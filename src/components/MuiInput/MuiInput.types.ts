import { InputBaseProps } from '@mui/material';

export type MuiInputProps = InputBaseProps['inputProps'] & Pick<InputBaseProps, 'value' | 'onChange'>;
