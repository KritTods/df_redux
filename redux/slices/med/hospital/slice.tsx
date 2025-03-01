import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { StateProp, initialState, sliceName } from './types';
import { getHospitalInfo } from './thunks';

const hospitalSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers(builder) {
    // *getHospitalInfo
    builder.addCase(getHospitalInfo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getHospitalInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.hospitalList = action.payload.content;
      state.totalElements = action.payload.totalElements;
    });
    builder.addCase(getHospitalInfo.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default hospitalSlice.reducer;
export const hospitalSelector = (state: RootState): StateProp => state.hospitalSlice;
