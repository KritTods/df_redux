import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { StateProp, initialState, sliceName } from './types';
import { getSubTsicList } from './thunks';

const regSubTsicSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers(builder) {
    // *getSubTsicList
    builder.addCase(getSubTsicList.pending, (state) => {
      state.subTsic.subTsicLoading = true;
    });
    builder.addCase(getSubTsicList.fulfilled, (state, action) => {
      state.subTsic.subTsicLoading = false;
      state.subTsic.subTsicList = action.payload.content;
      state.subTsic.totalElements = action.payload.totalElements;
    });
    builder.addCase(getSubTsicList.rejected, (state) => {
      state.subTsic.subTsicLoading = false;
    });
  },
});

export default regSubTsicSlice.reducer;
export const regSubTsicSelector = (state: RootState): StateProp => state.regSubTsicSlice;
