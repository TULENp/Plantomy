
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct, TProductsType, TSortBy } from "../../types";

interface filterState {
    productType: TProductsType,
    sortBy: TSortBy,
    minPrice: number,
    maxPrice: number,
    careComplexity?: number,
    size?: number
}

const initialState: filterState = {
    productType: 'plant',
    sortBy: 'byPopularity',
    //TODO fix prices to real
    minPrice: 0,
    maxPrice: 5000,
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
        },
        changeMinPrice(state, action: PayloadAction<number>) {
            state.size = action.payload
        },
        changeMaxPrice(state, action: PayloadAction<number>) {
            state.size = action.payload
        },
    }
})

export const FilterReducer = filterSlice.reducer;