import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../utils/baseQuery';

interface IListSalePayload {
    city: string
    state_code: string
    limit: number
}

interface IListSale extends IListSalePayload { }

const propertiesList = '/properties/v2'

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
        getListSold: builder.query({
            query: () => `${propertiesList}/list-sold`
        }),
        getListRent: builder.query({
            query: () => `${propertiesList}/list-for-rent`
        }),
        getListSale: builder.query<IListSalePayload, IListSale>({
            query: ({ city, state_code, limit }) => ({
                url: `${propertiesList}/list-for-sale`,
                params: {
                    limit,
                    city,
                    state_code,                    
                }
            })
        }),
        getListMls: builder.query({
            query: () => `${propertiesList}/list-by-mls`
        }),
        getDetail: builder.query({
            query: () => `${propertiesList}/detail`
        }),
        getSimilarHomes: builder.query({
            query: () => `${propertiesList}/list-similar-homes`
        }),
        getSimilarRentalHomes: builder.query({
            query: () => `${propertiesList}/list-similar-rental-homes`
        }),
    })
})

export const {
    useGetListSoldQuery,
    useGetListRentQuery,
    useGetListSaleQuery,
    useGetListMlsQuery,
    useGetDetailQuery,
    useGetSimilarHomesQuery,
    useGetSimilarRentalHomesQuery,
} = propertiesApi;
