import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';

import { FormStyled } from './RegisterForm.style';
import { RegisterFormProps, RegisterFormValues } from './RegisterForm.types';

import { MuiDatePicker } from '~/components/MuiDatePicker';
import { MuiInput } from '~/components/MuiInput';
import { DATE_FORMAT } from '~/const';

export const RegisterForm = ({ className, onSubmit, onLayoutChange }: RegisterFormProps) => {
    const { register, handleSubmit, setValue, resetField, reset } = useForm<RegisterFormValues>();

    const handleSubmitReset = useCallback(
        (values: RegisterFormValues) => {
            onSubmit?.(values);
            reset();
        },
        [onSubmit, reset],
    );

    const [birthDate, setBirthDate] = useState<string>();
    const birthDateValue = useMemo(() => (birthDate ? dayjs(birthDate) : null), [birthDate]);

    const handleBirthDateChange = useCallback((value: Dayjs | null) => {
        setBirthDate(value?.format(DATE_FORMAT));
    }, []);

    useEffect(() => {
        if (birthDate) {
            setValue('birthDate', birthDate);
        } else {
            resetField('birthDate');
        }
    }, [birthDate, resetField, setValue]);

    return (
        <FormStyled className={className} onSubmit={onSubmit && handleSubmit(handleSubmitReset)}>
            <MuiInput placeholder="Имя" {...register('firstName', { required: true })} />
            <MuiInput placeholder="E-mail" type="email" {...register('email', { required: true })} />
            <MuiInput placeholder="Пароль" type="password" {...register('password', { required: true })} />
            <MuiDatePicker label="Дата рождения" value={birthDateValue} onChange={handleBirthDateChange} />
            <Button variant="contained" size="large" type="submit">
                Зарегистрироваться
            </Button>
            <Button variant="outlined" size="large" type="button" onClick={onLayoutChange}>
                Войти
            </Button>
        </FormStyled>
    );
};
