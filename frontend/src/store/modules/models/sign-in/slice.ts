import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE, SLICE_NAME } from "./constansts";
import axios from "../../../../axios";
import { UserDataRequest } from "./types";
import { UserDataResponse } from "./types";

export const fetchSignIn = createAsyncThunk(
	'auth/fetchLogin', 
    async (data: UserDataRequest) => {
        const response = await axios.post<UserDataResponse>("api/login", data)
		console.log(response);
		
        return response.data
})

const signInSlice = createSlice({
	name: SLICE_NAME,
	initialState: INITIAL_STATE,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchSignIn.pending, (state) => {
			state = INITIAL_STATE
		});
		builder.addCase(fetchSignIn.fulfilled, (state, action) => {
			state.user = action.payload.user
			state.accessToken = action.payload.accessToken
			state.refreshToken = action.payload.refreshToken
		});
		builder.addCase(fetchSignIn.rejected, (state) => {
			state = INITIAL_STATE
		});
	}
});

export const signInActions = signInSlice.actions;
export const signInReducer = signInSlice.reducer;
