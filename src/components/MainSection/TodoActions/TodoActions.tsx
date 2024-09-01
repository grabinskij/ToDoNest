import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import styles from './TodoActions.module.css';
import Button from '../../../UI/Button/Button';
import { RootState, AppDispatch } from '../../../redux/store';
import { ArchivedTodo } from '../../../types/types'; 
import { deleteCompletedTodos, selectTodos, resetTodos} from '../../../redux/slices/todosSlice';
import { addToArchive } from '../../../redux/slices/archiveSlice';



const TodoActions: FC = () => {
  const todos = useSelector((state: RootState) => selectTodos(state));
  const dispatch = useDispatch<AppDispatch>();
  const completedTodos = todos.filter((todo) => todo.isCompleted).length


  const handleResetAndArchiving = () => {
    const archiveTimestamp = new Date().toISOString();
    const archiveItems: ArchivedTodo[] = todos.map((todo) => ({
      todo,
      archiveTimestamp,
      key: todo.id
    }));
    dispatch(addToArchive(archiveItems))
    dispatch(resetTodos())
  }

    return (
        <div className={styles.container}>
        <Button
            onClick={handleResetAndArchiving}
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