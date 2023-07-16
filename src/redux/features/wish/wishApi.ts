import { ParamSerialization } from "@/lib/ParamsSerialization";
import { apiSlice } from "@/redux/api/apiSlice";

export const wishApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		//Get All book reviews
		getWishList: builder.query({
			query: (args: Record<string, unknown>) => {
				const query = args ? ParamSerialization(args) : "";
				return `/wish?${query}`;
			},
			providesTags: ["wishlist"],
		}),

		//   Add Book review
		addBookInWish: builder.mutation({
			query: (data) => ({
				url: `/wish`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["wishlist"],
		}),
	}),
});

export const { useGetWishListQuery, useAddBookInWishMutation } = wishApi;
