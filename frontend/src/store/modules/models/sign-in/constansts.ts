import { UserDataResponse } from "./types";

export const SLICE_NAME = "AUTHORIZATION";


export const INITIAL_STATE: UserDataResponse = {
    user: null,
	accessToken: "",
    refreshToken: "",
};
