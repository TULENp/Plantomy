import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CharsReducer } from "./reducers/сharsSlice";
import { FilterReducer } from "./reducers/filterSlice";
import { ProductReducer } from "./reducers/productSlice";

const rootReducer = combineReducers({
    ProductReducer, FilterReducer, CharsReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']