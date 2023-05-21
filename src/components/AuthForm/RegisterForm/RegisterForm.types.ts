import { RegisterPayload } from '~/store/auth';

export type RegisterFormValues = Partial<RegisterPayload>;

export type RegisterFormProps = {
    className?: string;
    onLayoutChange?: () => void;
    onSubmit?: (data: RegisterFormValues) => void;
};
