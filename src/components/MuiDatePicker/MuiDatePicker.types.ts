import { DatePickerProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';

export type MuiDatePickerProps = Omit<DatePickerProps<Dayjs>, 'format'> & React.RefAttributes<HTMLDivElement>;
