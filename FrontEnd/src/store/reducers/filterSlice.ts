
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct, TProductsType, TSortBy } from "../../types";

interface filterState {
    productType: TProductsType,
    sortBy: TSortBy,
    careComplexity?: number,
    size?: number
}

const initialState: filterState = {
    productType: 'plant',
    sortBy: 'byPopularity',
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeType(state, action: PayloadAction<TProductsType>) {
            state.productType = action.payload
        },
        changeSort(state, action: PayloadAction<TSortBy>) {
            state.sortBy = action.payload
        },
        changeCareComplexity(state, action: PayloadAction<number>) {
            state.careComplexity = action.payload
        },
        changeSize(state, action: PayloadAction<number>) {
            state.size = action.payload
        }
    }
})

export const FilterReducer = filterSlice.reducer;