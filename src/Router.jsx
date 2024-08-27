import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Archive from './pages/Archive/Archive';
import NavBar from './NavBar';

const RouterComponent = (
    {
        todos,
        onAddTodo,
        onAddEditTodo,
        onResetTodos,
        onDeleteCompletedTodos,
        completedTodos,
        onToggleTodo,
        onEditTodo,
        onDeleteTodo,
        archive,
        onMoveToArchive,
    }
) => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <>
                    {/*<NavBar />*/}
                    <App
                        todos={todos}
                        onAddTodo={onAddTodo}
                        onDeleteTodo={onDeleteTodo}
                        onAddEditTodo={onAddEditTodo}
                        onResetTodos={onResetTodos}
                        onDeleteCompletedTodos={onDeleteCompletedTodos}
                        completedTodos={completedTodos}
                        onToggleTodo={onToggleTodo}
                        onEditTodo={onEditTodo}
                        onMoveToArchive={onMoveToArchive}
                        archive={archive}
                    />
                </>
            ),
        },
        {
            path: '/archive',
            element: (
                <>
                    {/*<NavBar />*/}
                    <Archive
                        archive={archive}
                        onMoveToArchive={onMoveToArchive}
                    />
                </>
            ),
        },
    ]);

    return <RouterProvider router={router} />;
};

export default RouterComponent;
