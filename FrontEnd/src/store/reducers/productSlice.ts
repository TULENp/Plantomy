
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "../../types";

interface ProductState {
    products: TProduct[];
    isLoading: boolean;
    miniLoader: boolean,
    error: string;
}

const initialState: ProductState = {
    products: [],
    isLoading: true,
    miniLoader: false,
    error: ""
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        ProductsFetching(state) {
            state.miniLoader = true;
        },
        ProductsFetchingSuccess(state, action: PayloadAction<TProduct[]>) {
            state.isLoading = false;
            state.products = action.payload;
        },
        ProductsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const ProductReducer = productSlice.reducer;