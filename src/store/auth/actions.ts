import { createAsyncThunk } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

import { AUTH_SLICE_NAME } from './const';
import { AuthUser, LoginPayload, RegisterPayload } from './types';

import { axiosInstance } from '~/const';
import { AsyncThunkConfig } from '~/store';

const basePath = '/auth';

export const cookieLogin = createAsyncThunk<AuthUser, undefined, AsyncThunkConfig>(
    `${AUTH_SLICE_NAME}/COOKIE_LOGIN`,
    async () => {
        const { data } = await axiosInstance.post<AuthUser>(`${basePath}/login`);
        return data;
    },
);

export const login = createAsyncThunk<AuthUser, LoginPayload, AsyncThunkConfig>(
    `${AUTH_SLICE_NAME}/LOGIN`,
    async (payload) => {
        const { data } = await axiosInstance.post<AuthUser>(`${basePath}/login`, payload);
        return data;
    },
);

export const register = createAsyncThunk<AuthUser, RegisterPayload, AsyncThunkConfig>(
    `${AUTH_SLICE_NAME}/REGISTER`,
    async ({ birthDate, ...payload }) => {
        const dateStr = dayjs(birthDate).format('YYYY-MM-DD');
        const { data } = await axiosInstance.post<AuthUser>(`${basePath}/register`, { birthDate: dateStr, ...payload });
        return data;
    },
);

export const logout = createAsyncThunk<void, undefined, AsyncThunkConfig>(`${AUTH_SLICE_NAME}/LOGOUT`, async () => {
    await axiosInstance.post(`${basePath}/logout`);
});
