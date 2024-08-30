import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import styles from './TodoActions.module.css'
import Button from '../../../UI/Button/Button'
import { RootState, AppDispatch } from '../../../redux/store';
import { 
  resetTodos, 
  deleteCompletedTodos, 
  selectTodos } from '../../../redux/slices/todosSlice';


const TodoActions: FC = () => {
  const todos = useSelector((state: RootState) => selectTodos(state));
  const dispatch = useDispatch<AppDispatch>();
  const completedTodos = todos.filter((todo) => todo.isCompleted).length

    return (
        <div className={styles.container}>
        <Button
            onClick={() => dispatch(resetTodos())}
        >
          <RiDeleteBin2Line />
        </Button>
        <Button
            onClick={() => dispatch(deleteCompletedTodos())}
            disabled={!completedTodos}
        >
          <RiRefreshLine />
        </Button>
      </div>
    )
}

export default TodoActions