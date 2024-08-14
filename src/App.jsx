import './App.css'
import { useState } from 'react'
import Header from './components/Header/Header'
import TodoForm from './components/MainSection/TodoForm/TodoForm'
import {v4 as uuidv4} from 'uuid'

function App() {

const [todos, setTodos] = useState([])

console.log(todos)

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
        <>
            <Header />
            <div className="container">
              <TodoForm onAddTodo={addTodoHandler}/>
            </div>
        </>
    )
}

export default App
