import './App.css'
import { useState } from 'react'
import Header from './components/Header/Header'
import TodoForm from './components/MainSection/TodoForm/TodoForm'
import TodoList from './components/MainSection/TodoList/TodoList'

import TodoActions from './components/MainSection/TodoActions/TodoActions'
import formatDate from './utils/formatDate'


function App({archive, setArchive, todos, setTodos}) {


    return (
        <div className='App'>
            <Header />
            <div className="container">
              <TodoForm 
                todos={todos}
                onAddTodo={addTodoHandler}
                onAddEditTodo={addEditTodoHandler} 
              />
               {!!todos.length && (
                <TodoActions 
                  onResetTodos={resetTodosHandler}
                  onDeleteCompletedTodos={deleteCompletedTodosHandler}
                  completedTodos={completedTodosHandler}
                />
               )}
              <TodoList 
                todos={todos}
                onToggleTodo={toggleTodoHandler}
                onEditTodo={editTodoHandler}
                onDeleteTodo={deleteTodoHandler}
              />
            </div>
        </div>
    )
}

export default App
