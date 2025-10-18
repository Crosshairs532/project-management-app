import { baseApi } from "../baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: (param) => {
        const params = new URLSearchParams(param);
        console.log(params);
        return {
          url: `/products?${params?.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["products"],
    }),
    totalLengthProduct: build.query({
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

        console.log(params.toString());

        return {
          url: `/products/search?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["products"],
    }),
    singleProduct: build.query({
      query: ({ productname }) => {
        const decoded = decodeURIComponent(productname).replace(/\+/g, " ");
        console.log(decoded);
        return {
          url: `/products/${decoded}`,
          method: "GET",
        };
      },
      providesTags: ["products"],
    }),
    updateProduct: build.mutation({
      query: (data) => {
        const { id, ...other } = data;
        return {
          url: `/products/${id}`,
          method: "PUT",
          body: other,
        };
      },
      invalidatesTags: ["products"],
    }),
    deleteProduct: build.mutation({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["products"],
    }),
    addProduct: build.mutation({
      query: (data) => {
        return {
          url: `/products`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["products"],
    }),
  }),
  overrideExisting: false,
});
export const {
  useGetAllProductsQuery,
  useTotalLengthProductQuery,
  useSearchProductsQuery,
  useSingleProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useAddProductMutation,
} = productApi;
