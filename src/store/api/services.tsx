import { apiBaseSlices } from "./baseAPI";

export const ServicesApi = apiBaseSlices.injectEndpoints({
  endpoints: (builder) => ({
    getAddresses: builder.query({
      query: (token) => {
        return {
        //   headers: {
        //     Accept: "application/json",
        //     Authorization: `Bearer ${token}`,
        //   },
          url: "api/addresses?token=true",
        };
      },
    }),
  }),
});

export const {
  useGetAddressesQuery,
} = ServicesApi;