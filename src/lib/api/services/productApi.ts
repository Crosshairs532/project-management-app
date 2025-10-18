import { baseApi } from "../baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: (param) => {
        const params = new URLSearchParams(param);

        return {
          url: `/products?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["products"],
    }),
    totalLength: build.query({
      query: () => {
        return {
          url: `/products`,
          method: "GET",
        };
      },
      transformResponse(response, meta, arg) {
        return { totalLength: response?.length };
      },
      providesTags: ["products"],
    }),
    searchProducts: build.query({
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
  useGetAllProductsQuery,
  useTotalLengthQuery,
  useSearchProductsQuery,
} = productApi;
