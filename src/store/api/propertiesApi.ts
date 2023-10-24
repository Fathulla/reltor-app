import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQuery, xHost, xKey } from '../../utils/baseQuery';

interface IForSalePayload {
    property_id: string
    limit: number
    location: string
    type: 'single_family'
}


interface IForSaleResponse extends IForSalePayload { }

interface IDetailsPayload {
    property_id: string
}

interface IDetailsResponse extends IDetailsPayload { }

export const propertiesApi = createApi({
    reducerPath: 'propertiesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseQuery, prepareHeaders: (headers) => {
            headers.set("x-rapidapi-key", xKey)
            headers.set("x-rapidapi-host", xHost)
            return headers
        }
    }),
    endpoints: (builder) => ({
        getForSale: builder.query<IForSaleResponse, IForSalePayload>({
            //! Returning by 50 items
            query: ({ property_id, limit, location, type }) => ({
                url: '/forsale',
                params: {
                    property_id,
                    limit,
                    location,
                    type,
                }
            })
        }),
        getDetails: builder.query<IDetailsResponse, IDetailsPayload>({
            //! Returning by 10 items
            query: ({ property_id }) => ({
                url: '/property',
                params: {
                    property_id,
                }
            })
        })
    })
})

export const {
    useGetForSaleQuery,
    useGetDetailsQuery,
} = propertiesApi;
