import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { initialState, sliceName, StateProp } from './types';
import { getRegionList } from './thunks';

const propertySlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers(builder) {
    // *getPropertyList
    builder.addCase(getRegionList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
      state.list = [];
    });
    builder.addCase(getRegionList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.list;
    });
    builder.addCase(getRegionList.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default propertySlice.reducer;
export const regionSelector = (state: RootState): StateProp => state.regionSlice;
