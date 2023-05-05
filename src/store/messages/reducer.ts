import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getList } from './actions';
import { MESSAGES_SLICE_NAME } from './const';
import { AddMessagePayload, DeleteMessagePayload, MessagesState } from './types';

const initialState: MessagesState = {};

export const messagesSlice = createSlice({
    name: MESSAGES_SLICE_NAME,
    initialState,
    reducers: {
        addMessage: (state, { payload: { chatId, message } }: PayloadAction<AddMessagePayload>) => {
            state[chatId] = [message, ...state[chatId]];
        },
        deleteMessage: (state, { payload: { chatId, messageId } }: PayloadAction<DeleteMessagePayload>) => {
            state[chatId] = state[chatId].filter((message) => message.id !== messageId);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getList.fulfilled, (state, { payload: [id, messages] }) => {
            state[id] = messages;
        });
    },
});

export const MessagesExtraAction = messagesSlice.actions;
export default messagesSlice.reducer;
