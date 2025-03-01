import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { StateProp, initialState, sliceName } from './types';
import { getTitleList } from './thunks';

const regTitleSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers(builder) {
    // *getTitleList
    builder.addCase(getTitleList.pending, (state) => {
      state.title.titleLoading = true;
    });
    builder.addCase(getTitleList.fulfilled, (state, action) => {
      state.title.titleLoading = false;
      state.title.titleList = action.payload.content;
      state.title.totalElements = action.payload.totalElements;
    });
    builder.addCase(getTitleList.rejected, (state) => {
      state.title.titleLoading = false;
    });
  },
});

export default regTitleSlice.reducer;
export const regTitleSelector = (state: RootState): StateProp => state.regTitleSlice;
