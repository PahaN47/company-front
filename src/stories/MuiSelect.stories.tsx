import React, { useCallback, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { Meta, Story } from '@storybook/react/types-6-0';

import { MuiSelect } from '~/components/MuiSelect';
import { MuiSelectProps } from '~/components/MuiSelect/MuiSelect.types';

export default {
    title: 'Components/MuiSelect',
    component: MuiSelect,
} as Meta;

type SelectValue = {
    value: string;
};

export const Default: Story<MuiSelectProps<SelectValue>> = (args) => {
    const [value, setValue] = useState<string | number>();

    const handleChange = useCallback((e: SelectChangeEvent<string | number>) => {
        setValue(e.target.value);
    }, []);

    return <MuiSelect<SelectValue> {...args} value={value} onChange={handleChange} />;
};
Default.args = {
    getValueDisplay: (item) => `I am ${item.value}`,
    valueList: [
        {
            id: 1,
            value: 'AAAA',
        },
        {
            id: 2,
            value: 'BBBB',
        },
        {
            id: 3,
            value: 'CCCC',
        },
        {
            id: 4,
            value: 'DDDD',
        },
        {
            id: 5,
            value: 'EEEE',
        },
        {
            id: 6,
            value: 'FFFF',
        },
    ],
};
