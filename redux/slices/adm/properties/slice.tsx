import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { initialState, sliceName, StateProp } from './types';
import { getPropertiesByName, getPropertiesForAccidentIssue } from './thunks';

const propertiesSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers(builder) {
    // *getPropertiesByName
    builder.addCase(getPropertiesByName.pending, (state) => {
      state.loading = true;
      state.loadData = false;
    });
    builder.addCase(getPropertiesByName.fulfilled, (state, action) => {
      state.loading = false;
      state.properties = { ...state.properties, ...action.payload };
    });
    builder.addCase(getPropertiesByName.rejected, (state) => {
      state.loading = false;
    });
    // *getPropertiesForAccidentIssue
    builder.addCase(getPropertiesForAccidentIssue.pending, (state) => {
      state.loading = true;
      state.loadData = false;
    });
    builder.addCase(getPropertiesForAccidentIssue.fulfilled, (state, action) => {
      state.loading = false;
      state.properties = { ...state.properties, ...action.payload };
    });
    builder.addCase(getPropertiesForAccidentIssue.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default propertiesSlice.reducer;
export const propertiesSelector = (state: RootState): StateProp => state.propertiesSlice;
