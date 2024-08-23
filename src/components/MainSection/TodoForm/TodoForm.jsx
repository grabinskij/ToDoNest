import React, { useState, useEffect } from 'react'
import Button from '../../../UI/Button/Button';
import styles from './TodoForm.module.css'

const TodoForm = ({todos, onAddTodo, onAddEditTodo}) => {
const [text, setText] = useState('');
const [editTodoMode, setEditTodoMode] = useState(false)
const [currentTodoId, setCurrentTodoId] = useState(null)

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
            onAddEditTodo({
                id: currentTodoId,
                text
            })
            setEditTodoMode(false)
        } else {
            onAddTodo(text)
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