import { Profile } from '~/store/profile';

export type ChatUser = Pick<Profile, 'id' | 'firstName' | 'lastName' | 'avatar'>;

export type Chat = {
    id: number;
    user1: ChatUser;
    user2: ChatUser;
};

export type ChatsState = {
    needUpdateChats: boolean;
    ownChats?: Chat[];
};

export type UserChat = {
    id: number;
    user: ChatUser;
};
