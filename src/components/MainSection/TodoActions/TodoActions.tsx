import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import styles from './TodoActions.module.css';
import Button from '../../../UI/Button/Button';
import { RootState, AppDispatch } from '../../../redux/store';
import { ArchivedTodo } from '../../../types/types'; 
import { deleteCompletedTodos, selectTodos, resetTodos} from '../../../redux/slices/todosSlice';
import { addToArchive } from '../../../redux/slices/archiveSlice';
import { createArchiveItems } from '../../../utils/createArchiveItems';



const TodoActions: FC = () => {
  const todos = useSelector((state: RootState) => selectTodos(state));
  const dispatch = useDispatch<AppDispatch>();
  const completedTodos = todos.filter((todo) => todo.isCompleted)


  const handleResetAndArchiving = () => {
    const archiveTimestamp = new Date().toISOString();
    const archiveItems: ArchivedTodo[] = createArchiveItems(todos, archiveTimestamp);
    dispatch(addToArchive(archiveItems));
    dispatch(resetTodos());
  }

  const handleResetCompletedTodosAndArchiving = () => {
    const archiveTimestamp = new Date().toISOString();
    const archiveItems: ArchivedTodo[] = createArchiveItems(completedTodos, archiveTimestamp);
    dispatch(addToArchive(archiveItems));
    dispatch(deleteCompletedTodos());
  }

    return (
        <div className={styles.container}>
        <Button
            onClick={handleResetAndArchiving}
            disabled={!todos.length}
        >
          <RiDeleteBin2Line />
        </Button>
        <Button
            onClick={handleResetCompletedTodosAndArchiving}
            disabled={!completedTodos.length}
        >
          <RiRefreshLine />
        </Button>
      </div>
    )
}

export default TodoActions