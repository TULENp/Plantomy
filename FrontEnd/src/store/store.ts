import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FilterReducer } from "./reducers/filterSlice";
import { ProductReducer } from "./reducers/productSlice";
import { UserReducer } from "./reducers/userSlice";

const rootReducer = combineReducers({
    ProductReducer, FilterReducer, UserReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']