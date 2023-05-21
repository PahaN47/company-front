import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SelectChangeEvent } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';

import { GENDER_SELECT_LIST, getTimezoneSelectList } from './ProfileEditForm.const';
import { ButtonStyled, FormStyled, InputContainerStyled, InputLabelStyled } from './ProfileEditForm.style';
import {
    ProfileEditFormProps,
    ProfileEditFormValues,
    ProfileGenderFormValue,
    ProfileTimezoneFormValue,
} from './ProfileEditForm.types';
import {
    getCountryValue,
    getCountryValueDisplay,
    getGenderValue,
    getGenderValueDisplay,
    getTimezoneValue,
    getTimezoneValueDisplay,
} from './ProfileEditForm.utils';

import { MuiDatePicker } from '~/components/MuiDatePicker';
import { MuiInput } from '~/components/MuiInput';
import { MuiSelect } from '~/components/MuiSelect';
import { DATE_FORMAT } from '~/const';
import { useAppSelector } from '~/store';
import { Country } from '~/store/countries';
import { Gender } from '~/types';

export const ProfileEditForm = memo(({ className, initialValues, onSubmit, onLogout }: ProfileEditFormProps) => {
    const formConfig = useMemo(
        () => ({
            defaultValues: initialValues,
        }),
        [initialValues],
    );
    const { register, handleSubmit, setValue, resetField } = useForm<ProfileEditFormValues>(formConfig);

    const countriesList = useAppSelector((state) => state.countries.list ?? []);
    const timezoneList = useMemo(() => getTimezoneSelectList(), []);

    const [gender, setGender] = useState<Gender | undefined>(initialValues?.gender);
    const [birthDate, setBirthDate] = useState<string | undefined>(initialValues?.birthDate);
    const birthDateValue = useMemo(() => (birthDate ? dayjs(birthDate) : null), [birthDate]);
    const [country, setCountry] = useState<number | undefined>(initialValues?.country);
    const [timezone, setTimezone] = useState<number | undefined>(initialValues?.timezone);

    const handleGenderChange = useCallback(
        (e: SelectChangeEvent<string | number>) => setGender(e.target.value as Gender),
        [],
    );

    const handleBirthDateChange = useCallback((value: Dayjs | null) => {
        setBirthDate(value?.format(DATE_FORMAT));
    }, []);

    const handleCountryChange = useCallback((e: SelectChangeEvent<string | number>) => {
        setCountry(+e.target.value);
    }, []);

    const handleTimezoneChange = useCallback((e: SelectChangeEvent<string | number>) => {
        setTimezone(+e.target.value);
    }, []);

    useEffect(() => {
        if (gender) {
            setValue('gender', gender);
        } else {
            resetField('gender');
        }
    }, [gender, resetField, setValue]);

    useEffect(() => {
        if (birthDate) {
            setValue('birthDate', birthDate);
        } else {
            resetField('birthDate');
        }
    }, [birthDate, resetField, setValue]);

    useEffect(() => {
        if (country) {
            setValue('country', country);
        } else {
            resetField('country');
        }
    }, [country, resetField, setValue]);

    useEffect(() => {
        if (timezone) {
            setValue('timezone', timezone);
        } else {
            resetField('timezone');
        }
    }, [timezone, resetField, setValue]);

    return (
        <FormStyled className={className} onSubmit={onSubmit && handleSubmit(onSubmit)}>
            <InputContainerStyled>
                <InputLabelStyled>Имя</InputLabelStyled>
                <MuiInput {...register('firstName', { required: true })} />
            </InputContainerStyled>
            <InputContainerStyled>
                <InputLabelStyled>Фамилия</InputLabelStyled>
                <MuiInput {...register('lastName')} />
            </InputContainerStyled>
            <InputContainerStyled>
                <InputLabelStyled>Телефон</InputLabelStyled>
                <MuiInput {...register('phone')} />
            </InputContainerStyled>
            <InputContainerStyled>
                <InputLabelStyled>E-mail</InputLabelStyled>
                <MuiInput type="email" {...register('email', { required: true })} />
            </InputContainerStyled>
            <InputContainerStyled>
                <InputLabelStyled>Фото профиля</InputLabelStyled>
                <MuiInput {...register('avatar')} />
            </InputContainerStyled>
            <InputContainerStyled>
                <InputLabelStyled>Пол</InputLabelStyled>
                <MuiSelect<ProfileGenderFormValue>
                    valueList={GENDER_SELECT_LIST}
                    getValue={getGenderValue}
                    getValueDisplay={getGenderValueDisplay}
                    onChange={handleGenderChange}
                    value={gender}
                />
            </InputContainerStyled>
            <InputContainerStyled>
                <InputLabelStyled>Дата рождения</InputLabelStyled>
                <MuiDatePicker value={birthDateValue} onChange={handleBirthDateChange} />
            </InputContainerStyled>
            <InputContainerStyled>
                <InputLabelStyled>Страна</InputLabelStyled>
                <MuiSelect<Country>
                    valueList={countriesList}
                    getValue={getCountryValue}
                    getValueDisplay={getCountryValueDisplay}
                    onChange={handleCountryChange}
                    value={country}
                />
            </InputContainerStyled>
            <InputContainerStyled>
                <InputLabelStyled>Часовой пояс</InputLabelStyled>
                <MuiSelect<ProfileTimezoneFormValue>
                    valueList={timezoneList}
                    getValue={getTimezoneValue}
                    getValueDisplay={getTimezoneValueDisplay}
                    onChange={handleTimezoneChange}
                    value={timezone}
                />
            </InputContainerStyled>
            <ButtonStyled type="submit" variant="contained" size="large">
                Применить
            </ButtonStyled>
            <ButtonStyled type="button" variant="outlined" size="large" onClick={onLogout}>
                Выйти
            </ButtonStyled>
        </FormStyled>
    );
});
