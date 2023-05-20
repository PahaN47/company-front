import React, { useCallback, useMemo, useState } from 'react';
import { Button } from '@mui/material';

import { ButtonContainerStyled, ContainerStyled, ListContainerStyled } from './MatchesList.style';
import { MatchesListProps } from './MatchesList.types';

import { MatchItem } from '~/components/MatchItem';
import { MatchType } from '~/components/MatchItem/MatchItem.types';

export const MatchesList = ({ className, incoming, outgoing }: MatchesListProps) => {
    const [type, setType] = useState<MatchType>('incoming');

    const hanldeIncomingClick = useCallback(() => setType('incoming'), []);
    const handleOutgoingClick = useCallback(() => setType('outgoing'), []);

    const matchesList = useMemo(() => (type === 'incoming' ? incoming : outgoing), [incoming, outgoing, type]);

    return (
        <ContainerStyled className={className}>
            <ButtonContainerStyled>
                <Button
                    onClick={hanldeIncomingClick}
                    size="large"
                    variant={type === 'incoming' ? 'contained' : 'outlined'}
                >
                    Входящие
                </Button>
                <Button
                    onClick={handleOutgoingClick}
                    size="large"
                    variant={type === 'outgoing' ? 'contained' : 'outlined'}
                >
                    Исходящие
                </Button>
            </ButtonContainerStyled>
            <ListContainerStyled>
                {matchesList?.map((match) => (
                    <MatchItem key={match.id} match={match} type={type} />
                ))}
            </ListContainerStyled>
        </ContainerStyled>
    );
};
