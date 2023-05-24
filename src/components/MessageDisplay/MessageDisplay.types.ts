import { ChatUser } from '~/store/chats';
import { Message } from '~/store/messages';

export type MessageDisplayProps = {
    isOwn?: boolean;
    message: Pick<Message, 'id' | 'date' | 'message'>;
    onDelete?: (messageId: number) => void;
    user: ChatUser;
};
