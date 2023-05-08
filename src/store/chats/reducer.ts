import { createSlice } from '@reduxjs/toolkit';

import { getOwn } from './actions';
import { CHATS_SLICE_NAME } from './const';
import { ChatsState } from './types';

const initialState: ChatsState = {
    ownChats: undefined,
    needUpdateChats: false,
};

export const chatsSlice = createSlice({
    name: CHATS_SLICE_NAME,
    initialState,
    reducers: {
        setNeedUpdateChats: (state) => {
            state.needUpdateChats = true;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getOwn.fulfilled, (state, { payload }) => {
            state.ownChats = payload;
        });
    },
});

export const ChatsExtraAction = chatsSlice.actions;

export default chatsSlice.reducer;
