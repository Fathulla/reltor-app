import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
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
    getAutocomplete,
  } = autocompleteApi.endpoints;