import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { baseQuery } from '../../utils/baseQuery';

export const mortgageApi = createApi({
  reducerPath: 'mortgageApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseQuery }),
  endpoints: (builder) => ({
    getMortgage: builder.query({
      query: () => '/'
    })
  })
});

export const {
    getMortgage,
  } = mortgageApi.endpoints;