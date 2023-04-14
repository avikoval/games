export type UserType = {
	login: string;
	id: string;
}

export type UserDataResponse = {
    user: UserType | null;
	accessToken: string;
    refreshToken: string;
};

export type UserDataRequest = {
    login: string;
	password: string;
};
