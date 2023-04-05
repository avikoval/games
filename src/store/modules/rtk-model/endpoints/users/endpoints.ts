import { api } from "../../api";

export const usersEndpoints = api.injectEndpoints({
    endpoints: builder => ({
        readUsers: builder.query({
            query: params => ({
                url: "/users",
                method: "GET",
                params,
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useLazyReadUsersQuery } = usersEndpoints;
