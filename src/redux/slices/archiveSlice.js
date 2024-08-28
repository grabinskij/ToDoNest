import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    archive: [],
};

const archiveSlice = createSlice({
    name: 'archive',
    initialState,
    reducers: {
      
    },
});



export const selectArchive = (state) => state.archive.archive;

export default archiveSlice.reducer;
