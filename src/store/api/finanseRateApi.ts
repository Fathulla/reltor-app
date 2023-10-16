import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
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
    useGetFinanceRateQuery,
  } = financeRateApi