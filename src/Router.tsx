import { FC } from 'react';
import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';
import App from './App';
// import Archive from './pages/Archive/Archive';

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <>
        {/* <NavBar /> */}
        <App />
      </>
    ),
  },
//   {
//     path: '/archive',
//     element: (
//       <>
//         {/* <NavBar /> */}
//         <Archive />
//       </>
//     ),
//   },

];

const router = createBrowserRouter(routes);

const Router: FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;

