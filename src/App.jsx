import './App.css'
import { useState } from 'react'
import Header from './components/Header/Header'
import TodoForm from './components/MainSection/TodoForm/TodoForm'
import TodoList from './components/MainSection/TodoList/TodoList'
import {v4 as uuidv4} from 'uuid'

function App() {

const [todos, setTodos] = useState([])

const addTodoHandler = (text) => {
  const newTodo = {
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

    return (
        <div className='App'>
            <Header />
            <div className="container">
              <TodoForm 
                todos={todos}
                onAddTodo={addTodoHandler}
                onAddEditTodo={addEditTodoHandler} 
              />
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
