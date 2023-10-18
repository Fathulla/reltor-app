import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQuery, xHost, xKey } from '../../utils/baseQuery';

interface IForRentPayload {
    location: string;
    limit: number
}

type IProperty = []

/* interface IForRentResponse extends IForRentPayload { }
 */
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
        getForSale: builder.query<IProperty, IForRentPayload>({
            //! Returning by 50 items
            query: ({ location, limit, }) => ({
                url: '/forsale',
                params: {
                    location,
                    limit,
                }
            })
        }),
        getForRent: builder.query<IProperty, IForRentPayload>({
            //! Returning by 50 items
            query: ({ location, limit }) => ({
                url: '/forrent',
                params: {
                    location,
                    limit
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
