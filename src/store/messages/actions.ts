import { createAsyncThunk } from '@reduxjs/toolkit';

import { MESSAGES_SLICE_NAME } from './const';
import { Message } from './types';

import { axiosInstance } from '~/const';
import { AsyncThunkConfig } from '~/store';

const basePath = '/messages';

export const getList = createAsyncThunk<[number, Message[]], number, AsyncThunkConfig>(
    `${MESSAGES_SLICE_NAME}/GET_LIST`,
    async (id) => {
        const { data } = await axiosInstance.get<Message[]>(`${basePath}/${id}`);
        return [id, data];
    },
);
