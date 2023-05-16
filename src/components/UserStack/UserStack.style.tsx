import styled, { css } from 'styled-components';

import { UserStackProps } from './UserStack.types';

import { ContainerStyled as UserCard } from '~/components/UserCard/UserCard.style';

type UserStackContainerProps = Pick<UserStackProps, 'animationLength' | 'animationDelay'>;

export const ContainerStyled = styled.div<UserStackContainerProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 400px;
    aspect-ratio: 400 / 540;

    ${UserCard} {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        width: 400px;

        ${({ animationLength = 500, animationDelay }) => css`
            transition: top ${animationLength}ms, left ${animationLength}ms, right ${animationLength}ms,
                transform ${animationLength}ms, box-shadow ${animationLength}ms;
            transition-delay: ${animationDelay}ms;
        `}

        &[data-index='0'] {
            top: 40px;
        }

        &[data-index='1'] {
            top: 20px;
        }

        &:not([data-index='0']):not([data-index='1']):not([data-index='2']):not([data-index='accepted']):not(
                [data-index='rejected']
            ) {
            box-shadow: none;
        }

        &[data-index='accepted'] {
            top: 100vh;
            transform: rotate(60deg);
            right: auto;
            left: 100vw;
        }

        &[data-index='rejected'] {
            top: 100vh;
            transform: rotate(-60deg);
            right: 100vw;
            left: auto;
        }
    }
`;
