import { RegisterPayload } from '~/store/auth';

export type RegisterFormValues = Partial<RegisterPayload>;

export type RegisterFormProps = {
    className?: string;
    data?: RegisterFormValues;
    onLayoutChange?: () => void;
    onSubmit?: (data: RegisterFormValues) => void;
};
