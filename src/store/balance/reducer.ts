import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';

import { add, getOwn, makePurchase } from './actions';
import { BALANCE_SLICE_NAME } from './const';
import { BalanceState } from './types';

const initialState: BalanceState = {
    own: undefined,
    doUpdateBalance: true,
    isPurchaseSuccessful: false,
};

export const balanceSlice = createSlice({
    name: BALANCE_SLICE_NAME,
    initialState,
    reducers: {
        resetBalance: (state) => {
            state.own = undefined;
        },
        setDoUpdateBalance: (state, { payload }: PayloadAction<boolean>) => {
            state.doUpdateBalance = payload;
        },
        setIsPurchaseSuccessful: (state, { payload }: PayloadAction<boolean>) => {
            state.isPurchaseSuccessful = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(makePurchase.fulfilled, (state) => {
            state.isPurchaseSuccessful = true;
        });
        builder.addMatcher(isAnyOf(getOwn.fulfilled, add.fulfilled), (state, { payload }) => {
            state.own = payload;
            state.doUpdateBalance = false;
        });
    },
});

export const BalanceExtraAction = balanceSlice.actions;

export default balanceSlice.reducer;
