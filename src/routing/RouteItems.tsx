import React from "react"
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import { AboutPage } from "../pages/AboutPage";
import { CartPage } from "../pages/CartPage";
import { MainPage } from "../pages/MainPage";
import { PlantPage } from "../pages/PlantPage";
import { PollPage } from "../pages/PollPage";

export default function RouteItems(): JSX.Element {
    return (
        <Routes>
            <Route path='/' element={< MainPage />} />
            <Route path="/product:id" element={< PlantPage />} />
            <Route path="/poll" element={< PollPage />} />
            <Route path="/about" element={< AboutPage />} />
            <Route path="/cart" element={< CartPage />} />
        </Routes>
    )
}

