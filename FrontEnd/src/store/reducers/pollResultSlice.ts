
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "../../types";

interface pollResultState {
    pollResult: TProduct[],
    isCompleted: boolean,
    isLoading: boolean,
    error: string,
}

const initialState: pollResultState = {
    pollResult: [],
    isCompleted: false,
    isLoading: false,
    error: ''
}

export const pollResultSlice = createSlice({
    name: 'pollResult',
    initialState,
    reducers: {
        PollResultResultFetching(state) {
            state.isLoading = true;
        },
        PollResultFetchingSuccess(state, action: PayloadAction<TProduct[]>) {
            state.isLoading = false;
            state.isCompleted = true;
            state.pollResult = action.payload;
        },
        PollResultFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const PollResultReducer = pollResultSlice.reducer;