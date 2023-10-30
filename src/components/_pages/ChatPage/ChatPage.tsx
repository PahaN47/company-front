import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/router';

import {
    BasePageStyled,
    BottomAnchorStyled,
    ChatHeaderStyled,
    ChatInputStyled,
    MessagesContainerStyled,
} from './ChatPage.style';

import { MessageDisplay } from '~/components/MessageDisplay';
import { Color } from '~/const';
import { useAuth } from '~/hooks/useAuth';
import { useChat } from '~/hooks/useChat';
import { useAppDispatch, useAppSelector } from '~/store';
import { MessagesAction } from '~/store/messages';

export const ChatPage = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const bottomRef = useRef<HTMLDivElement>(null);
    const chatId = +(router.query['id'] ?? 0);

    const chatList = useAppSelector((state) => state.chats.ownChats);
    const chat = useMemo(() => chatList?.find((item) => item.id === chatId), [chatId, chatList]);
    const { id } = useAuth();
    const { currentUser, otherUser } = useMemo(() => {
        const { user1, user2 } = chat ?? {};
        if (user1?.id === id) {
            return {
                currentUser: user1,
                otherUser: user2,
            };
        }
        return {
            currentUser: user2,
            otherUser: user1,
        };
    }, [chat, id]);

    const { sendMessage, deleteMessage, isOpen } = useChat({ chatId, userId: id });

    const messages = useAppSelector((state) => state.messages[chatId] ?? undefined);

    useEffect(() => {
        if (!messages && chatId) {
            void dispatch(MessagesAction.getList(chatId));
        }
    }, [chatId, dispatch, messages]);

    const handleSendMessage = useCallback(
        (message: string) => {
            if (isOpen) {
                sendMessage(message);
            }
        },
        [isOpen, sendMessage],
    );

    const handleDeleteMessage = useCallback(
        (messageId: number) => {
            if (isOpen) {
                deleteMessage(messageId);
            }
        },
        [deleteMessage, isOpen],
    );

    useEffect(() => {
        bottomRef.current?.scrollIntoView();
    }, [messages]);

    return (
        <BasePageStyled background={Color.SECOND_LIGHT} scrollable={false}>
            <ChatHeaderStyled user={otherUser} />
            <MessagesContainerStyled>
                {messages?.map((message) => {
                    if (message.user && currentUser && otherUser) {
                        const messageUser = message.user === currentUser.id ? currentUser : otherUser;
                        const isOwn = messageUser === currentUser;
                        return (
                            <MessageDisplay
                                key={message.id}
                                user={messageUser}
                                isOwn={isOwn}
                                message={message}
                                onDelete={handleDeleteMessage}
                            />
                        );
                    }
                })}
                <BottomAnchorStyled ref={bottomRef} />
            </MessagesContainerStyled>
            <ChatInputStyled onSend={handleSendMessage} />
        </BasePageStyled>
    );
};
