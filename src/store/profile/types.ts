import { Country } from '~/store/countries';
import { Gift } from '~/store/gifts';

export type Profile = {
    avatar?: string;
    birthDate: Date;
    country?: Country;
    email: string;
    firstName: string;
    gender?: string;
    gifts: Gift[];
    id: number;
    lastName?: string;
    phone?: string;
    timezone?: number;
};

export type UpdateProfilePayload = Partial<Omit<Profile, 'id' | 'gifts'>> & { id: number };

export type ProfileState = {
    other?: Profile;
    own?: Profile;
};
