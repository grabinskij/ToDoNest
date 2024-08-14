import React, { useState } from 'react'

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
    <div>
        <form onSubmit={handleSubmit}>
            <input
                value={text}
                placeholder='Add task...'
                onChange={(e) => setText(e.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default TodoForm