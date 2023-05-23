import { UserChat } from './types';

import { RootState } from '~/store';

export const getUserChats =
    (user_id?: number) =>
    (state: RootState): UserChat[] | undefined => {
        if (user_id != null) {
            return state.chats.ownChats?.map(({ id, user1, user2 }) => ({
                id,
                user: user1.id === user_id ? user2 : user1,
            }));
        }
        return undefined;
    };
