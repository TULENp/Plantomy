
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct, TProductsType, TSize, TSortBy } from "../../types";

interface filterState {
    productType: TProductsType,
    sortBy: TSortBy,
    minPrice: number,
    maxPrice: number,
    careComplexity?: number,
    ProductSize?: TSize
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
        changeSize(state, action: PayloadAction<TSize>) {
            state.ProductSize = action.payload
        },
        changeMinPrice(state, action: PayloadAction<number>) {
            state.minPrice = action.payload
        },
        changeMaxPrice(state, action: PayloadAction<number>) {
            state.maxPrice = action.payload
        },
    }
})

export const FilterReducer = filterSlice.reducer;