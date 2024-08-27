import './App.css'
import Header from './components/Header/Header'
import TodoForm from './components/MainSection/TodoForm/TodoForm'
import TodoList from './components/MainSection/TodoList/TodoList'
import TodoActions from './components/MainSection/TodoActions/TodoActions'



function App({
  todos,
  onAddTodo,
  onDeleteTodo,
  onAddEditTodo,
  onResetTodos,
  onDeleteCompletedTodos,
  completedTodos,
  onToggleTodo,
  onEditTodo
}) {


    return (
        <div className='App'>
            <Header />
            <div className="container">
              <TodoForm 
                todos={todos}
                onAddTodo={onAddTodo}
                onAddEditTodo={onAddEditTodo} 
              />
               {!!todos.length && (
                <TodoActions 
                  onResetTodos={onResetTodos}
                  onDeleteCompletedTodos={onDeleteCompletedTodos}
                  completedTodos={completedTodos}
                />
               )}
              <TodoList 
                todos={todos}
                onToggleTodo={onToggleTodo}
                onEditTodo={onEditTodo}
                onDeleteTodo={onDeleteTodo}
              />
            </div>
        </div>
    )
}

export default App
