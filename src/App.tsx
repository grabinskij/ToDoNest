import './App.css'
import { FC } from 'react'
// import { useSelector, TypedUseSelectorHook } from 'react-redux'
import Header from './components/Header/Header'
import TodoForm from './components/MainSection/TodoForm/TodoForm'
import TodoList from './components/MainSection/TodoList/TodoList'
// import { selectTodos } from './redux/slices/todosSlice'
// import TodoActions from './components/MainSection/TodoActions/TodoActions'
// import { RootState } from './redux/store'

// const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

const App: FC = () => {
    // const todos = useTypedSelector(selectTodos)
    return (
        <div className="App">
            <Header />
            <div className="container">
                {/* <div className="actions-container"> */}
                    <TodoForm />
                    {/* <TodoActions /> */}
                {/* </div> */}
                <TodoList />
            </div>
        </div>
    )
}

export default App
