import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
      setTodos: (state, action) => {
        state.todos.push(action.payload);
      },
      deleteSingleTodo: (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      },
      setTodoCompletionStatus: (state, action) => {
        state.todos = state.todos.map((todo) => (
            todo.id === action.payload
                ? {...todo, isCompleted: !todo.isCompleted}
                : {...todo}
        ))
      },
      editTodo: (state, action) => {
        state.todos = state.todos.map((todo) => (
            todo.id === action.payload
            ? {...todo, isEdited: !todo.isEdited}
            : {...todo}
        ))
      },
    },
});


export const { 
    setTodos, 
    deleteSingleTodo, 
    setTodoCompletionStatus,
    editTodo,
} = todosSlice.actions;

export const selectTodos = (state) => state.todos.todos;

export default todosSlice.reducer;