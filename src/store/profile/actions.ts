import { createAsyncThunk } from '@reduxjs/toolkit';

import { PROFILE_SLICE_NAME } from './const';
import { Profile, UpdateProfilePayload } from './types';

import { axiosInstance } from '~/const';
import { AsyncThunkConfig } from '~/store';

const basePath = '/profile';

export const getOwn = createAsyncThunk<Profile, number, AsyncThunkConfig>(
    `${PROFILE_SLICE_NAME}/GET_OWN`,
    async (id) => {
        const { data } = await axiosInstance.get<Profile>(`${basePath}/${id}`);
        return data;
    },
);

export const get = createAsyncThunk<Profile, number, AsyncThunkConfig>(`${PROFILE_SLICE_NAME}/GET`, async (id) => {
    const { data } = await axiosInstance.get<Profile>(`${basePath}/${id}`);
    return data;
});

export const update = createAsyncThunk<Profile, UpdateProfilePayload, AsyncThunkConfig>(
    `${PROFILE_SLICE_NAME}/update`,
    async ({ id, ...profile }) => {
        const { data } = await axiosInstance.patch<Profile>(`${basePath}/${id}`, profile);
        return data;
    },
);
