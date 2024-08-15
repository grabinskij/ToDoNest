import React, { useState } from 'react'
import Button from '../../../UI/Button/Button';
import styles from './TodoForm.module.css'

const TodoForm = ({onAddTodo}) => {

const [text, setText] = useState('');

const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length) {
        onAddTodo(text)
        setText('')
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
            <Button type='submit' title='Submit'>Submit</Button>
        </form>
    </div>
  )
}

export default TodoForm