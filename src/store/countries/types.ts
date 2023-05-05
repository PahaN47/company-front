export type Country = {
    id: number;
    name: string;
};

export type CountriesState = {
    list?: Country[];
    selected?: Country;
};
