import React, { useCallback, useEffect, useMemo } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';

import {
    AvatarBorderStyled,
    AvatarContainerStyled,
    AvatarInnerContainerStyled,
    AvatarStyled,
    BackButtonStyled,
    BasePageStyled,
    DetailContainerStyled,
    DetailStyled,
    EditButtonStyled,
    NameStyled,
    ProfileContainerStyled,
    TextContainerStyled,
} from './ProfilePage.style';

import { PROFILE_EDIT_PAGE_URL } from '~/const';
import { useAppDispatch, useAppSelector } from '~/store';
import { ProfileAction } from '~/store/profile';

export const ProfilePage = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const otherId = +(router.query['id'] ?? 0);
    const otherUser = useAppSelector((state) => state.profile.other);
    const ownUser = useAppSelector((state) => state.profile.own);

    const isOwn = !otherId;
    const user = useMemo(() => (isOwn ? ownUser : otherUser), [isOwn, otherUser, ownUser]);

    useEffect(() => {
        if (!isOwn) {
            void dispatch(ProfileAction.get(otherId));
        }
    }, [dispatch, isOwn, otherId]);

    const handleBackClick = useCallback(() => router.back(), [router]);
    const handleEditClick = useCallback(() => void router.push(PROFILE_EDIT_PAGE_URL), [router]);

    return (
        <BasePageStyled scrollable={false}>
            {isOwn ? (
                <EditButtonStyled onClick={handleEditClick} variant="contained" size="large">
                    Профиль
                </EditButtonStyled>
            ) : (
                <BackButtonStyled onClick={handleBackClick}>
                    <ChevronLeftIcon />
                </BackButtonStyled>
            )}
            <ProfileContainerStyled>
                <AvatarContainerStyled>
                    <AvatarInnerContainerStyled>
                        <AvatarStyled src={user?.avatar} />
                    </AvatarInnerContainerStyled>
                    <AvatarBorderStyled>
                        <circle cx="50%" cy="50%" r="48.125%" />
                        <circle cx="50%" cy="50%" r="50%" />
                        <circle cx="50%" cy="50%" r="50%" />
                    </AvatarBorderStyled>
                </AvatarContainerStyled>
                <TextContainerStyled>
                    <NameStyled>
                        {user?.firstName} {user?.lastName}
                    </NameStyled>
                    <DetailContainerStyled>
                        {user?.country?.name && <DetailStyled>{user?.country?.name}</DetailStyled>}
                        <DetailStyled>{dayjs(user?.birthDate).format('DD.MM.YYYY')}</DetailStyled>
                    </DetailContainerStyled>
                </TextContainerStyled>
            </ProfileContainerStyled>
        </BasePageStyled>
    );
};
