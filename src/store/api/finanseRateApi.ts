import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { baseQuery } from '../../utils/baseQuery';

export const financeRateApi = createApi({
  reducerPath: 'financeRateApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseQuery }),
  endpoints: (builder) => ({
    getFinanceRate: builder.query({
      query: () => '/finance/rates'
    })
  })
});

export const {
    getFinanceRate,
  } = financeRateApi.endpoints;