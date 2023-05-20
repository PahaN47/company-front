import React, { useEffect } from 'react';

import { BasePageStyled, MatchesListStyled } from './MatchesPage.style';

import { Color } from '~/const';
import { useAppDispatch, useAppSelector } from '~/store';
import { MatchesAction, MatchesExtraAction } from '~/store/matches';

export const MatchesPage = () => {
    const dispatch = useAppDispatch();
    const { incoming, outgoing, doUpdateIncoming, doUpdateOutgoing } = useAppSelector((state) => state.matches);

    useEffect(() => {
        if (!incoming && doUpdateIncoming) {
            void dispatch(MatchesAction.getIncoming());
        }
    }, [dispatch, doUpdateIncoming, incoming]);

    useEffect(() => {
        if (!outgoing && doUpdateOutgoing) {
            void dispatch(MatchesAction.getOutgoing());
        }
    }, [dispatch, doUpdateOutgoing, outgoing]);

    useEffect(
        () => () => {
            void dispatch(MatchesExtraAction.setDoUpdateIncoming(true));
            void dispatch(MatchesExtraAction.setDoUpdateOutgoing(true));
        },
        [dispatch],
    );

    return (
        <BasePageStyled background={Color.MAIN_LIGHT_FOCUS}>
            <MatchesListStyled incoming={incoming} outgoing={outgoing} />
        </BasePageStyled>
    );
};
