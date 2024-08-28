import React from 'react'
import Todo from '../Todo/Todo'
import { useSelector } from 'react-redux';
import styles from './TodoList.module.css'
import { selectTodos } from '../../../redux/slices/todosSlice';

const TodoList = () => {
  const todos = useSelector(selectTodos);

  return (
    <div className={styles.container}>
        {!todos && <h2>Todo list is empty</h2>}
        {todos.map((todo) => (
            <Todo 
                key={todo.id}
                todo={todo}
                // onToggleTodo={onToggleTodo} 
                // onEditTodo={onEditTodo} 
                // onDeleteTodo={onDeleteTodo}
            />
        ))}
    </div>
  )
}

export default TodoList