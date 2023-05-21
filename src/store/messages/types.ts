export type Message = {
    chat: number;
    date: string;
    gift?: number;
    id: number;
    message: string;
    status: string;
    user: number;
};

export type AddMessagePayload = {
    chatId: number;
    message: Message;
};
export type DeleteMessagePayload = {
    chatId: number;
    messageId: number;
};

export type MessagesState = Record<number, Message[]>;
