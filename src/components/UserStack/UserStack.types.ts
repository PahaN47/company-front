import { User } from '~/store/users';

export type UserStackProps = {
    animationDelay?: number;
    animationLength?: number;
    maxStackLength?: number;
    showAccept?: boolean;
    showReject?: boolean;
    users?: User[];
};
