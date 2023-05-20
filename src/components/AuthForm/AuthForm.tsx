import React, { useMemo } from 'react';

import { AuthFormProps } from './AuthForm.types';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export const AuthForm = (props: AuthFormProps) => {
    const result = useMemo(() => {
        switch (props.type) {
            case 'register':
                return <RegisterForm {...props} />;
            case 'login':
            default:
                return <LoginForm {...props} />;
        }
    }, [props]);

    return result;
};
