import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TodosState, Todo, TodoEditInput } from '../../types/types'
import { RootState } from '../store'

const initialState: TodosState = {
    todos: [],
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodos: (state: TodosState, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload)
        },
        deleteSingleTodo: (state: TodosState,action: PayloadAction<string>) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            )
        },
        setTodoCompletionStatus: (state: TodosState,action: PayloadAction<string>) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : { ...todo }
            )
        },
        editTodo: (state: TodosState, action: PayloadAction<string>) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, isEdited: !todo.isEdited }
                    : { ...todo }
            )
        },
        addEditedTodo: (state: TodosState, action: PayloadAction<TodoEditInput>) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id 
                    ? { ...todo, ...action.payload, isEdited: false }
                    : todo
            )
        },
        resetTodos: (state: TodosState) => {
            state.todos = []
        },
        deleteCompletedTodos: (state: TodosState) => {
            state.todos = state.todos.filter((todo) => !todo.isCompleted)
        },
    },
})

export const {
    setTodos,
    deleteSingleTodo,
    setTodoCompletionStatus,
    editTodo,
    addEditedTodo,
    resetTodos,
    deleteCompletedTodos,
} = todosSlice.actions

export const selectTodos = (state: RootState) => state.todos.todos

export default todosSlice.reducer
