import React, { useEffect } from 'react';

import { BasePageStyled, ChatListStyled } from './ChatsPage.style';

import { Color } from '~/const';
import { useAuth } from '~/hooks/useAuth';
import { useAppDispatch, useAppSelector } from '~/store';
import { ChatsAction, getUserChats } from '~/store/chats';

export const ChatsPage = () => {
    const dispatch = useAppDispatch();
    const { id } = useAuth();
    const chats = useAppSelector(getUserChats(id));

    useEffect(() => {
        if (id && !chats) {
            void dispatch(ChatsAction.getOwn());
        }
    }, [chats, dispatch, id]);

    return (
        <BasePageStyled background={Color.MAIN_LIGHT_FOCUS}>{chats && <ChatListStyled chats={chats} />}</BasePageStyled>
    );
};
