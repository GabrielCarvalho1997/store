export type AuthResponse = {
    token: string;
}

export type TokenData = {
    sub: string;
    name: string;
    iat: number;
}

export type LoginData = {
    username: string;
    password: string;
}