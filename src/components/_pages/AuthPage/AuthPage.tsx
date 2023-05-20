import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { AuthFormStyled } from './AuthPage.style';

import { AuthPageType } from '~/components/AuthForm/AuthForm.types';
import { LoginFormValues } from '~/components/AuthForm/LoginForm/LoginForm.types';
import { RegisterFormValues } from '~/components/AuthForm/RegisterForm/RegisterForm.types';
import { BasePage } from '~/components/BasePage';
import { Color, HOME_PAGE_URL, LOGIN_PAGE_URL, REGISTER_PAGE_URL } from '~/const';
import { useAppDispatch } from '~/store';
import { AuthAction } from '~/store/auth';

export const AuthPage = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [mode, setMode] = useState<AuthPageType>();

    const urlMode = router.query['mode'] as AuthPageType | undefined;

    useEffect(() => {
        if (urlMode) {
            setMode(urlMode);
        }
    }, [urlMode]);

    const handleLayoutChange = useCallback(() => {
        if (mode === 'register') {
            void router.push(LOGIN_PAGE_URL);
        } else {
            void router.push(REGISTER_PAGE_URL);
        }
    }, [mode, router]);

    const handleLoginSubmit = useCallback(
        ({ email, password }: LoginFormValues) => {
            if (email && password) {
                void dispatch(AuthAction.login({ email, password })).then(() => router.push(HOME_PAGE_URL));
            }
        },
        [dispatch, router],
    );

    const handleRegisterSubmit = useCallback(
        ({ firstName, email, password, birthDate }: RegisterFormValues) => {
            if (firstName && email && password && birthDate) {
                void dispatch(AuthAction.register({ firstName, email, password, birthDate })).then(() =>
                    router.push(HOME_PAGE_URL),
                );
            }
        },
        [dispatch, router],
    );

    const handleSubmit = useCallback(
        (values: LoginFormValues | RegisterFormValues) => {
            if (mode === 'register') {
                handleRegisterSubmit(values as RegisterFormValues);
            } else {
                handleLoginSubmit(values as LoginFormValues);
            }
        },
        [handleLoginSubmit, handleRegisterSubmit, mode],
    );

    return (
        <BasePage background={Color.MAIN_SEMI_LIGHT}>
            <AuthFormStyled type={mode} onLayoutChange={handleLayoutChange} onSubmit={handleSubmit} />
        </BasePage>
    );
};
