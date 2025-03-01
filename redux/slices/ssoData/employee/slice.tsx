import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { StateProp, initialState, sliceName } from './types';
import { getEmploymentsSsoNum } from './thunks';

const employeeSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers(builder) {
    // *getEmploymentsSsoNum
    builder.addCase(getEmploymentsSsoNum.pending, (state) => {
      state.employments.loading = true;
    });
    builder.addCase(getEmploymentsSsoNum.fulfilled, (state, action) => {
      state.employments.loading = false;
      state.employments.data = action.payload;
    });
    builder.addCase(getEmploymentsSsoNum.rejected, (state) => {
      state.employments.loading = false;
    });
  },
});

export default employeeSlice.reducer;
export const employeeSelector = (state: RootState): StateProp => state.employeeSlice;
