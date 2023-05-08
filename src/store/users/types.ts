import { Country } from '~/store/countries';

export type User = {
    age: number;
    avatar?: string;
    country?: string;
    firstName: string;
    gender?: string;
    id: number;
};

export type UserQuery = {
    country?: Country;
    gender?: string;
    max_age?: number;
    min_age?: number;
    page?: number;
};

export type UsersState = {
    currentPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    list?: User[];
};
