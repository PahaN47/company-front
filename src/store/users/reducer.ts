import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getList } from './actions';
import { USERS_SLICE_NAME } from './const';
import { UsersState } from './types';

const initialState: UsersState = {
    currentPage: 0,
    list: undefined,
    hasNextPage: false,
    hasPrevPage: false,
};

export const usersSlice = createSlice({
    name: USERS_SLICE_NAME,
    initialState,
    reducers: {
        setCurrentPage: (state, { payload }: PayloadAction<number>) => {
            state.currentPage = payload;
        },
        resetList: (state) => {
            state.hasNextPage = false;
            state.hasPrevPage = false;
            state.currentPage = 0;
            state.list = undefined;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getList.fulfilled, (state, { payload: { next, previous, results } }) => {
            state.list = results;
            state.hasNextPage = !!next;
            state.hasPrevPage = !!previous;
            state.currentPage += 1;
        });
    },
});

export const UsersExtraAction = usersSlice.actions;
export default usersSlice.reducer;
