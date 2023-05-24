import React, { memo } from 'react';

import { ContainerStyled, CustomAvatarStyled, CustomLinkStyled, NameContainerStyled } from './ChatItem.style';
import { ChatItemProps } from './ChatItem.types';

import { CHATS_PAGE_URL } from '~/const';

export const ChatItem = memo(({ chatId, firstName, lastName, avatar }: ChatItemProps) => {
    const fullName = `${lastName ? lastName + ' ' : ''}${firstName}`;

    return (
        <ContainerStyled>
            <CustomAvatarStyled src={avatar} />
            <NameContainerStyled>{fullName}</NameContainerStyled>
            <CustomLinkStyled href={`${CHATS_PAGE_URL}/${chatId}`} />
        </ContainerStyled>
    );
});
