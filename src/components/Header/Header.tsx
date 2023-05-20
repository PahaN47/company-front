import React, { useCallback, useEffect } from 'react';
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
import { ProfileAction } from '~/store/profile';

export const Header = () => {
    const dispatch = useAppDispatch();

    const { id } = useAuth();
    const { own: profile } = useAppSelector((store) => store.profile);
    const { doCookieLogin } = useAppSelector((state) => state.auth);
    const isAuth = !!id;

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

    // remove this
    const handleLoginClick = useCallback(() => {
        void dispatch(AuthAction.login({ email: 'sas@sas.com', password: 'sas' }));
    }, [dispatch]);

    return (
        <HeaderStyled>
            {profile ? (
                <CustomAvatarStyled src={profile.avatar} href={PROFILE_PAGE_URL} />
            ) : (
                <CustomLink href={LOGIN_PAGE_URL}>
                    <ButtonStyled variant="contained" onClick={handleLoginClick}>
                        Войти
                    </ButtonStyled>
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
