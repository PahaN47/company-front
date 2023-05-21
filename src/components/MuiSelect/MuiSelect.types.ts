import { SelectChangeEvent } from '@mui/material';

export type SelectItem<T = Record<string, string>> = T & {
    id: number;
};

export type MuiSelectProps<T = Record<string, string>> = {
    className?: string;
    displayField?: keyof SelectItem<T>;
    getValue?: (item: SelectItem<T>) => string | number;
    getValueDisplay?: (item: SelectItem<T>) => string;
    name?: string;
    onChange: (e: SelectChangeEvent<string | number>) => void;
    value?: string | number;
    valueList: SelectItem<T>[];
};
