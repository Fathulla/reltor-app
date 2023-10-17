import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../utils/baseQuery';

// Определите тип данных для ответа от API
interface Listing {
    // Определите свойства, которые возвращаются в ответе от API
    id: number;
    title: string;
    // ...
}

// Создайте экземпляр API с помощью функции createApi
export const realtorApi = createApi({
    reducerPath: 'realtorApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseQuery }),
    endpoints: (builder) => ({
        getListingsForSale: builder.query<Listing[], { location: string; property_type: string }>({
            query: ({ location, property_type }) => ({
                url: '/properties/list-for-sale',
                params: {
                    api_key: '63abcb1692msha43e850706d9ebdp137627jsn34dd3129aecb',
                    location,
                    property_type,
                },
            }),
        }),
    }),
});

// Экспортируйте хуки для использования в компонентах
export const { useGetListingsForSaleQuery } = realtorApi;
