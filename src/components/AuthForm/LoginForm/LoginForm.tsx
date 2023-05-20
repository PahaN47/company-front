import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';

import { FormStyled } from './LoginForm.style';
import { LoginFormProps, LoginFormValues } from './LoginForm.types';

import { MuiInput } from '~/components/MuiInput';

export const LoginForm = ({ className, ...props }: LoginFormProps) => {
    const { data, onSubmit, onLayoutChange } = props;
    const { register, handleSubmit } = useForm<LoginFormValues>({
        values: data,
    });

    return (
        <FormStyled className={className} onSubmit={onSubmit && handleSubmit(onSubmit)}>
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
