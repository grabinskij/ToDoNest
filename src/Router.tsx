import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
// import Archive from './pages/Archive/Archive';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <>
                    {/*<NavBar />*/}
                    <App/>
                </>
            ),
        },
        // {
        //     path: '/archive',
        //     element: (
        //         <>
        //             {/*<NavBar />*/}
        //             <Archive />
        //         </>
        //     ),
        // },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
