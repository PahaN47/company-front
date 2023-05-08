import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { cookieLogin, login, logout, register } from './actions';
import { AUTH_SLICE_NAME } from './const';
import { AuthState } from './types';

const initialState: AuthState = {
    user: undefined,
    doCookieLogin: true,
};

export const authSlice = createSlice({
    name: AUTH_SLICE_NAME,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            isAnyOf(cookieLogin.fulfilled, login.fulfilled, register.fulfilled),
            (state, { payload }) => {
                state.doCookieLogin = false;
                state.user = payload;
            },
        );
        builder.addCase(cookieLogin.rejected, (state) => {
            state.doCookieLogin = false;
        });
        builder.addCase(logout.fulfilled, (state) => {
            state.doCookieLogin = false;
            state.user = undefined;
        });
    },
});

export default authSlice.reducer;
