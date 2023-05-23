import styled from 'styled-components';

import { BasePage } from '~/components/BasePage';
import { ChatsList } from '~/components/ChatsList';

export const BasePageStyled = styled(BasePage)`
    align-items: flex-start;
    padding-top: 20px;
`;

export const ChatListStyled = styled(ChatsList)`
    width: 35%;
    min-width: 400px;
    max-width: 600px;
`;
