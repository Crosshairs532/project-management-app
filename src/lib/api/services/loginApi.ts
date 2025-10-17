import { baseApi } from "../baseApi";

const loginApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (email: string) => {
        console.log(email);
        return {
          url: "/auth",
          method: "POST",
          body: email,
        };
      },
      onQueryStarted(arg, kwargs) {
        console.log(arg);
      },
    }),
  }),
  overrideExisting: false,
});
export const { useLoginMutation } = loginApi;
