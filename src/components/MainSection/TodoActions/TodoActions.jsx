import React from 'react'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import styles from './TodoActions.module.css'
import Button from '../../../UI/Button/Button'


const TodoActions = ({onResetTodos, onDeleteCompletedTodos, completedTodos}) => {
    return (
        <div className={styles.container}>
        <Button
            onClick={onResetTodos}
        >
          <RiDeleteBin2Line />
        </Button>
        <Button
            onClick={onDeleteCompletedTodos}
            disabled={!completedTodos}
        >
          <RiRefreshLine />
        </Button>
      </div>
    )
}

export default TodoActions