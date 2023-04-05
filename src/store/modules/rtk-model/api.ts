import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REDUCER_NAME } from "./constants";

export const api = createApi({
    reducerPath: REDUCER_NAME,
    baseQuery: fetchBaseQuery({baseUrl: "https://www.codewars.com/api/v1/users/"}),
    endpoints: (build) => ({
        getUser: build.query({
          query: () => 'avikoval',
        }),
      }),
});

export const { reducer, middleware } = api;
