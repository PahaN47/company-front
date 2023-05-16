import React, { memo } from 'react';

import { INDEX_DELAY } from './UserCard.const';
import { ContainerStyled, DecriptionStyled, ImageStyled } from './UserCard.style';
import { UserCardProps } from './UserCard.types';

import { useDelayedValue } from '~/hooks/useDelayedValue';

export const UserCard = memo(({ user, index = 0, maxIndex = 10, hiddenType }: UserCardProps) => {
    const delayedIndex = useDelayedValue(index, INDEX_DELAY);
    return (
        <ContainerStyled zIndex={maxIndex - delayedIndex} data-index={hiddenType ?? delayedIndex}>
            <ImageStyled src={user?.avatar} />
            <DecriptionStyled>{`${user?.firstName ?? 'unknown'}, ${user?.age ?? '??'}`}</DecriptionStyled>
        </ContainerStyled>
    );
});
