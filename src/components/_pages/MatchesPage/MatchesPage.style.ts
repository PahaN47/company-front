import styled from 'styled-components';

import { BasePage } from '~/components/BasePage';
import { MatchesList } from '~/components/MatchesList';

export const BasePageStyled = styled(BasePage)`
    align-items: flex-start;
    padding-top: 22px;
`;

export const MatchesListStyled = styled(MatchesList)`
    width: 35%;
    min-width: 400px;
    max-width: 600px;
`;
