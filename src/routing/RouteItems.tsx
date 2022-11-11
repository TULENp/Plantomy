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
import { OrdersListPage } from "../pages/OrdersListPage";
import { PlantPage } from "../pages/PlantPage";
import { PollPage } from "../pages/PollPage";
import { SettingsPage } from "../pages/SettingsPage";

export default function RouteItems(): JSX.Element {
    return (
        <Routes>
            <Route path='/' element={< MainPage />} />
            <Route path="/product:id" element={< PlantPage />} />
            <Route path="/poll" element={< PollPage />} />
            <Route path="/about" element={< AboutPage />} />
            <Route path="/cart" element={< CartPage />} />
            <Route path="/order" element={< OrderPage />} />
            <Route path="/favorite" element={< FavoritesPage />} />
            <Route path="/ordersList" element={< OrdersListPage />} />
            <Route path="/settings" element={< SettingsPage />} />
        </Routes>
    )
}

