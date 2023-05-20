import React, { useCallback, useEffect, useRef, useState } from 'react';
import MailIcon from '@mui/icons-material/Mail';

import { STACK_ANIMATION_DELAY, STACK_ANIMATION_LENGTH } from './SearchPage.const';
import { BasePageStyled, CustomLinkStyled, FancyButtonStyled, HeaderStyled } from './SearchPage.style';

import { UserStack } from '~/components/UserStack';
import { MATCHES_PAGE_URL } from '~/const';
import { useAuth } from '~/hooks/useAuth';
import { useUserList } from '~/hooks/useUserList';
import { useAppDispatch } from '~/store';
import { MatchesAction } from '~/store/matches';

export const SearchPage = () => {
    const dispatch = useAppDispatch();

    const acceptTimer = useRef<NodeJS.Timeout>();
    const rejectTimer = useRef<NodeJS.Timeout>();
    const [showAccept, setShowAccept] = useState(false);
    const [showReject, setShowReject] = useState(false);
    const disableButtons = showAccept || showReject;

    const { userList, popUser } = useUserList();
    const { id } = useAuth();
    const currentUser = userList[0];

    const handleAcceptClick = useCallback(() => {
        setShowAccept(true);
        clearTimeout(acceptTimer.current);
        acceptTimer.current = setTimeout(() => {
            setShowAccept(false);
            popUser();
            if (id && currentUser?.id) {
                void dispatch(MatchesAction.create({ initiator: id, reciever: currentUser.id }));
            }
        }, STACK_ANIMATION_LENGTH);
    }, [currentUser?.id, dispatch, id, popUser]);

    const handleRejectClick = useCallback(() => {
        setShowReject(true);
        clearTimeout(rejectTimer.current);
        rejectTimer.current = setTimeout(() => {
            setShowReject(false);
            popUser();
        }, STACK_ANIMATION_LENGTH);
    }, [popUser]);

    useEffect(
        () => () => {
            clearTimeout(acceptTimer.current);
            clearTimeout(rejectTimer.current);
        },
        [],
    );

    return (
        <BasePageStyled scrollable={false}>
            <HeaderStyled>
                <CustomLinkStyled href={MATCHES_PAGE_URL}>
                    <MailIcon />
                </CustomLinkStyled>
            </HeaderStyled>
            <FancyButtonStyled onClick={handleRejectClick} buttonType="cross" disabled={disableButtons} />
            <UserStack
                users={userList}
                showAccept={showAccept}
                showReject={showReject}
                animationLength={STACK_ANIMATION_LENGTH}
                animationDelay={STACK_ANIMATION_DELAY}
            />
            <FancyButtonStyled onClick={handleAcceptClick} disabled={disableButtons} />
        </BasePageStyled>
    );
};
