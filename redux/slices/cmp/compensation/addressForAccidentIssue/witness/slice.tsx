import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { StateProp, initialState, sliceName } from './types';
import {
  getAddressWitnessDistrictsList,
  getAddressWitnessPostalList,
  getAddressWitnessSubDistrictsList,
} from './thunks';

const addressWitnessDistrictsSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers(builder) {
    // *getAddressWitnessDistrictsList
    builder.addCase(getAddressWitnessDistrictsList.pending, (state) => {
      state.district.loading = true;
    });
    builder.addCase(getAddressWitnessDistrictsList.fulfilled, (state, action) => {
      state.district.loading = false;
      state.district.addressWitnessDistrictsList = action.payload;
    });
    builder.addCase(getAddressWitnessDistrictsList.rejected, (state) => {
      state.district.loading = false;
    });
    // *getAddressWitnessSubDistrictsList
    builder.addCase(getAddressWitnessSubDistrictsList.pending, (state) => {
      state.subDistrict.loading = true;
    });
    builder.addCase(getAddressWitnessSubDistrictsList.fulfilled, (state, action) => {
      state.subDistrict.loading = false;
      state.subDistrict.addressWitnessSubDistrictsList = action.payload;
    });
    builder.addCase(getAddressWitnessSubDistrictsList.rejected, (state) => {
      state.subDistrict.loading = false;
    });
    // *getAddressWitnessPostalList
    builder.addCase(getAddressWitnessPostalList.pending, (state) => {
      state.postal.loading = true;
    });
    builder.addCase(getAddressWitnessPostalList.fulfilled, (state, action) => {
      state.postal.loading = false;
      state.postal.addressWitnessPostalList = action.payload;
    });
    builder.addCase(getAddressWitnessPostalList.rejected, (state) => {
      state.postal.loading = false;
    });
  },
});

export default addressWitnessDistrictsSlice.reducer;
export const addressWitnessDistrictsSelector = (state: RootState): StateProp => state.addressWitnessSlice;
