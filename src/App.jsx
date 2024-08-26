import './App.css'
import { useState } from 'react'
import Header from './components/Header/Header'
import TodoForm from './components/MainSection/TodoForm/TodoForm'
import TodoList from './components/MainSection/TodoList/TodoList'
import {v4 as uuidv4} from 'uuid'
import TodoActions from './components/MainSection/TodoActions/TodoActions'
import formatDate from './utils/formatDate'

function App() {

const [todos, setTodos] = useState([])


const addTodoHandler = (text) => {
  const timestamp = formatDate(new Date());

  const newTodo = {
    timestamp,
    text,
    isCompleted: false, 
    isEdited: false,
    id: uuidv4(),
  }
  setTodos(currentTodos => [...currentTodos, newTodo])
}

const deleteTodoHandler = (id) => {
  setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id))
}

const toggleTodoHandler = (id) => {
  setTodos(currentTodos => (
    currentTodos.map((todo) => (
      todo.id === id
      ? {...todo, isCompleted: !todo.isCompleted}
      : {...todo}
    ))
  ))
} 


const editTodoHandler = (id) => {
  setTodos(currentTodos => (
    currentTodos.map((todo) => (
      todo.id === id
      ? {...todo, isEdited: !todo.isEdited}
      : {...todo}
    ))
  ))
}


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
  setTodos([])
}

const deleteCompletedTodosHandler = () => {
  setTodos(todos.filter((todo) => !todo.isCompleted))
}

const completedTodosHandler = todos.filter((todo) => todo.isCompleted).length

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
