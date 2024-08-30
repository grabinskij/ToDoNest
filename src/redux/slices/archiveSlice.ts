import { createSlice } from '@reduxjs/toolkit';

interface Archive {
    id: number;
    text: string;
    isCompleted: boolean;
    isEdited: boolean;
  }

interface ArchiveState {
    archive: Archive[];
  }
  

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
