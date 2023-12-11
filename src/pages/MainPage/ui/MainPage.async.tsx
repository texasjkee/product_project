import { lazy } from 'react';

// export const MainPageAsync = lazy(() => import('./MainPage'));

// Loading simulation
export const MainPageAsync = lazy(() => new Promise(resolve => {
    const SECOND = 1000;
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')), SECOND)
}));