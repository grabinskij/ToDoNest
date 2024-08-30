import React, { useState, useEffect } from 'react'
import Button from '../../../UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import styles from './TodoForm.module.css'
import { setTodos, selectTodos, addEditedTodo } from '../../../redux/slices/todosSlice';
import createTodoWithId from '../../../utils/createTodoWithId';

const TodoForm = () => {

const [text, setText] = useState('');
const [editTodoMode, setEditTodoMode] = useState(false)
const [currentTodoId, setCurrentTodoId] = useState(null)
const todos = useSelector(selectTodos);
const dispatch = useDispatch();


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

const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length) {
        if(editTodoMode) {
            dispatch(addEditedTodo({
                id: currentTodoId,
                text
            }))
            setEditTodoMode(false)
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