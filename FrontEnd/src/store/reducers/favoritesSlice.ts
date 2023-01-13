
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "../../types";

interface favoritesState {
    favorites: TProduct[],
    isLoading: boolean,
    error: string,
}

const initialState: favoritesState = {
    favorites: [],
    isLoading: true,
    error: ""
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        FavoritesFetchingSuccess(state, action: PayloadAction<TProduct[]>) {
            state.isLoading = false;
            state.favorites = action.payload;
        },
        FavoritesFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const FavoritesReducer = favoritesSlice.reducer;