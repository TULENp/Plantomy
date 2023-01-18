
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "../../types";

interface ProductState {
    products: TProduct[];
    isLoading: boolean;
    miniLoading: number,
    error: string;
}

const initialState: ProductState = {
    products: [],
    isLoading: true,
    miniLoading: 0,
    error: ""
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        ProductsFetching(state) {
            state.isLoading = true;
            state.miniLoading = 10;

        },
        MiniLoading(state) {
            state.miniLoading = 30;
        },
        StopMiniLoading(state) {
            state.miniLoading = 0;
        },
        ProductsFetchingSuccess(state, action: PayloadAction<TProduct[]>) {
            state.isLoading = false;
            state.miniLoading = 100;
            state.products = action.payload;
        },
        ProductsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.miniLoading = 0;
            state.error = action.payload;
        }
    }
})

export const ProductReducer = productSlice.reducer;