import { FC } from 'react';
import { AppDispatch } from '../../../redux/store';
import { TodoProps } from '../../../types/types';
import { RiDeleteBin5Line, RiCheckFill, RiTodoFill, RiEdit2Fill } from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import { deleteSingleTodo, setTodoCompletionStatus, editTodo } from '../../../redux/slices/todosSlice';
import { addToArchive } from '../../../redux/slices/archiveSlice';
import styles from './Todo.module.css'

const Todo:FC<TodoProps> = ({ todo }) => {
  const dispatch = useDispatch<AppDispatch>();


  const deleteSingleTodoAndArchive = (id: string) => {
    if(confirm('Are your sure you whant to delete this todo?')){
      const timestamp = new Date()
      dispatch(deleteSingleTodo(id))
      dispatch(addToArchive([{todo: todo, archiveTimestamp: timestamp.toISOString(), key: id}]))
    }
  }

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
        onClick={() => deleteSingleTodoAndArchive(todo.id)}
    />
</div>
  )
}

export default Todo