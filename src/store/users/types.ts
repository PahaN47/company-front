import { Country } from '~/store/countries';
import { FetchStatus, Gender } from '~/types';

export type User = {
    age: number;
    avatar?: string;
    country?: string;
    firstName: string;
    gender?: Gender;
    id: number;
};

export type UserQuery = {
    country?: Country;
    gender?: Gender;
    max_age?: number;
    min_age?: number;
    page?: number;
};

export type UsersState = {
    currentPage: number;
    displayList: User[];
    fetchList?: User[];
    fetchStatus: FetchStatus;
    hasNextPage: boolean;
    hasPrevPage: boolean;
};
