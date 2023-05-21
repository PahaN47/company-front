import { Country } from '~/store/countries';
import { Gift } from '~/store/gifts';
import { Gender } from '~/types';

export type Profile = {
    avatar?: string;
    birthDate: string;
    country?: Country;
    email: string;
    firstName: string;
    gender?: Gender;
    gifts: Gift[];
    id: number;
    lastName?: string;
    phone?: string;
    timezone?: number;
};

export type UpdateProfilePayload = Partial<Omit<Profile, 'id' | 'gifts' | 'country'>> & {
    country?: number;
    id: number;
};

export type ProfileState = {
    other?: Profile;
    own?: Profile;
};
