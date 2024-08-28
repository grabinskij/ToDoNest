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
                    <App
                        // todos={todos}
                        // onAddTodo={onAddTodo}
                        // onDeleteTodo={onDeleteTodo}
                        // onAddEditTodo={onAddEditTodo}
                        // onResetTodos={onResetTodos}
                        // onDeleteCompletedTodos={onDeleteCompletedTodos}
                        // completedTodos={completedTodos}
                        // onToggleTodo={onToggleTodo}
                        // onEditTodo={onEditTodo}
                    />
                </>
            ),
        },
        // {
        //     path: '/archive',
        //     element: (
        //         <>
        //             {/*<NavBar />*/}
        //             <Archive
        //                 archive={archive}
        //                 setArchive={setArchive}
        //             />
        //         </>
        //     ),
        // },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
