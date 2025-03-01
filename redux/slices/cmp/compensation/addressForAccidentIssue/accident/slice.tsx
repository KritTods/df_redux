import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { StateProp, initialState, sliceName } from './types';
import {
  getAddressAccidentDistrictsList,
  getAddressAccidentPostalList,
  getAddressAccidentSubDistrictsList,
} from './thunks';

const addressAccidentSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers(builder) {
    // *getAddressAccidentDistrictsList
    builder.addCase(getAddressAccidentDistrictsList.pending, (state) => {
      state.district.loading = true;
    });
    builder.addCase(getAddressAccidentDistrictsList.fulfilled, (state, action) => {
      state.district.loading = false;
      state.district.addressAccidentDistrictsList = action.payload;
    });
    builder.addCase(getAddressAccidentDistrictsList.rejected, (state) => {
      state.district.loading = false;
    });
    // *getAddressAccidentSubDistrictsList
    builder.addCase(getAddressAccidentSubDistrictsList.pending, (state) => {
      state.subDistrict.loading = true;
    });
    builder.addCase(getAddressAccidentSubDistrictsList.fulfilled, (state, action) => {
      state.subDistrict.loading = false;
      state.subDistrict.addressAccidentSubDistrictsList = action.payload;
    });
    builder.addCase(getAddressAccidentSubDistrictsList.rejected, (state) => {
      state.subDistrict.loading = false;
    });
    // *getAddressAccidentPostalList
    builder.addCase(getAddressAccidentPostalList.pending, (state) => {
      state.postal.loading = true;
    });
    builder.addCase(getAddressAccidentPostalList.fulfilled, (state, action) => {
      state.postal.loading = false;
      state.postal.addressAccidentPostalList = action.payload;
    });
    builder.addCase(getAddressAccidentPostalList.rejected, (state) => {
      state.postal.loading = false;
    });
  },
});

export default addressAccidentSlice.reducer;
export const addressAccidentSelector = (state: RootState): StateProp => state.addressAccidentSlice;
