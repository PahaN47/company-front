import { createAsyncThunk } from '@reduxjs/toolkit';

import { CHATS_SLICE_NAME } from './const';
import { Chat } from './types';

import { axiosInstance } from '~/const';
import { AsyncThunkConfig } from '~/store';

const basePath = '/chats';

export const getOwn = createAsyncThunk<Chat[], undefined, AsyncThunkConfig>(`${CHATS_SLICE_NAME}/GET_OWN`, async () => {
    const { data } = await axiosInstance.get<Chat[]>(`${basePath}`);
    return data;
});
