import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { get, getOwn, update } from './actions';
import { PROFILE_SLICE_NAME } from './const';
import { ProfileState } from './types';

const initialState: ProfileState = {
    own: undefined,
    other: undefined,
};

export const profileSlice = createSlice({
    name: PROFILE_SLICE_NAME,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(isAnyOf(getOwn.fulfilled, update.fulfilled), (state, { payload }) => {
            state.own = payload;
        });
        builder.addCase(get.fulfilled, (state, { payload }) => {
            state.other = payload;
        });
    },
});

export default profileSlice.reducer;
