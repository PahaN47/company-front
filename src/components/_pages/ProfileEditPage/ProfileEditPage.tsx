import React, { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';

import { BasePageStyled, ProfileEditFormStyled } from './ProfileEditPage.style';

import { ProfileEditFormValues } from '~/components/ProfileEditForm/ProfileEditForm.types';
import { Color, HOME_PAGE_URL } from '~/const';
import { useAppDispatch, useAppSelector } from '~/store';
import { AuthAction } from '~/store/auth';
import { ProfileAction } from '~/store/profile';
import { getChangedValues } from '~/utils';

export const ProfileEditPage = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const profile = useAppSelector((state) => state.profile.own);

    const initialValues = useMemo<ProfileEditFormValues | undefined>(() => {
        if (!profile) {
            return undefined;
        }
        const { id: _, gifts: __, country, ...rest } = profile;

        return {
            country: country?.id,
            ...rest,
        };
    }, [profile]);

    const handleLogout = useCallback(() => {
        void dispatch(AuthAction.logout()).then(() => router.push(HOME_PAGE_URL));
    }, [dispatch, router]);

    const handleSubmit = useCallback(
        (data: ProfileEditFormValues) => {
            if (profile?.id) {
                void dispatch(ProfileAction.update({ id: profile.id, ...getChangedValues(data, initialValues) }));
            }
        },
        [dispatch, initialValues, profile?.id],
    );

    return (
        <BasePageStyled background={Color.MAIN_LIGHT_FOCUS}>
            {initialValues && (
                <ProfileEditFormStyled initialValues={initialValues} onLogout={handleLogout} onSubmit={handleSubmit} />
            )}
        </BasePageStyled>
    );
};
