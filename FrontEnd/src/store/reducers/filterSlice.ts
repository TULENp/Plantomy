
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct, TProductsType, TSize, TSortBy } from "../../types";

interface filterState {
    filter: {
        productType: TProductsType,
        sortBy: TSortBy,
        minPrice: number,
        maxPrice: number,
        careComplexity?: number,
        ProductSize?: TSize
    }
}

const initialState: filterState = {
    filter: {
        productType: 'plant',
        sortBy: 'byPopularity',
        //TODO fix prices to real
        minPrice: 0,
        maxPrice: 5000,
    }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeType(state, action: PayloadAction<TProductsType>) {
            state.filter.productType = action.payload
        },
        changeSort(state, action: PayloadAction<TSortBy>) {
            state.filter.sortBy = action.payload
        },
        changeCareComplexity(state, action: PayloadAction<number>) {
            state.filter.careComplexity = action.payload
        },
        changeSize(state, action: PayloadAction<TSize>) {
            state.filter.ProductSize = action.payload
        },
        changeMinPrice(state, action: PayloadAction<number>) {
            state.filter.minPrice = action.payload || initialState.filter.minPrice
        },
        changeMaxPrice(state, action: PayloadAction<number>) {
            state.filter.maxPrice = action.payload || initialState.filter.maxPrice
        },
        resetFilter(state) {
            state.filter = initialState.filter;
        }
    }
})

export const FilterReducer = filterSlice.reducer;