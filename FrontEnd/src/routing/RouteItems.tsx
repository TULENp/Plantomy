import React from "react"
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import { AboutPage } from "../pages/AboutPage";
import { CartPage } from "../pages/CartPage";
import { FavoritesPage } from "../pages/FavoritesPage";
import { MainPage } from "../pages/MainPage";
import { OrderPage } from "../pages/OrderPage";
import { OrderListPage } from "../pages/OrderListPage";
import { PlantPage } from "../pages/PlantPage";
import { PollPage } from "../pages/PollPage";
import { SettingsPage } from "../pages/SettingsPage";
import { CompletedOrderPage } from "../pages/CompletedOrderPage";
import { CachepotPage } from "../pages/CachepotPage";

export default function RouteItems(): JSX.Element {
    return (
        <Routes>
            <Route path='/' element={< MainPage />} />
            <Route path='/cachepots' element={< CachepotPage />} />
            <Route path="/product:id" element={< PlantPage/>} />
            <Route path="/poll" element={< PollPage />} />
            <Route path="/about" element={< AboutPage />} />
            <Route path="/cart" element={< CartPage />} />
            <Route path="/order" element={< OrderPage />} />
            <Route path="/completedOrder" element={< CompletedOrderPage />} />
            <Route path="/favorite" element={< FavoritesPage />} />
            <Route path="/ordersList" element={< OrderListPage />} />
            <Route path="/settings" element={< SettingsPage />} />
        </Routes>
    )
}

