import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';

import { accept, create, getIncoming, getOutgoing, reject } from './actions';
import { MATCHES_SLICE_NAME } from './const';
import { MatchesState } from './types';

const initialState: MatchesState = {
    incoming: undefined,
    outgoing: undefined,
    doUpdateIncoming: true,
    doUpdateOutgoing: true,
};

export const matchesSlice = createSlice({
    name: MATCHES_SLICE_NAME,
    initialState,
    reducers: {
        setDoUpdateIncoming: (state, { payload }: PayloadAction<boolean>) => {
            state.doUpdateIncoming = payload;
        },
        setDoUpdateOutgoing: (state, { payload }: PayloadAction<boolean>) => {
            state.doUpdateOutgoing = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getIncoming.fulfilled, (state, { payload }) => {
            state.incoming = payload;
            state.doUpdateIncoming = false;
        });
        builder.addCase(getOutgoing.fulfilled, (state, { payload }) => {
            state.incoming = payload;
            state.doUpdateOutgoing = false;
        });
        builder.addCase(create.fulfilled, (state, { payload }) => {
            state.outgoing = [payload, ...(state.outgoing ?? [])];
        });
        builder.addMatcher(isAnyOf(accept.fulfilled, reject.fulfilled), (state, { payload }) => {
            state.incoming = state.incoming?.filter((match) => match.id !== payload.id);
        });
    },
});

export const MatchesExtraAction = matchesSlice.actions;
export default matchesSlice.reducer;
