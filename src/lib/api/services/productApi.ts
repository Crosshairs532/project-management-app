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
  }),
  overrideExisting: false,
});
export const { useGetAllProductsQuery, useTotalLengthQuery } = productApi;
