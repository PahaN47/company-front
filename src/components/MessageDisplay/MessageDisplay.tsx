import React, { memo, useCallback, useMemo } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import dayjs from 'dayjs';

import { TIME_FORMAT } from './MessageDisplay.const';
import {
    AvatarStyled,
    ContainerStyled,
    DeleteButtonStyled,
    MessageContainerStyled,
    TimeStyled,
} from './MessageDisplay.style';
import { MessageDisplayProps } from './MessageDisplay.types';

export const MessageDisplay = memo(({ user, message: chatMessage, isOwn = false, onDelete }: MessageDisplayProps) => {
    const { id, date, message } = useMemo(() => chatMessage, [chatMessage]);
    const time = dayjs(date).format(TIME_FORMAT);

    const handleDeleteClick = useCallback(() => {
        onDelete?.(id);
    }, [id, onDelete]);

    return (
        <ContainerStyled isOwn={isOwn}>
            <AvatarStyled src={user.avatar} />
            <MessageContainerStyled isOwn={isOwn}>
                {message}
                <TimeStyled>{time}</TimeStyled>
                {isOwn && (
                    <DeleteButtonStyled onClick={handleDeleteClick}>
                        <DeleteForeverIcon />
                    </DeleteButtonStyled>
                )}
            </MessageContainerStyled>
        </ContainerStyled>
    );
});
