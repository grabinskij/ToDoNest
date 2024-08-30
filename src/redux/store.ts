import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './slices/todosSlice';
import archiveSlice from './slices/archiveSlice';


const store = configureStore({
    reducer: {
        todos: todosSlice,
        archive: archiveSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;