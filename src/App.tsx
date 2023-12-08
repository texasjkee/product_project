import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";

import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";

import './index.scss';

export const App = () => {

    return (
        <div className="app">
            <Link to={'/'}>Maing</Link>
            <Link to={'/about'}> About</Link>
            <Suspense fallback={<div>Loading ...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;