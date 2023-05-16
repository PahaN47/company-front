import { createAsyncThunk } from '@reduxjs/toolkit';

import { COUNTRIES_SLICE_NAME } from './const';
import { Country } from './types';

import { axiosInstance } from '~/const';
import { AsyncThunkConfig } from '~/store';

const basePath = 'countries';

export const getList = createAsyncThunk<Country[], undefined, AsyncThunkConfig>(
    `${COUNTRIES_SLICE_NAME}/GET_LIST`,
    async () => {
        const { data } = await axiosInstance.get<Country[]>(`${basePath}`);
        return data;
    },
);
