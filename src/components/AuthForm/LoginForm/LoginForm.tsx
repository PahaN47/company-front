import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';

import { FormStyled } from './LoginForm.style';
import { LoginFormProps, LoginFormValues } from './LoginForm.types';

import { MuiInput } from '~/components/MuiInput';

export const LoginForm = ({ className, data, onSubmit, onLayoutChange }: LoginFormProps) => {
    const { register, handleSubmit, reset } = useForm<LoginFormValues>({
        defaultValues: data,
    });

    const handleSubmitReset = useCallback(
        (values: LoginFormValues) => {
            onSubmit?.(values);
            reset();
        },
        [onSubmit, reset],
    );

    return (
        <FormStyled className={className} onSubmit={onSubmit && handleSubmit(handleSubmitReset)}>
            <MuiInput placeholder="E-mail" type="email" {...register('email', { required: true })} />
            <MuiInput placeholder="Пароль" type="password" {...register('password', { required: true })} />
            <Button variant="contained" size="large" type="submit">
                Войти
            </Button>
            <Button variant="outlined" size="large" type="button" onClick={onLayoutChange}>
                Зарегистрироваться
            </Button>
        </FormStyled>
    );
};
