import { useAppSelector } from '~/store';
import { AuthUser } from '~/store/auth';

export const useAuth = (): Partial<AuthUser> => {
    const user = useAppSelector((state) => state.auth.user);

    if (user) {
        return user;
    }

    return {
        email: undefined,
        firstName: undefined,
        id: undefined,
        token: undefined,
    };
};
