import { ProfileGenderFormValue, ProfileTimezoneFormValue } from './ProfileEditForm.types';

import { SelectItem } from '~/components/MuiSelect/MuiSelect.types';
import { Country } from '~/store/countries';

export const getGenderValue = ({ value }: SelectItem<ProfileGenderFormValue>) => value;
export const getGenderValueDisplay = ({ value }: SelectItem<ProfileGenderFormValue>) => {
    switch (value) {
        case 'male':
            return 'Мужчина';
        case 'female':
            return 'Женщина';
        case 'other':
            return 'Не скажу';
    }
};

export const getCountryValue = ({ id }: SelectItem<Country>) => id;
export const getCountryValueDisplay = ({ name }: SelectItem<Country>) => name;

export const getTimezoneValue = (item: SelectItem<ProfileTimezoneFormValue>) => item.id;
export const getTimezoneValueDisplay = ({ id }: SelectItem<ProfileTimezoneFormValue>) => {
    if (id >= 0) {
        return `UTC+${id.toString().padStart(2, '0')}:00`;
    } else {
        return `UTC-${(-id).toString().padStart(2, '0')}:00`;
    }
};
