import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "./reducers/productSlice";

const rootReducer = combineReducers({
    ProductReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer

    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']