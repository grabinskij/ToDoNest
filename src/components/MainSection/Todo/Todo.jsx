import React from 'react'
import { RiDeleteBin5Line, RiCheckFill, RiTodoFill, RiEdit2Fill } from 'react-icons/ri'
import styles from './Todo.module.css'

const Todo = ({todo}) => {
  return (
    <div className={`${styles.todoContainer} ${todo.isCompleted ? styles.completedTodo : ''}`}>
    <RiTodoFill className={styles.todoIcon}/>
    <div className={styles.todoText}>{todo.text}</div>
    <RiCheckFill
        className={styles.todoCompleted}
        onClick={() => toggleTodoHandler(todo.id)}
    />
    <RiEdit2Fill
        className={styles.todoEdit}
        onClick={() => editTodoHandler(todo.id)}
    />
    <RiDeleteBin5Line
        className={styles.todoDelete}
        onClick={() => deleteTodoHandler(todo.id)}
    />
</div>
  )
}

export default Todo