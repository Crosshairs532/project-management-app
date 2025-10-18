import { baseApi } from "../baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCategory: build.query({
      query: (param) => {
        return {
          url: `https://api.bitechx.com/categories`,
          method: "GET",
        };
      },
      providesTags: ["categories"],
    }),
  }),
  overrideExisting: false,
});
export const { useGetAllCategoryQuery } = categoryApi;
