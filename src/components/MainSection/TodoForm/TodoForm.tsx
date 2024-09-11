import { useState, useEffect, FormEvent } from 'react'
import { FC } from 'react'
import { RootState, AppDispatch } from '../../../redux/store'
import Button from '../../../UI/Button/Button'
import TodoActions from '../TodoActions/TodoActions'
import { useDispatch, useSelector } from 'react-redux'
import styles from './TodoForm.module.css'
import {
    setTodos,
    selectTodos,
    addEditedTodo,
} from '../../../redux/slices/todosSlice'
import createTodoWithId from '../../../utils/createTodoWithId'

const TodoForm: FC = () => {
    const [title, setTitle] = useState<string>('')
    const [dueDate, setDueDate] = useState<string>('')
    const [time, setTime] = useState<string>('')
    const [note, setNote] = useState<string>('')
    const [editTodoMode, setEditTodoMode] = useState<boolean>(false)
    const [currentTodoId, setCurrentTodoId] = useState<string | null>(null)

    const todos = useSelector((state: RootState) => selectTodos(state))
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        const editedTodo = todos.find((todo) => todo.isEdited)
        if (editedTodo) {
            setTitle(editedTodo.title || '')
            setDueDate(editedTodo.dueDate || '')
            setTime(editedTodo.time || '')
            setNote(editedTodo.note || '')
            setEditTodoMode(true)
            setCurrentTodoId(editedTodo.id)
        } else {
            setTitle('')
            setDueDate('')
            setTime('')
            setNote('')
            setEditTodoMode(false)
            setCurrentTodoId(null)
        }
    }, [todos])

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (title.trim().length) {
            if (editTodoMode) {
                if (currentTodoId !== null) {
                    dispatch(
                        addEditedTodo({
                            id: currentTodoId,
                            title,
                            dueDate,
                            time,
                            note,
                        })
                    )
                    setEditTodoMode(false)
                } else {
                    console.error('Cannot edit todo: currentTodoId is null')
                }
            } else {
                dispatch(setTodos(createTodoWithId({ title, dueDate, note })))
            }
            setTitle('')
            setDueDate('')
            setTime('')
            setNote('')
            setCurrentTodoId(null)
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <div className={styles.formContainer}>
                    <div className={styles.inputsContainer}>
                        <input
                            value={title}
                            placeholder="Add task title..."
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            type="date"
                            value={dueDate}
                            placeholder="Due Date"
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                        <input
                            type="time"
                            value={time}
                            placeholder="Time"
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </div>
                    <textarea
                        value={note}
                        placeholder="Add a note..."
                        onChange={(e) => setNote(e.target.value)}
                    />
                </div>
                <div className={styles.actionsContainer}>
                    <TodoActions />
                    <Button
                        type="submit"
                        title={editTodoMode ? 'Edit' : 'Submit'}
                    >
                        {editTodoMode ? 'Edit' : 'Submit'}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm
