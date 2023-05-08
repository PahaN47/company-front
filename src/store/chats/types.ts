export type Chat = {
    id: number;
    user1: number;
    user2: number;
};

export type ChatsState = {
    needUpdateChats: boolean;
    ownChats?: Chat[];
};
