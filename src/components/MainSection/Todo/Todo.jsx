import React from 'react'
import { RiDeleteBin5Line, RiCheckFill, RiTodoFill, RiEdit2Fill } from 'react-icons/ri'
import styles from './Todo.module.css'

const Todo = ({todo, onToggleTodo, onEditTodo, onDeleteTodo}) => {
  return (
    <div className={`${styles.todoContainer} ${todo.isCompleted ? styles.completedTodo : ''}`}>
    <div className={styles.timestamp}>{todo.timestamp}</div>
    <RiTodoFill className={styles.todoIcon}/>
    <div className={styles.todoText}>{todo.text}</div>
    <RiCheckFill
        className={styles.todoCompleted}
        onClick={() => onToggleTodo(todo.id)}
    />
    <RiEdit2Fill
        className={styles.todoEdit}
        onClick={() => onEditTodo(todo.id)}
    />
    <RiDeleteBin5Line
        className={styles.todoDelete}
        onClick={() => onDeleteTodo(todo.id)}
    />
</div>
  )
}

export default Todo