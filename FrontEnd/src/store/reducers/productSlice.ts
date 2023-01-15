
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "../../types";

interface ProductState {
    products: TProduct[];
    isLoading: boolean;
    miniLoading: boolean,
    error: string;
}

const initialState: ProductState = {
    products: [],
    isLoading: true,
    miniLoading: false,
    error: ""
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        ProductsFetching(state) {
            state.isLoading = true;
            state.miniLoading = true;
        },
        MiniLoading(state) {
            state.miniLoading = true;
        },
        StopMiniLoading(state) {
            state.miniLoading = false;
        },
        ProductsFetchingSuccess(state, action: PayloadAction<TProduct[]>) {
            state.isLoading = false;
            state.miniLoading = false;
            state.products = action.payload;
        },
        ProductsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.miniLoading = false;
            state.error = action.payload;
        }
    }
})

export const ProductReducer = productSlice.reducer;