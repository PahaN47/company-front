import styled from 'styled-components';

import { BasePage } from '~/components/BasePage';
import { ProfileEditForm } from '~/components/ProfileEditForm';

export const BasePageStyled = styled(BasePage)`
    align-items: flex-start;
    padding-top: 120px;
`;

export const ProfileEditFormStyled = styled(ProfileEditForm)`
    width: 40%;
    min-width: 400px;
    max-width: 700px;
`;
