import React, { memo, useCallback, useMemo } from 'react';

import {
    ButtonContainerStyled,
    ContainerStyled,
    CustomAvatarStyled,
    FancyButtonStyled,
    NameContainerStyled,
    ProfileLinkStyled,
} from './MatchItem.style';
import { MatchItemProps } from './MatchItem.types';

import { PROFILE_PAGE_URL } from '~/const';
import { useAppDispatch } from '~/store';
import { ChatsExtraAction } from '~/store/chats';
import { MatchesAction } from '~/store/matches';

export const MatchItem = memo(({ match, type }: MatchItemProps) => {
    const dispatch = useAppDispatch();

    const { id, avatar, firstName, lastName } = useMemo(
        () => (type === 'incoming' ? match.initiator : match.reciever),
        [match.initiator, match.reciever, type],
    );

    const fullName = `${lastName ? lastName + ' ' : ''}${firstName}`;

    const handleAcceptClick = useCallback(() => {
        void dispatch(MatchesAction.accept(match.id)).then(() => dispatch(ChatsExtraAction.setNeedUpdateChats()));
    }, [dispatch, match.id]);
    const handleRejectClick = useCallback(() => void dispatch(MatchesAction.reject(match.id)), [dispatch, match.id]);

    return (
        <ContainerStyled>
            <ProfileLinkStyled href={`${PROFILE_PAGE_URL}?id=${id}`}>
                <CustomAvatarStyled src={avatar} />
                <NameContainerStyled>{fullName}</NameContainerStyled>
            </ProfileLinkStyled>
            {type === 'incoming' && (
                <ButtonContainerStyled>
                    <FancyButtonStyled onClick={handleAcceptClick} />
                    <FancyButtonStyled onClick={handleRejectClick} buttonType="cross" />
                </ButtonContainerStyled>
            )}
        </ContainerStyled>
    );
});
