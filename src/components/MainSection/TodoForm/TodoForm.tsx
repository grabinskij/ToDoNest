import { useState, useEffect, FormEvent } from 'react'
import { FC } from 'react';
import { RootState, AppDispatch } from '../../../redux/store';
import Button from '../../../UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import styles from './TodoForm.module.css'
import { setTodos, selectTodos, addEditedTodo } from '../../../redux/slices/todosSlice';
import createTodoWithId from '../../../utils/createTodoWithId';

const TodoForm: FC = () => {

const [text, setText] = useState<string>('');
const [editTodoMode, setEditTodoMode] = useState<boolean>(false)
const [currentTodoId, setCurrentTodoId] = useState<string | null>(null)
const todos = useSelector((state: RootState) => selectTodos(state));
const dispatch = useDispatch<AppDispatch>();


useEffect(() => {
    const editedTodo = todos.find(todo => todo.isEdited)
    if (editedTodo) {
        setText(editedTodo.text)
        setEditTodoMode(true)
        setCurrentTodoId(editedTodo.id)
    } else {
        setText('')
        setEditTodoMode(false)
        setCurrentTodoId(null)
    }
}, [todos])

const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if(text.trim().length) {
        if(editTodoMode) {
            if (currentTodoId !== null) {
                dispatch(addEditedTodo({
                  id: currentTodoId,
                  text
                }));
                setEditTodoMode(false);
              } else {
                console.error("Cannot edit todo: currentTodoId is null");
              }
        } else {
            dispatch(setTodos(createTodoWithId(text))); 
        }
        setText('')
        setCurrentTodoId(null)
    }
}

  return (
    <div className={styles.container}>
        <form onSubmit={handleSubmit}>
            <input
                value={text}
                placeholder='Add task...'
                onChange={(e) => setText(e.target.value)}
            />
            <Button type="submit" title={editTodoMode ? "Edit" : "Submit"}>
                    {editTodoMode ? "Edit" : "Submit"}
            </Button>
        </form>
    </div>
  )
}

export default TodoForm