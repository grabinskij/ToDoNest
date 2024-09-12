import Todo from '../Todo/Todo'
import { useSelector } from 'react-redux';
import styles from './TodoList.module.css'
import { selectTodos } from '../../../redux/slices/todosSlice';
import { RootState } from '../../../redux/store';

const TodoList = () => {
  const todos = useSelector((state: RootState) => selectTodos(state));

  return (
    <div className={styles.container}>
      {todos.length === 0 ? (
        <h2>Todo list is empty</h2>
      ) : (
        <>
          <h2>Todo list:</h2>
          {todos.map((todo) => (
            <Todo 
              key={todo.id}
              todo={todo}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default TodoList