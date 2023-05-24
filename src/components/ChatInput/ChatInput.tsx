import React, { useCallback, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

import {
    ButtonContainerStyled,
    ButtonStyled,
    ConatinerStyled,
    InputContainerStyled,
    InputStyled,
} from './ChatInput.style';
import { ChatInputProps } from './ChatInput.types';

export const ChatInput = ({ className, onSend }: ChatInputProps) => {
    const [message, setMessage] = useState('');

    const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value), []);

    const handleSendClick = useCallback(() => {
        onSend?.(message);
        setMessage('');
    }, [message, onSend]);

    const handleEnterPress = useCallback(
        (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key.toLowerCase() == 'enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendClick();
            }
        },
        [handleSendClick],
    );

    return (
        <ConatinerStyled className={className}>
            <InputContainerStyled>
                <InputStyled
                    value={message}
                    onChange={handleChange}
                    onKeyDown={handleEnterPress}
                    placeholder="Сообщение..."
                    multiline
                />
            </InputContainerStyled>
            <ButtonContainerStyled>
                <ButtonStyled onClick={handleSendClick} disabled={!message}>
                    <SendIcon />
                </ButtonStyled>
            </ButtonContainerStyled>
        </ConatinerStyled>
    );
};
