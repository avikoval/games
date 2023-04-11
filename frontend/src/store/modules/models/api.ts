import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL, REDUCER_NAME } from "./constants";

export const api = createApi({
    reducerPath: REDUCER_NAME,
    baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
    keepUnusedDataFor: 0,
    endpoints: () => ({}),
});

// export const { reducer, middleware } = api;
