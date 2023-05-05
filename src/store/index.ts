import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import authReducer from './auth/reducer';
import balanceReducer from './balance/reducer';
import chatsReducer from './chats/reducer';
import countriesReducer from './countries/reducer';
import giftsReducer from './gifts/reducer';
import matchesReducer from './matches/reducer';
import profileReducer from './profile/reducer';
import usersReducer from './users/reducer';

export const makeStore = () => {
    const store = configureStore({
        reducer: {
            auth: authReducer,
            balance: balanceReducer,
            chats: chatsReducer,
            countries: countriesReducer,
            gifts: giftsReducer,
            matches: matchesReducer,
            profile: profileReducer,
            users: usersReducer,
        },
    });

    return store;
};

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export type AsyncThunkConfig = {
    dispatch: AppDispatch;
    state: RootState;
};

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
