export type Gift = {
    id: number;
    image: string;
    price: number;
};

export type GiftsState = {
    list?: Gift[];
    selected?: Gift;
};
