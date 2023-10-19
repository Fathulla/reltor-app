import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQuery, xHost, xKey } from '../../utils/baseQuery';

/* interface ISimilarHomesPayload {
    status: 'for_sale'|'ready_to_build'|'for_rent'|'sold'|'off_market'|'other'|'new_community'
    limit: number
    property_id: string
    baths: number
    beds: number
    sqft: number
    href: string
    city: string
    line: string
    postal_code: string
    state_code: string
    list_price: number
    date: string
} */

interface IForRentPayload {
    property_id: string
    limit: number
    location: string
    type: 'single_family'
}

type IProperty = []

interface IForRentResponse extends IForRentPayload { }

interface IDetailsPayload {
    property_id: string
    limit: number
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
        getForSale: builder.query<IForRentResponse, IForRentPayload>({
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
        getForRent: builder.query<IProperty, IForRentPayload>({
            //! Returning by 50 items
            query: ({ limit, property_id }) => ({
                url: '/forrent',
                params: {
                    property_id,
                    limit
                }
            })
        }),
        getDetails: builder.query<IDetailsResponse, IDetailsPayload>({
            //! Returning by 10 items
            query: ({ property_id }) => ({
                url: '/properties/detail',
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
