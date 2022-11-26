
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "../../types";
import { GetProducts } from "./ActionCreators";

interface filterState {
    productType: string,
    sortBy: string,
    careComplexity?: number,
    size?: number
}

const initialState: filterState = {
    productType: "",
    sortBy: "",
    careComplexity: 0,
    size: 0
}

export const filterSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        
    }
})

export const filterReducer = filterSlice.reducer;