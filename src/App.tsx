import './App.css'
import { useSelector } from 'react-redux';
import Header from './components/Header/Header'
import TodoForm from './components/MainSection/TodoForm/TodoForm'
import TodoList from './components/MainSection/TodoList/TodoList'
import { selectTodos } from './redux/slices/todosSlice';
import TodoActions from './components/MainSection/TodoActions/TodoActions'



function App() {
  const todos = useSelector(selectTodos);
    return (
        <div className='App'>
            <Header />
            <div className="container">
              <TodoForm />
               {!!todos.length && (
                <TodoActions />
               )}
              <TodoList />
            </div>
        </div>
    )
}

export default App
