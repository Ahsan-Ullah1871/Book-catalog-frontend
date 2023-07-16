import { ParamSerialization } from "@/lib/ParamsSerialization";
import { apiSlice } from "@/redux/api/apiSlice";
import { IBook } from "@/types/Book";

export const bookApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		//Get All books
		getBooks: builder.query({
			query: (args: Record<string, unknown>) => {
				const query = args ? ParamSerialization(args) : "";
				return `/books?${query}`;
			},
		}),

		//Get All Filtering Items
		getUniqueFilteringItems: builder.query({
			query: () => "/books/unique-filter-items",
			providesTags: ["filteringItems"],
		}),

		// Add Book
		addBook: builder.mutation({
			query: (data: IBook) => ({
				url: `/books`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["filteringItems"],

			// async onQueryStarted(arg, { queryFulfilled, dispatch }) {
			// 	try {
			// 		const { data: new_book } =
			// 			(await queryFulfilled) as {
			// 				data: IBook;
			// 			};

			// 		if (new_book?._id) {
			// 			//Cash updating in  Pessimistic  way
			// 			dispatch(
			// 				BookApi.util.updateQueryData(
			// 					"getBooks",
			// 					undefined,
			// 					(draft) => {
			// 						draft.push(
			// 							new_book
			// 						);
			// 					}
			// 				)
			// 			);
			// 		}
			// 	} catch (error) {
			// 		//
			// 	}
			// },
		}),
	}),
});

export const {
	useGetBooksQuery,
	useAddBookMutation,
	useGetUniqueFilteringItemsQuery,
} = bookApi;
