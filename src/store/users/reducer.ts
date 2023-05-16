import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getList } from './actions';
import { USERS_SLICE_NAME } from './const';
import { User, UsersState } from './types';

const initialState: UsersState = {
    currentPage: 0,
    fetchList: undefined,
    fetchStatus: 'idle',
    hasNextPage: false,
    hasPrevPage: false,
    displayList: [],
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
            state.fetchList = undefined;
            state.fetchStatus = 'idle';
            state.displayList = [];
        },
        addToDisplayList: (state, { payload }: PayloadAction<User[]>) => {
            state.displayList.push(...payload);
        },
        popDisplayList: (state) => {
            state.displayList.shift();
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getList.pending, (state) => {
            state.fetchStatus = 'pending';
        });
        builder.addCase(getList.fulfilled, (state, { payload: { next, previous, results } }) => {
            state.fetchList = results;
            state.fetchStatus = 'fulfilled';
            state.hasNextPage = !!next;
            state.hasPrevPage = !!previous;
            state.currentPage += 1;
        });
        builder.addCase(getList.rejected, (state) => {
            state.fetchStatus = 'rejected';
        });
    },
});

export const UsersExtraAction = usersSlice.actions;
export default usersSlice.reducer;
