import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getList, getOne } from './actions';
import { GIFTS_SLICE_NAME } from './const';
import { Gift, GiftsState } from './types';

const initialState: GiftsState = {
    list: undefined,
    selected: undefined,
};

export const giftsSlice = createSlice({
    name: GIFTS_SLICE_NAME,
    initialState,
    reducers: {
        setSelected: (state, { payload }: PayloadAction<Gift>) => {
            state.selected = payload;
        },
        resetSelected: (state) => {
            state.selected = undefined;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getList.fulfilled, (state, { payload }) => {
            state.list = payload;
        });
        builder.addCase(getOne.fulfilled, (state, { payload }) => {
            state.selected = payload;
        });
    },
});

export const GiftsExtraAction = giftsSlice.actions;
export default giftsSlice.reducer;
