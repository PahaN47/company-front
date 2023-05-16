import React from 'react';
import { Button } from '@mui/material';

import {
    BasePageStyled,
    ContainerStyled,
    ImageStyled,
    SubtitleStyled,
    TextContainerStyled,
    TitleStyled,
} from './HomePage.style';

import { LogoImage } from '~/assets/img';
import { CustomLink } from '~/components/CustomLink';

export const HomePage = () => {
    return (
        <BasePageStyled>
            <ContainerStyled>
                <ImageStyled src={LogoImage.src} />
                <TextContainerStyled>
                    <TitleStyled>Сайт для поиска собеседников</TitleStyled>
                    <SubtitleStyled>
                        Здесь мы поможем вам обрести новые знакомства, найти интересных собеседников и новых друзей!
                    </SubtitleStyled>
                    <CustomLink href={'/login'}>
                        <Button variant="outlined" size="large">
                            Зарегистрироваться
                        </Button>
                    </CustomLink>
                </TextContainerStyled>
            </ContainerStyled>
        </BasePageStyled>
    );
};
