import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArchiveState, ArchivedTodo } from '../../types/types'; 
  

const initialState: ArchiveState = {
    archive: [],
};


const archiveSlice = createSlice({
    name: 'archive',
    initialState,
    reducers: {
      addToArchive: (state: ArchiveState, action: PayloadAction<ArchivedTodo[]>) => {
        state.archive.push(...action.payload);
      }
    },
});

export const { addToArchive } = archiveSlice.actions;

export const selectArchive = (state: { archive: ArchiveState }) => state.archive.archive;

export default archiveSlice.reducer;
