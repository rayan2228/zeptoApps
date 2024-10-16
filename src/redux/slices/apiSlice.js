import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASEURL }),
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: (currentPage) => {
                console.log("api", currentPage);
                
               return `/books/?page=${currentPage}`},
        }),
        getSearchResults: builder.query({
            query: (search) => `/books?search=${search}`
        })
    }),
})

export const { useGetAllBooksQuery, useGetSearchResultsQuery } = apiSlice