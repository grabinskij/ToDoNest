import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
      
    },
});



export const selectTodos = (state) => state.todos.todos;

export default todosSlice.reducer;