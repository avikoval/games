import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { REDUCER_NAME } from "./constansts";
import { ReadUserResponse } from "./types";

export const codewarsAPI = createApi({
    reducerPath: REDUCER_NAME,
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001/"}),
    endpoints: (builder) => ({
		getUser: builder.query<ReadUserResponse, string>({
			query: () => ({
				url: "/"
			}),
		}),
	}),
});

export const { useGetUserQuery } = codewarsAPI