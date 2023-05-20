import { LoginFormProps } from './LoginForm/LoginForm.types';
import { RegisterFormProps } from './RegisterForm/RegisterForm.types';

export type AuthPageType = 'login' | 'register';

export type AuthFormProps = ({ type?: 'login' } & LoginFormProps) | ({ type: 'register' } & RegisterFormProps);
