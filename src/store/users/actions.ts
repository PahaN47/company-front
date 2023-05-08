import { createAsyncThunk } from '@reduxjs/toolkit';

import { USERS_SLICE_NAME } from './const';
import { User, UserQuery } from './types';

import { axiosInstance } from '~/const';
import { AsyncThunkConfig } from '~/store';
import { PaginatedDataResponse } from '~/types';

const basePath = '/users';

export const getList = createAsyncThunk<PaginatedDataResponse<User>, UserQuery, AsyncThunkConfig>(
    `${USERS_SLICE_NAME}/GET_LIST`,
    async (payload) => {
        const { data } = await axiosInstance.get<PaginatedDataResponse<User>>(`${basePath}`, { params: payload });
        return data;
    },
);
