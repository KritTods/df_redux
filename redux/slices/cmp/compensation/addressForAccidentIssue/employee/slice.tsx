import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { StateProp, initialState, sliceName } from './types';
import {
  getAddressEmployeeDistrictsList,
  getAddressEmployeePostalList,
  getAddressEmployeeSubDistrictsList,
} from './thunks';

const addressEmployeeDistrictsSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers(builder) {
    // *getAddressEmployeeDistrictsList
    builder.addCase(getAddressEmployeeDistrictsList.pending, (state) => {
      state.district.loading = true;
    });
    builder.addCase(getAddressEmployeeDistrictsList.fulfilled, (state, action) => {
      state.district.loading = false;
      state.district.addressEmployeeDistrictsList = action.payload;
    });
    builder.addCase(getAddressEmployeeDistrictsList.rejected, (state) => {
      state.district.loading = false;
    });
    // *getAddressEmployeeSubDistrictsList
    builder.addCase(getAddressEmployeeSubDistrictsList.pending, (state) => {
      state.subDistrict.loading = true;
    });
    builder.addCase(getAddressEmployeeSubDistrictsList.fulfilled, (state, action) => {
      state.subDistrict.loading = false;
      state.subDistrict.addressEmployeeSubDistrictsList = action.payload;
    });
    builder.addCase(getAddressEmployeeSubDistrictsList.rejected, (state) => {
      state.subDistrict.loading = false;
    });
    // *getAddressEmployeePostalList
    builder.addCase(getAddressEmployeePostalList.pending, (state) => {
      state.postal.loading = true;
    });
    builder.addCase(getAddressEmployeePostalList.fulfilled, (state, action) => {
      state.postal.loading = false;
      state.postal.addressEmployeePostalList = action.payload;
    });
    builder.addCase(getAddressEmployeePostalList.rejected, (state) => {
      state.postal.loading = false;
    });
  },
});

export default addressEmployeeDistrictsSlice.reducer;
export const addressEmployeeDistrictsSelector = (state: RootState): StateProp => state.addressEmployeeSlice;
