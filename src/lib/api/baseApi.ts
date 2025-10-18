import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const CustomFetchBaseQuery = fetchBaseQuery({
  baseUrl: "https://api.bitechx.com",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: CustomFetchBaseQuery,
  tagTypes: ["products", "categories"],
  endpoints: () => ({}),
});
