export type AuthUser = {
    email: string;
    firstName: string;
    id: number;
    token: string;
};

export type LoginPayload = {
    email: string;
    password: string;
};

export type RegisterPayload = {
    birthDate: Date;
    email: string;
    firstName: string;
    password: string;
};

export type AuthState = {
    doCookieLogin: boolean;
    user?: AuthUser;
};
