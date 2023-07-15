import { configureStore } from "@reduxjs/toolkit";
import { ApiSlice } from "./api/apiSlice";
import authReducer from "./features/auth/authSlice";

const store = configureStore({
	reducer: {
		[ApiSlice.reducerPath]: ApiSlice.reducer,
		auth: authReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(ApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

