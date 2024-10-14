import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASEURL }),
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: () => `/books`,
        }),
    }),
})

export const { useGetAllBooksQuery } = apiSlice