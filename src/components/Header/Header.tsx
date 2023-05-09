import React, { useEffect } from 'react';
import { Button } from '@mui/material';

import { ButtonStyled, HeaderStyled } from './Header.style';

import { CustomAvatar } from '~/components/CustomAvatar';
import { CustomLink } from '~/components/CustomLink';
import { useAppDispatch, useAppSelector } from '~/store';
import { ProfileAction } from '~/store/profile';

export const Header = () => {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((store) => store.auth);
    const { own: profile } = useAppSelector((store) => store.profile);
    const isAuth = !!user;

    useEffect(() => {
        if (user?.id) {
            void dispatch(ProfileAction.getOwn(user.id));
        }
    }, [dispatch, user?.id]);

    return (
        <HeaderStyled>
            {profile ? (
                <CustomAvatar src={profile.avatar} href="/profile" />
            ) : (
                <ButtonStyled variant="contained" href="/login">
                    Войти
                </ButtonStyled>
            )}
            <CustomLink href={isAuth ? '/chats' : '/login'}>
                <Button>Чаты</Button>
            </CustomLink>
            <CustomLink href={isAuth ? '/' : '/login'}>
                <Button>Домашняя</Button>
            </CustomLink>
            <CustomLink href={isAuth ? '/search' : '/login'}>
                <Button>Поиск</Button>
            </CustomLink>
        </HeaderStyled>
    );
};
