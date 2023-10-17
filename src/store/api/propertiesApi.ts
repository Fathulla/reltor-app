import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../utils/baseQuery';

const propertiesList = '/properties/v2'

// export const apiSlice = createApi({
//     reducerPath: 'api',
//     baseQuery: fetchBaseQuery({
//         baseUrl: BASE_URL,
//         prepareHeaders: (headers, { getState }) => {
//             headers.set('Content-Type', 'application/json')
//             headers.set('X-API-KEY', HBO_KEY)
//             return headers
//         }
//     }),
//     endpoints: (builder) => ({
//         getMedia: builder.query({
//             query: (id) => `/titletest/${id}`,
//             // or
//             query: (id) => ({ url: `/titletest/${id}` }),
//             // or
//             query: ({ title, id }) => `/${title}/${id}`,
//         })
//     })
// })

export const propertiesApi = createApi({
    reducerPath: 'propertiesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseQuery, prepareHeaders: (headers) => {
            headers.set("x-rapidapi-key", "meowmeowmeow")
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
        getListSale: builder.query({
            query: (limit: number = 10) => ({
                url: `${propertiesList}/list-for-sale`,
                params: {
                    limit: limit,
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
} = propertiesApi