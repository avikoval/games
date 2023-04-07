export type AuthorizationState = {
    accessToken?: string;
    scope: string[];
};

export type ResponseDataAuth = {
    status: number,
    message: string,
    accessToken: string,
    user: string
};
