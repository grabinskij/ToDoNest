import { createSlice } from '@reduxjs/toolkit';
import { ArchiveState,
  //  ArchivedTodo 
  } from '../../types/types'; 
  

const initialState: ArchiveState = {
    archive: [],
};

const archiveSlice = createSlice({
    name: 'archive',
    initialState,
    reducers: {
      
    },
});



export const selectArchive = (state: { archive: ArchiveState }) => state.archive.archive;

export default archiveSlice.reducer;
