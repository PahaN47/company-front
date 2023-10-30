import React from 'react';

import { BasePageStyled, ChatListStyled } from './ChatsPage.style';

import { Color } from '~/const';
import { useAuth } from '~/hooks/useAuth';
import { useAppSelector } from '~/store';
import { getUserChats } from '~/store/chats';

export const ChatsPage = () => {
    const { id } = useAuth();
    const chats = useAppSelector(getUserChats(id));

    return (
        <BasePageStyled background={Color.MAIN_LIGHT_FOCUS}>{chats && <ChatListStyled chats={chats} />}</BasePageStyled>
    );
};
