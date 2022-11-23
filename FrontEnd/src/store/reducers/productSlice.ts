
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCard } from "../../types";
import { GetProducts } from "./ActionCreators";

interface ProductState {
    products: TCard[];
    isLoading: boolean;
    error: string;
}

const initialState: ProductState = {
    products: [],
    isLoading: false,
    error: ""
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        ProductsFetching(state) {
            state.isLoading = true;
        },
        ProductsFetchingSuccess(state, action: PayloadAction<TCard[]>) {
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