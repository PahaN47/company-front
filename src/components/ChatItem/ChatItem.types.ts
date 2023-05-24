import { ChatUser } from '~/store/chats';

export type ChatItemProps = Omit<ChatUser, 'id'> & {
    chatId: number;
};
