import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slices/todosSlice';
import archiveReducer from './slices/archiveSlice';



const store = configureStore({
    reducer: {
        todos: todosReducer,
        archive: archiveReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;