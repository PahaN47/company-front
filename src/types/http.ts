export type PaginatedDataResponse<T> = {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
};

export type FetchStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected';
