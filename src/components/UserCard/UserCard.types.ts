import { User } from '~/store/users';

export type UserCardHiddenType = 'accepted' | 'rejected';

export type UserCardProps = {
    hiddenType?: UserCardHiddenType;
    index?: number;
    maxIndex?: number;
    user?: User;
};
