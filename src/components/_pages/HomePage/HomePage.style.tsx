import styled from 'styled-components';

import { BasePage } from '~/components/BasePage';
import { textStyle } from '~/mixins';

export const BasePageStyled = styled(BasePage)`
    padding-bottom: calc(10 / 630 * 100%);
`;

export const ContainerStyled = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: calc(976 / 1280 * 100%);
`;

export const ImageStyled = styled.img`
    width: calc(405 / 976 * 100%);
    aspect-ratio: 405 / 408;
`;

export const TextContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    max-width: calc(439 / 976 * 100%);
    padding-top: 17px;
`;

export const TitleStyled = styled.div`
    ${textStyle('LARGEST')}
`;

export const SubtitleStyled = styled.div`
    ${textStyle('SMALL')}
    width: 100%;
    height: 144px;
    margin: 28px 0 43px;
`;
