import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CartReducer } from "./reducers/cartSlice";
import { FavoritesReducer } from "./reducers/favoritesSlice";
import { FilterReducer } from "./reducers/filterSlice";
import { PollResultReducer } from "./reducers/pollResultSlice";
import { ProductReducer } from "./reducers/productSlice";
import { userReducer } from "./reducers/UserSlice";

const rootReducer = combineReducers({
    ProductReducer, FilterReducer, CartReducer, FavoritesReducer, PollResultReducer, userReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']