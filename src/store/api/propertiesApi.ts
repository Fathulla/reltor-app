import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../utils/baseQuery';

const propertiesList = '/properties/v2'

export const propertiesApi = createApi({
    reducerPath: 'propertiesApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseQuery }),
    endpoints: (builder) => ({
        getListSold: builder.query({
            query: () => `${propertiesList}/list-sold`
        }),
        getListRent: builder.query({
            query: () => `${propertiesList}/list-for-rent`
        }),
        getListSale: builder.query({
            query: () => `${propertiesList}/list-for-sale`
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
} = propertiesApi