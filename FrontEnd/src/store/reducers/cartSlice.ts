
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "../../types";

interface ProductState {
    cartItems: TProduct[];
    isLoading: boolean;
    error: string;
}

const initialState: ProductState = {
    cartItems: [],
    isLoading: true,
    error: ""
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        CartFetching(state) {
            state.isLoading = true;
        },
        CartFetchingSuccess(state, action: PayloadAction<TProduct[]>) {
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        CartFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const CartReducer = cartSlice.reducer;