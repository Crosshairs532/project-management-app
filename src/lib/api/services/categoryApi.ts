import { baseApi } from "../baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCategory: build.query({
      query: (param) => {
        const params = new URLSearchParams(param);

        return {
          url: `/categories?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["categories"],
    }),
    totalLength: build.query({
      query: () => {
        return {
          url: `/categories`,
          method: "GET",
        };
      },
      transformResponse(response, meta, arg) {
        return { totalLength: response?.length };
      },
      providesTags: ["categories"],
    }),
    searchCategory: build.query({
      query: ({ searchedText, offset = 0, limit = 10 }) => {
        const params = new URLSearchParams();
        if (searchedText) params.set("searchedText", searchedText);
        params.set("offset", offset.toString());
        params.set("limit", limit.toString());

        return {
          url: `/products/search?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["products"],
    }),
  }),
  overrideExisting: false,
});
export const {
  useGetAllCategoryQuery,
  useTotalLengthQuery,
  useSearchCategoryQuery,
} = categoryApi;
