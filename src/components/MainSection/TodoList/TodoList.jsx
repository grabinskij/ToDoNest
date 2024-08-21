import React from 'react'
import Todo from '../Todo/Todo'
import styles from './TodoList.module.css'

const TodoList = ({todos, onToggleTodo, onEditTodo, onDeleteTodo}) => {
  return (
    <div className={styles.container}>
        {!todos && <h2>Todo list is empty</h2>}
        {todos.map((todo) => (
            <Todo 
                key={todo.id}
                todo={todo}
                onToggleTodo={onToggleTodo} 
                onEditTodo={onEditTodo} 
                onDeleteTodo={onDeleteTodo}
            />
        ))}
    </div>
  )
}

export default TodoList