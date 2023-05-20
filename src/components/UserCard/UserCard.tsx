import React, { memo } from 'react';

import { INDEX_DELAY } from './UserCard.const';
import { ContainerStyled, DecriptionStyled, ImageStyled, ProfileLinkStyled } from './UserCard.style';
import { UserCardProps } from './UserCard.types';

import { PROFILE_PAGE_URL } from '~/const';
import { useDelayedValue } from '~/hooks/useDelayedValue';

export const UserCard = memo(({ user, index = 0, maxIndex = 10, hiddenType }: UserCardProps) => {
    const delayedIndex = useDelayedValue(index, INDEX_DELAY);
    return (
        <ContainerStyled zIndex={maxIndex - delayedIndex} data-index={hiddenType ?? delayedIndex}>
            <ImageStyled src={user?.avatar} />
            <DecriptionStyled>{`${user?.firstName ?? 'unknown'}, ${user?.age ?? '??'}`}</DecriptionStyled>
            {user && <ProfileLinkStyled href={`${PROFILE_PAGE_URL}?id=${user.id}`} />}
        </ContainerStyled>
    );
});
