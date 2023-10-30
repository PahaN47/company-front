import { useCallback, useEffect, useMemo } from 'react';

import { useWS } from './useWS';

import { useAppDispatch } from '~/store';
import { MessagesExtraAction } from '~/store/messages';
import { WsChatRequestMessage, WsChatResponseMessage } from '~/types';

type ChatProps = {
    chatId?: number;
    userId?: number;
};

export const useChat = (props: ChatProps) => {
    const { chatId, userId } = useMemo(() => props, [props]);
    const dispatch = useAppDispatch();
    const { data, isOpen, ...ws } = useWS<WsChatRequestMessage, WsChatResponseMessage>(chatId?.toString());

    useEffect(() => {
        if (data && chatId) {
            if (data.type === 'send') {
                void dispatch(
                    MessagesExtraAction.addMessage({
                        chatId,
                        message: data,
                    }),
                );
            } else if (data.type === 'delete') {
                void dispatch(MessagesExtraAction.deleteMessage({ chatId, messageId: data.id }));
            }
        }
    }, [chatId, data, dispatch]);

    const sendMessage = useCallback(
        (message: string) => {
            if (chatId && userId) {
                const new_message: WsChatRequestMessage = {
                    type: 'send',
                    chat: chatId,
                    user: userId,
                    message,
                };
                ws.sendMessage(new_message);
            }
        },
        [chatId, userId, ws],
    );

    const deleteMessage = useCallback(
        (id: number) => {
            const new_message: WsChatRequestMessage = {
                type: 'delete',
                id,
            };
            ws.sendMessage(new_message);
        },
        [ws],
    );

    return { sendMessage, deleteMessage, isOpen };
};
