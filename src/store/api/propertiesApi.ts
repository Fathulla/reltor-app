import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../utils/baseQuery';

interface IForRentPayload {
    location: string;
}

interface IForRentResponse extends IForRentPayload { }

interface IDetailsPayload {
    property_id: string
}

interface IDetailsResponse extends IDetailsPayload { }

export const propertiesApi = createApi({
    reducerPath: 'propertiesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseQuery, prepareHeaders: (headers) => {
            headers.set("x-rapidapi-key", "63abcb1692msha43e850706d9ebdp137627jsn34dd3129aecb")
            headers.set("x-rapidapi-host", "realtor16.p.rapidapi.com")
            return headers
        }
    }),
    endpoints: (builder) => ({
        getForSale: builder.query<IForRentResponse, IForRentPayload>({
            //! Returning by 50 items
            query: ({ location }) => ({
                url: '/forsale',
                params: {
                    location,
                }
            })
        }),
        getForRent: builder.query<IForRentResponse, IForRentPayload>({
            //! Returning by 50 items
            query: ({ location }) => ({
                url: '/forrent',
                params: {
                    location,
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
    useGetForRentQuery,
    useGetDetailsQuery,
} = propertiesApi;
