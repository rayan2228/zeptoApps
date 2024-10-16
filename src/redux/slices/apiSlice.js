import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASEURL }),
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: (currentPage) => `/books/?page=${currentPage}`,
            keepUnusedDataFor:4000
        }),
        getSearchResults: builder.query({
            query: (search) => `/books?search=${search}`
        }),
        getBookById: builder.query({
            query: (bookId) => `/books/${bookId}`,
            keepUnusedDataFor:4000
        })
    }),
})

export const { useGetAllBooksQuery, useGetSearchResultsQuery, useGetBookByIdQuery } = apiSlice