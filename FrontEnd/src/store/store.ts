import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CartReducer } from "./reducers/cartSlice";
import { ErrorReducer } from "./reducers/errorSlice";
import { FavoritesReducer } from "./reducers/favoritesSlice";
import { FilterReducer } from "./reducers/filterSlice";
import { OrdersReducer } from "./reducers/ordersSlice";
import { PollResultReducer } from "./reducers/pollResultSlice";
import { ProductReducer } from "./reducers/productSlice";
import { UserReducer } from "./reducers/UserSlice";

const rootReducer = combineReducers({
    ProductReducer,
    FilterReducer,
    CartReducer,
    FavoritesReducer,
    PollResultReducer,
    UserReducer,
    OrdersReducer,
    ErrorReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']