import { Profile } from '~/store/profile';
import { Gender } from '~/types';

export type ProfileEditFormValues = Partial<Omit<Profile, 'id' | 'gifts' | 'country'>> & {
    country?: number;
};

export type ProfileEditFormProps = {
    className?: string;
    initialValues?: ProfileEditFormValues;
    onLogout?: () => void;
    onSubmit?: (data: ProfileEditFormValues) => void;
};

export type ProfileGenderFormValue = {
    value: Gender;
};

export type ProfileTimezoneFormValue = object;
