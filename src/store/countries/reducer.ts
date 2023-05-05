import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getList } from './actions';
import { COUNTRIES_SLICE_NAME } from './const';
import { CountriesState, Country } from './types';

const initialState: CountriesState = {
    list: undefined,
    selected: undefined,
};

export const countriesSlice = createSlice({
    name: COUNTRIES_SLICE_NAME,
    initialState,
    reducers: {
        setSelected: (state, { payload }: PayloadAction<Country>) => {
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
    },
});

export const CountriesExtraAction = countriesSlice.actions;
export default countriesSlice.reducer;
