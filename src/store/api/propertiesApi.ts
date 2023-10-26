import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IData } from "../../pages/MainPage/MainPage";
import { baseQuery, xHost, xKey } from "../../utils/baseQuery";

interface IHomeSearch {
  results: IData[];
}

interface IForSaleResponse {
  home_search: IHomeSearch;
}

interface IDetailsResponse {
  home: any;
}

export const propertiesApi = createApi({
  reducerPath: "propertiesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseQuery,
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", xKey);
      headers.set("x-rapidapi-host", xHost);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getForSale: builder.query<IForSaleResponse, string>({
      //! Returning by 50 items
      query: (location = "santa monica") => ({
        url: "/forsale",
        params: {
          location,
        },
      }),
    }),
    getDetails: builder.query<IDetailsResponse, string>({
      //! Returning by 10 items
      query: (id) => ({
        url: "/property",
        params: {
          property_id: id,
        },
      }),
    }),
  }),
});

export const { useGetForSaleQuery, useGetDetailsQuery } = propertiesApi;
