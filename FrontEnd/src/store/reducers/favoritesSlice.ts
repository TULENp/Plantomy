
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "../../types";

interface favoritesState {
    favorites: TProduct[],
    isLoading: boolean,
    miniLoader: boolean,
    error: string,
}

const initialState: favoritesState = {
    favorites: [],
    isLoading: false,
    miniLoader: false,
    error: ""
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        FavoritesFetching(state) {
            state.miniLoader = true;
            state.isLoading = true;
        },
        FavoritesFetchingSuccess(state, action: PayloadAction<TProduct[]>) {
            state.isLoading = false;
            state.miniLoader = false;
            state.favorites = action.payload;
        },
        FavoritesFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.miniLoader = false;
            state.error = action.payload;
        }
    }
})

export const FavoritesReducer = favoritesSlice.reducer;