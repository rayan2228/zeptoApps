import { createSlice } from '@reduxjs/toolkit';

// Helper functions for localStorage
const getWishlistFromLocalStorage = () => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
};

const saveWishlistToLocalStorage = (wishlist) => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
};

// Wishlist slice
const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: getWishlistFromLocalStorage(),
    },
    reducers: {
        toggleWishlist: (state, action) => {
            const book = action.payload;
            if (state.items.some(({ id }) => id == book.id)) {
                state.items = state.items.filter(({ id }) => id !== book.id);
            } else {
                state.items.push(book);
            }
            saveWishlistToLocalStorage(state.items); // Persist to localStorage
        },
    },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
