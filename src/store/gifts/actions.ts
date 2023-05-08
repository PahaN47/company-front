import { createAsyncThunk } from '@reduxjs/toolkit';

import { GIFTS_SLICE_NAME } from './const';
import { Gift } from './types';

import { axiosInstance } from '~/const';
import { AsyncThunkConfig } from '~/store';

const basePath = '/gifts';

export const getList = createAsyncThunk<Gift[], undefined, AsyncThunkConfig>(
    `${GIFTS_SLICE_NAME}/GET_OWN`,
    async () => {
        const { data } = await axiosInstance.get<Gift[]>(`${basePath}`);
        return data;
    },
);

export const getOne = createAsyncThunk<Gift, number, AsyncThunkConfig>(`${GIFTS_SLICE_NAME}/GET_ONE`, async (id) => {
    const { data } = await axiosInstance.get<Gift>(`${basePath}/${id}`);
    return data;
});
