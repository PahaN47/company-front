import React, { useEffect } from 'react';
import { Button } from '@mui/material';

import { ButtonStyled, CustomAvatarStyled, HeaderStyled } from './Header.style';

import { CustomLink } from '~/components/CustomLink';
import {
    CHATS_PAGE_URL,
    HOME_PAGE_URL,
    LOGIN_PAGE_URL,
    PROFILE_PAGE_URL,
    REGISTER_PAGE_URL,
    SEARCH_PAGE_URL,
} from '~/const';
import { useAuth } from '~/hooks/useAuth';
import { useAppDispatch, useAppSelector } from '~/store';
import { AuthAction } from '~/store/auth';
import { ChatsAction } from '~/store/chats';
import { CountriesAction } from '~/store/countries';
import { ProfileAction } from '~/store/profile';

export const Header = () => {
    const dispatch = useAppDispatch();

    const { id } = useAuth();
    const { own: profile } = useAppSelector((store) => store.profile);
    const { doCookieLogin } = useAppSelector((state) => state.auth);
    const { needUpdateChats } = useAppSelector((state) => state.chats);
    const isAuth = !!id;

    const countriesList = useAppSelector((state) => state.countries.list);

    useEffect(() => {
        if (!id && doCookieLogin) {
            void dispatch(AuthAction.cookieLogin());
        }
    }, [dispatch, doCookieLogin, id]);

    useEffect(() => {
        if (id) {
            void dispatch(ProfileAction.getOwn(id));
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (!countriesList) {
            void dispatch(CountriesAction.getList());
        }
    }, [countriesList, dispatch]);

    useEffect(() => {
        if (id && needUpdateChats) {
            void dispatch(ChatsAction.getOwn());
        }
    }, [dispatch, id, needUpdateChats]);

    return (
        <HeaderStyled>
            {profile ? (
                <CustomAvatarStyled src={profile.avatar} href={PROFILE_PAGE_URL} />
            ) : (
                <CustomLink href={LOGIN_PAGE_URL}>
                    <ButtonStyled variant="contained">Войти</ButtonStyled>
                </CustomLink>
            )}
            <CustomLink href={isAuth ? CHATS_PAGE_URL : REGISTER_PAGE_URL}>
                <Button>Чаты</Button>
            </CustomLink>
            <CustomLink href={isAuth ? HOME_PAGE_URL : REGISTER_PAGE_URL}>
                <Button>Домашняя</Button>
            </CustomLink>
            <CustomLink href={isAuth ? SEARCH_PAGE_URL : REGISTER_PAGE_URL}>
                <Button>Поиск</Button>
            </CustomLink>
        </HeaderStyled>
    );
};
