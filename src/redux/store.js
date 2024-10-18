import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import wishlistSlice from "./slices/wishlistSlice"
import paginationSlice from "./slices/paginationSlice"
import themeModeSlice from "./slices/themeModeSlice"
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        wishlistSlice,
        paginationSlice,
        themeModeSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})
