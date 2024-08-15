import React from 'react'
import Todo from '../Todo/Todo'
import styles from './TodoList.module.css'

const TodoList = ({todos}) => {
  return (
    <div className={styles.container}>
        {!todos && <h2>Todo list is empty</h2>}
        {todos.map((todo) => (
            <Todo 
                todo={todo}
            />
        ))}
    </div>
  )
}

export default TodoList