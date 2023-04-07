import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE, SLICE_NAME } from "./constansts";
import axios from "../../../../axios";
import { SignInFormValues } from "../../../../components/features/SingIn/types";

export const fetchAuthLodin = createAsyncThunk('auth/fetchAuth', 
    async (params: SignInFormValues) => {
        const { data } = await axios.post("/auth", params)
        return data
})

const authorizationSlice = createSlice({
	name: SLICE_NAME,
	initialState: INITIAL_STATE,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAuthLodin.pending, (state, action) => {
			state.accessToken = action.payload
		});
		builder.addCase(fetchAuthLodin.fulfilled, (state, action) => {
			state.accessToken = action.payload.accessToken
		});
		builder.addCase(fetchAuthLodin.rejected, (state) => {
			state = INITIAL_STATE
		});
	}
});

export const authorizationActions = authorizationSlice.actions;
export const authorizationReducer = authorizationSlice.reducer;
