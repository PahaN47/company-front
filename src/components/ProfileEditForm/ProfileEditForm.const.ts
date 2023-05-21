import { ProfileGenderFormValue } from './ProfileEditForm.types';

import { SelectItem } from '~/components/MuiSelect/MuiSelect.types';

export const GENDER_SELECT_LIST: SelectItem<ProfileGenderFormValue>[] = [
    {
        id: 1,
        value: 'male',
    },
    {
        id: 2,
        value: 'female',
    },
    {
        id: 3,
        value: 'other',
    },
];

export const getTimezoneSelectList = () => Array.from({ length: 23 }, (_, index) => ({ id: index - 11 }));
