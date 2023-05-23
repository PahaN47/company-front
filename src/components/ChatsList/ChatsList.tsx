import React from 'react';

import { ContainerStyled } from './ChatsList.style';
import { ChatsListProps } from './ChatsList.types';

import { ChatItem } from '~/components/ChatItem';

export const ChatsList = ({ className, chats }: ChatsListProps) => {
    return (
        <ContainerStyled className={className}>
            {chats.map(({ id, user }) => (
                <ChatItem key={id} {...user} />
            ))}
        </ContainerStyled>
    );
};
