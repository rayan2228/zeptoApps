import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASEURL }),
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: () => `/books`,
        }),
        getSearchResults: builder.query({
            query: (search) => {
                console.log("search", search);

                return `/books?search=${search}`
            }
        })
    }),
})

export const { useGetAllBooksQuery, useGetSearchResultsQuery } = apiSlice