import { createAsyncThunk } from '@reduxjs/toolkit';

import { BALANCE_SLICE_NAME } from './const';
import { Balance, PurchasePayload } from './types';

import { axiosInstance } from '~/const';
import { AsyncThunkConfig } from '~/store';

const basePath = '/balance';
const purchaseBasePath = '/purchase';

export const getOwn = createAsyncThunk<Balance, undefined, AsyncThunkConfig>(
    `${BALANCE_SLICE_NAME}/GET_OWN`,
    async () => {
        const { data } = await axiosInstance.get<Balance>(`${basePath}`);
        return data;
    },
);

export const add = createAsyncThunk<Balance, number, AsyncThunkConfig>(`${BALANCE_SLICE_NAME}/ADD`, async (amount) => {
    const { data } = await axiosInstance.post<Balance>(`${basePath}/add`, { data: { amount } });
    return data;
});

export const makePurchase = createAsyncThunk<void, PurchasePayload, AsyncThunkConfig>(
    `${BALANCE_SLICE_NAME}/MAKE_PURCHASE`,
    async (payload) => {
        await axiosInstance.post(`${purchaseBasePath}`, { data: payload });
    },
);
