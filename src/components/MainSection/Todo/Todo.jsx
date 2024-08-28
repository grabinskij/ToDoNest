import React from 'react'
import { RiDeleteBin5Line, RiCheckFill, RiTodoFill, RiEdit2Fill } from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import { deleteSingleTodo, setTodoCompletionStatus, editTodo } from '../../../redux/slices/todosSlice';
import styles from './Todo.module.css'

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className={`${styles.todoContainer} ${todo.isCompleted ? styles.completedTodo : ''}`}>
    <div className={styles.timestamp}>{todo.timestamp}</div>
    <RiTodoFill className={styles.todoIcon}/>
    <div className={styles.todoText}>{todo.text}</div>
    <RiCheckFill
        className={styles.todoCompleted}
        onClick={() => dispatch(setTodoCompletionStatus(todo.id))}
    />
    <RiEdit2Fill
        className={styles.todoEdit}
        onClick={() => dispatch(editTodo(todo.id))}
    />
    <RiDeleteBin5Line
        className={styles.todoDelete}
        onClick={() => dispatch(deleteSingleTodo(todo.id))}
    />
</div>
  )
}

export default Todo