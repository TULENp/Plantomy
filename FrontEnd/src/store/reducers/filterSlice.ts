
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TSize } from "../../types";

interface filterState {
    filter: {
        search: string,
        cost: {
            min: number,
            max: number
        },
        type: number,
        sort: number,
        category: number
        //add later
        careComplexity?: number,
        productSize?: TSize,
    }
}

const initialState: filterState = {
    filter: {
        search: '',
        //TODO fix prices to real
        cost: {
            min: 650,
            max: 5999
        },
        type: 1,
        sort: 0,
        category: 0
    }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeType(state, action: PayloadAction<number>) {
            state.filter.type = action.payload
        },
        changeSort(state, action: PayloadAction<number>) {
            state.filter.sort = action.payload
        },
        changeCareComplexity(state, action: PayloadAction<number>) {
            state.filter.careComplexity = action.payload
        },
        changeSize(state, action: PayloadAction<TSize>) {
            state.filter.productSize = action.payload
        },
        changeMinPrice(state, action: PayloadAction<number>) {
            state.filter.cost.min = action.payload || initialState.filter.cost.min
        },
        changeMaxPrice(state, action: PayloadAction<number>) {
            state.filter.cost.max = action.payload || initialState.filter.cost.max
        },
        resetFilter(state) {
            state.filter = initialState.filter;
        },
        changeTitle(state, action: PayloadAction<string>) {
            state.filter.search = action.payload;
        }
    }
})

export const FilterReducer = filterSlice.reducer;