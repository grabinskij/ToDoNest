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

    return (
        <div className='App'>
            <Header />
            <div className="container">
              <TodoForm onAddTodo={addTodoHandler}/>
              <TodoList todos={todos}/>
            </div>
        </div>
    )
}

export default App
