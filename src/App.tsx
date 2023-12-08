import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";

import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { useTheme } from "./theme/useTheme";

import './styles/index.scss';

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Switch</button>
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