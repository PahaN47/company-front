import React, { useCallback, useMemo } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useRouter } from 'next/router';

import {
    AvatarStyled,
    BackButtonStyled,
    ContainerStyled,
    CustomLinkStyled,
    NameContainerStyled,
    ProfileContainerStyled,
} from './ChatHeader.style';
import { ChatHeaderProps } from './ChatHeader.types';

import { PROFILE_PAGE_URL } from '~/const';

export const ChatHeader = ({ className, user }: ChatHeaderProps) => {
    const router = useRouter();

    const { id, firstName, lastName, avatar } = useMemo(
        () =>
            user ?? {
                id: undefined,
                firstName: undefined,
                lastName: undefined,
                avatar: undefined,
            },
        [user],
    );

    const fullName = `${lastName ? lastName + ' ' : ''}${firstName ?? ''}`;

    const handleBackClick = useCallback(() => void router.back(), [router]);

    return (
        <ContainerStyled className={className}>
            <BackButtonStyled onClick={handleBackClick}>
                <ChevronLeftIcon />
            </BackButtonStyled>
            <ProfileContainerStyled>
                <AvatarStyled src={avatar} />
                <NameContainerStyled>{fullName}</NameContainerStyled>
                {id && <CustomLinkStyled href={`${PROFILE_PAGE_URL}?id=${id}`} />}
            </ProfileContainerStyled>
        </ContainerStyled>
    );
};
