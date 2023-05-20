import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { Dayjs } from 'dayjs';

import { FormStyled } from './RegisterForm.style';
import { RegisterFormProps, RegisterFormValues } from './RegisterForm.types';

import { MuiDatePicker } from '~/components/MuiDatePicker';
import { MuiInput } from '~/components/MuiInput';

export const RegisterForm = ({ className, ...props }: RegisterFormProps) => {
    const { data, onSubmit, onLayoutChange } = props;
    const { register, handleSubmit, setValue, resetField } = useForm<RegisterFormValues>({
        values: data,
    });
    const [birthDate, setBirthDate] = useState<Dayjs | null>(null);

    const handleBirthDateChange = useCallback((value: Dayjs | null) => {
        setBirthDate(value);
    }, []);

    useEffect(() => {
        if (birthDate) {
            setValue('birthDate', birthDate?.toDate());
        } else {
            resetField('birthDate');
        }
    }, [birthDate, resetField, setValue]);

    return (
        <FormStyled className={className} onSubmit={onSubmit && (handleSubmit(onSubmit) as VoidFunction)}>
            <MuiInput placeholder="Имя" {...register('firstName', { required: true })} />
            <MuiInput placeholder="E-mail" type="email" {...register('email', { required: true })} />
            <MuiInput placeholder="Пароль" type="password" {...register('password', { required: true })} />
            <MuiDatePicker label="Дата рождения" value={birthDate} onChange={handleBirthDateChange} />
            <Button variant="contained" size="large" type="submit">
                Зарегистрироваться
            </Button>
            <Button variant="outlined" size="large" type="button" onClick={onLayoutChange}>
                Войти
            </Button>
        </FormStyled>
    );
};
