import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { StateProp, initialState, sliceName } from './types';
import {
  getAddressCompanyDistrictsList,
  getAddressCompanyPostalList,
  getAddressCompanySubDistrictsList,
} from './thunks';

const addressCompanyDistrictsSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers(builder) {
    // *getAddressCompanyDistrictsList
    builder.addCase(getAddressCompanyDistrictsList.pending, (state) => {
      state.district.loading = true;
    });
    builder.addCase(getAddressCompanyDistrictsList.fulfilled, (state, action) => {
      state.district.loading = false;
      state.district.addressCompanyDistrictsList = action.payload;
    });
    builder.addCase(getAddressCompanyDistrictsList.rejected, (state) => {
      state.district.loading = false;
    });
    // *getAddressCompanySubDistrictsList
    builder.addCase(getAddressCompanySubDistrictsList.pending, (state) => {
      state.subDistrict.loading = true;
    });
    builder.addCase(getAddressCompanySubDistrictsList.fulfilled, (state, action) => {
      state.subDistrict.loading = false;
      state.subDistrict.addressCompanySubDistrictsList = action.payload;
    });
    builder.addCase(getAddressCompanySubDistrictsList.rejected, (state) => {
      state.subDistrict.loading = false;
    });
    // *getAddressCompanyPostalList
    builder.addCase(getAddressCompanyPostalList.pending, (state) => {
      state.postal.loading = true;
    });
    builder.addCase(getAddressCompanyPostalList.fulfilled, (state, action) => {
      state.postal.loading = false;
      state.postal.addressCompanyPostalList = action.payload;
    });
    builder.addCase(getAddressCompanyPostalList.rejected, (state) => {
      state.postal.loading = false;
    });
  },
});

export default addressCompanyDistrictsSlice.reducer;
export const addressCompanyDistrictsSelector = (state: RootState): StateProp => state.addressCompanySlice;
