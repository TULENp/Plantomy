import React from "react"
import { Routes, Route } from "react-router-dom";

import { AboutPage } from "../pages/AboutPage";
import { CartPage } from "../pages/CartPage";
import { FavoritesPage } from "../pages/FavoritesPage";
import { MainPage } from "../pages/MainPage";
import { OrderPage } from "../pages/OrderPage";
import { ProductPage } from "../pages/ProductPage";
import { PollPage } from "../pages/PollPage";
import { SettingsPage } from "../pages/SettingsPage";
import { CompletedOrderPage } from "../pages/CompletedOrderPage";
import { PollResultPage } from "../pages/PollResultPage";
import { OrdersListPage } from "../pages/OrdersListPage";

export default function RouteItems(): JSX.Element {
    return (
        <Routes>
            <Route path='/' element={< MainPage />} />
            <Route path="/product:id" element={< ProductPage />} />
            <Route path="/poll" element={< PollPage />} />
            <Route path="/about" element={< AboutPage />} />
            <Route path="/cart" element={< CartPage />} />
            <Route path="/order" element={< OrderPage />} />
            <Route path="/completedOrder:id" element={< CompletedOrderPage />} />
            <Route path="/favorites" element={< FavoritesPage />} />
            <Route path="/ordersList" element={< OrdersListPage />} />
            <Route path="/settings" element={< SettingsPage />} />
            <Route path="/pollResult" element={< PollResultPage />} />
        </Routes>
    )
}

