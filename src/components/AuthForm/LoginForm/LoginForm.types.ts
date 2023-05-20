import { LoginPayload } from '~/store/auth';

export type LoginFormValues = Partial<LoginPayload>;

export type LoginFormProps = {
    className?: string;
    data?: LoginFormValues;
    onLayoutChange?: () => void;
    onSubmit?: (data: LoginFormValues) => void;
};
