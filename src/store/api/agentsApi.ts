import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { baseQuery } from '../../utils/baseQuery';

export const agentsApi = createApi({
  reducerPath: 'agentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseQuery }),
  endpoints: (builder) => ({
    getAgentsList: builder.query({
      query: () => '/agents/list'
    })
  })
});

export const {
    getAgentsList,
  } = agentsApi.endpoints;