import { IUser } from "@/types/User";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// type
type IState = {
	isLoggedIn: boolean;
	user: IUser | undefined;
};

const initialState: IState = {
	isLoggedIn: false,
	user: undefined,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		userLoggedIn: (state, action: PayloadAction<IState>) => {
			state.isLoggedIn = action.payload.isLoggedIn;
			state.user = action.payload.user;
		},
		userLoggedOut: (state) => {
			state.isLoggedIn = false;
			state.user = undefined;
		},
	},
});

export default authSlice.reducer;
export const { userLoggedIn, userLoggedOut } = authSlice.actions;
