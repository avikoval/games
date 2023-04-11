import { AuthorizationState } from "./types";

export const SLICE_NAME = "AUTHORIZATION";

export const INITIAL_STATE: AuthorizationState = {
    accessToken: null,
};
