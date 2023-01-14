
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TOrder } from "../../types";

interface ordersState {
    orders: TOrder[],
    isLoading: boolean,
    error: string,
}

const initialState: ordersState = {
    orders: [],
    isLoading: false,
    error: ""
}

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        OrdersFetching(state) {
            state.isLoading = true;
        },
        OrdersFetchingSuccess(state, action: PayloadAction<TOrder[]>) {
            state.isLoading = false;
            state.orders = action.payload;
        },
        OrdersFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const OrdersReducer = ordersSlice.reducer;