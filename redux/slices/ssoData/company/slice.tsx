import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { StateProp, initialState, sliceName } from './types';
import { getCompanyInfo } from './thunks';

const companySlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers(builder) {
    // *getCompanyInfo
    builder.addCase(getCompanyInfo.pending, (state) => {
      state.company.loading = true;
    });
    builder.addCase(getCompanyInfo.fulfilled, (state, action) => {
      state.company.loading = false;
      state.company.data = action.payload;
    });
    builder.addCase(getCompanyInfo.rejected, (state) => {
      state.company.loading = false;
    });
  },
});

export default companySlice.reducer;
export const companySelector = (state: RootState): StateProp => state.companySlice;
