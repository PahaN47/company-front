import styled from 'styled-components';

import { BasePage } from '~/components/BasePage';
import { ChatHeader } from '~/components/ChatHeader';
import { ChatInput } from '~/components/ChatInput';
import { customScrollBar } from '~/mixins';

export const BasePageStyled = styled(BasePage)`
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
`;

export const ChatHeaderStyled = styled(ChatHeader)`
    height: 74px;
`;

export const ChatInputStyled = styled(ChatInput)`
    height: 86px;
`;

export const MessagesContainerStyled = styled.div`
    ${customScrollBar()}
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: stretch;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 12px 40px 0;

    & > div:first-child {
        margin-top: auto;
    }
`;

export const BottomAnchorStyled = styled.div`
    min-height: 12px;
`;
