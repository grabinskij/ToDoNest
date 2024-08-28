import React, { useState } from 'react';
import Router from './Router';
import formatDate from "./utils/formatDate";
import {v4 as uuidv4} from 'uuid'

const AppContainer = () => {
//     const [todos, setTodos] = useState([]);
//     const [archive, setArchive] = useState([]);
// console.log(archive)
    // const addTodoHandler = (text) => {
    //     const timestamp = formatDate(new Date());

    //     const newTodo = {
    //         timestamp,
    //         text,
    //         isCompleted: false,
    //         isEdited: false,
    //         id: uuidv4(),
    //     }
    //     setTodos(currentTodos => [...currentTodos, newTodo])
    // }

    // const deleteTodoHandler = (id) => {
    //     setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id))
    // }

    // const toggleTodoHandler = (id) => {
    //     setTodos(currentTodos => (
    //         currentTodos.map((todo) => (
    //             todo.id === id
    //                 ? {...todo, isCompleted: !todo.isCompleted}
    //                 : {...todo}
    //         ))
    //     ))
    // }


    // const editTodoHandler = (id) => {
    //     setTodos(currentTodos => (
    //         currentTodos.map((todo) => (
    //             todo.id === id
    //                 ? {...todo, isEdited: !todo.isEdited}
    //                 : {...todo}
    //         ))
    //     ))
    // }


    const addEditTodoHandler = (updatedTodo) => {
        setTodos(currentTodos =>
            currentTodos.map(todo =>
                todo.id === updatedTodo.id
                    ? { ...todo, text: updatedTodo.text, isEdited: false }
                    : todo
            )
        )
    }

    const resetTodosHandler = () => {
            const timestamp = new Date();
            const archiveItems = todos.map((todo) => ({
                todo,
                timestamp,
                key: todo.id
            }));
            setArchive((prevArchive) => [...prevArchive, ...archiveItems]);
            setTodos([]);
    };

    const deleteCompletedTodosHandler = () => {
        setTodos(todos.filter((todo) => !todo.isCompleted))
    }

    const completedTodosHandler = todos.filter((todo) => todo.isCompleted).length

    return (
        <Router
            todos={todos}
            onAddTodo={addTodoHandler}
            onAddEditTodo={addEditTodoHandler}
            onResetTodos={resetTodosHandler}
            onDeleteCompletedTodos={deleteCompletedTodosHandler}
            completedTodos={completedTodosHandler}
            onToggleTodo={toggleTodoHandler}
            onEditTodo={editTodoHandler}
            onDeleteTodo={deleteTodoHandler}
            archive={archive}
            setArchive={setArchive}
        />
    );
};

export default AppContainer;
