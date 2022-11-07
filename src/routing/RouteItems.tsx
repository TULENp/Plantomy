import React from "react"
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import App from "../App";
import MainPage from "../pages/MainPage";
import PlantPage from "../pages/PlantPage";

export default function RouteItems(): JSX.Element {
    return (
        <Routes>
            <Route path='/' element={< MainPage />} />
            <Route path="/plant" element={< PlantPage />} />
        </Routes>
    )
}

