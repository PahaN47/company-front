import React, { memo } from 'react';

import { ContainerStyled } from './UserStack.style';
import { UserStackProps } from './UserStack.types';

import { UserCard } from '~/components/UserCard';
import { UserCardHiddenType } from '~/components/UserCard/UserCard.types';

export const UserStack = memo(
    ({ users, maxStackLength = 10, showAccept, showReject, animationLength, animationDelay }: UserStackProps) => {
        return (
            <ContainerStyled animationLength={animationLength} animationDelay={animationDelay}>
                {users?.map((user, index) => {
                    let displayIndex = index;
                    if (showAccept || showReject) {
                        displayIndex -= 1;
                    }
                    let hiddenType: UserCardHiddenType | undefined = undefined;
                    if (index === 0) {
                        hiddenType = showAccept ? 'accepted' : showReject ? 'rejected' : undefined;
                    }
                    return (
                        <UserCard
                            key={user?.id}
                            user={user}
                            index={displayIndex}
                            maxIndex={maxStackLength}
                            hiddenType={hiddenType}
                        />
                    );
                })}
            </ContainerStyled>
        );
    },
);
