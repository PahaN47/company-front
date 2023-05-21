import { createAsyncThunk } from '@reduxjs/toolkit';

import { MATCHES_SLICE_NAME } from './const';
import { CreateMatchPayload, Match } from './types';

import { axiosInstance } from '~/const';
import { AsyncThunkConfig } from '~/store';

const basePath = '/matches';

export const create = createAsyncThunk<Match, CreateMatchPayload, AsyncThunkConfig>(
    `${MATCHES_SLICE_NAME}/CREATE`,
    async (payload) => {
        const { data } = await axiosInstance.post<Match>(`${basePath}`, payload);
        return data;
    },
);

export const accept = createAsyncThunk<Match, number, AsyncThunkConfig>(`${MATCHES_SLICE_NAME}/ACCEPT`, async (id) => {
    const { data } = await axiosInstance.post<Match>(`${basePath}/accept/${id}`);
    return data;
});

export const reject = createAsyncThunk<Match, number, AsyncThunkConfig>(`${MATCHES_SLICE_NAME}/REJECT`, async (id) => {
    const { data } = await axiosInstance.post<Match>(`${basePath}/reject/${id}`);
    return data;
});

export const getIncoming = createAsyncThunk<Match[], undefined, AsyncThunkConfig>(
    `${MATCHES_SLICE_NAME}/GET_INCOMING`,
    async () => {
        const { data } = await axiosInstance.get<Match[]>(`${basePath}/incoming`);
        return data;
    },
);

export const getOutgoing = createAsyncThunk<Match[], undefined, AsyncThunkConfig>(
    `${MATCHES_SLICE_NAME}/GET_OUTGOING`,
    async () => {
        const { data } = await axiosInstance.get<Match[]>(`${basePath}/outgoing`);
        return data;
    },
);
