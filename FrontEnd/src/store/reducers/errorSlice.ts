
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface errorState {
    error: string,
}

const initialState: errorState = {
    error: ''
}

export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        GetError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
    }
})

export const ErrorReducer = errorSlice.reducer;