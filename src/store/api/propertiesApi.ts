import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../utils/baseQuery';

/* interface IListSalePayload {
    city: string
    state_code: string
    limit: number
}

interface IListSale extends IListSalePayload { } */

const propertiesList = '/properties/v3'

export const propertiesApi = createApi({
    reducerPath: 'propertiesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseQuery, prepareHeaders: (headers) => {
            headers.set("x-rapidapi-key", "63abcb1692msha43e850706d9ebdp137627jsn34dd3129aecb")
            headers.set("x-rapidapi-host", "realtor.p.rapidapi.com")
            return headers
        }
    }),
    endpoints: (builder) => ({
        getDetail: builder.query({
            query: () => `${propertiesList}/detail`
        }),
        getSimilarHomes: builder.query({
            query: ({property_id,limit,status}) => ({
                url: `${propertiesList}/list-similar-homes`,
                params: {
                    property_id,
                    limit,
                    status,
                }
            })
        }),
    })
})

export const {
    useGetDetailQuery,
    useGetSimilarHomesQuery,
} = propertiesApi;
