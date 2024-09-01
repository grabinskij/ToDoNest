import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { TodosState, Todo } from '../../types/types';
import { RootState } from '../store';
// import { AppDispatch, RootState } from '../../redux/store';

const initialState: TodosState = {
    todos: [],
};

// export const archiveAndResetTodos = createAsyncThunk<void, void, { dispatch: AppDispatch, state: RootState }>(
//   'todos/archiveAndReset',
//   async (_, { dispatch, getState }) => {
//       const state = getState();
//       const todos = state.todos.todos;

//       const archiveTimestamp = new Date().toISOString();
//       const archiveItems: ArchivedTodo[] = todos.map(todo => ({
//           todo,
//           archiveTimestamp,
//           key: todo.id,
//       }));

//       dispatch(addToArchive(archiveItems));
//       dispatch(resetTodos());
//   }
// );


const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
      setTodos: (state: TodosState, action: PayloadAction<Todo>) => {
        state.todos.push(action.payload);
      },
      deleteSingleTodo: (state: TodosState, action: PayloadAction<string>) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      },
      setTodoCompletionStatus: (state: TodosState, action: PayloadAction<string>) => {
        state.todos = state.todos.map((todo) => (
            todo.id === action.payload
                ? {...todo, isCompleted: !todo.isCompleted}
                : {...todo}
        ))
      },
      editTodo: (state: TodosState, action: PayloadAction<string>) => {
        state.todos = state.todos.map((todo) => (
            todo.id === action.payload
            ? {...todo, isEdited: !todo.isEdited}
            : {...todo}
        ))
      },
      addEditedTodo: (state: TodosState, action: PayloadAction<{ id: string; text: string }>) => {
        state.todos = state.todos.map((todo) => (
          todo.id === action.payload.id
              ? { ...todo, text: action.payload.text, isEdited: false }
              : todo
        ))
      },
      resetTodos: (state: TodosState) => {
        state.todos = [];
      },
      deleteCompletedTodos: (state: TodosState) => {
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

export const selectTodos = (state: RootState) => state.todos.todos;


export default todosSlice.reducer;
