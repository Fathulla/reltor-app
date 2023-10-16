import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../utils/baseQuery';

export const autocompleteApi = createApi({
  reducerPath: 'autocompleteApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseQuery }),
  endpoints: (builder) => ({
    getAutocomplete: builder.query({
      query: () => '/locations/auto-complete'
    })
  })
});

export const {
    useGetAutocompleteQuery,
  } = autocompleteApi