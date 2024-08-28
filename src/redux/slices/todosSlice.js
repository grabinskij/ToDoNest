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
      addEditedTodo: (state, action) => {
        state.todos = state.todos.map((todo) => (
          todo.id === action.payload.id
              ? { ...todo, text: action.payload.text, isEdited: false }
              : todo
        ))
      },
      resetTodos: (state) => {
        const timestamp = new Date();
        const archiveItems = state.todos.map((todo) => ({
          todo,
          timestamp,
          key: todo.id
      }));
      // setArchive((prevArchive) => [...prevArchive, ...archiveItems]);
      state.todos = []
      },
      deleteCompletedTodos: (state) => {
        state.todos = state.todos.filter((todo) => !todo.isCompleted)
      }
    },
});


export const { 
    setTodos, 
    deleteSingleTodo, 
    setTodoCompletionStatus,
    editTodo,
    addEditedTodo,
    resetTodos,
    deleteCompletedTodos
} = todosSlice.actions;

export const selectTodos = (state) => state.todos.todos;

export default todosSlice.reducer;