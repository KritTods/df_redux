import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { StateProp, initialState, sliceName } from './types';
import {
  getAddressSendDocumentDistrictsList,
  getAddressSendDocumentPostalList,
  getAddressSendDocumentSubDistrictsList,
} from './thunks';

const addressSendDocument = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setTemporaryAddressSendDocument(state, action: { payload: StateProp }) {
      return { ...action.payload };
    },
    revertDataAddressSendDocument(state) {
      return { ...state, ...state.temporary };
    },
  },
  extraReducers(builder) {
    // *getAddressSendDocumentDistrictsList
    builder.addCase(getAddressSendDocumentDistrictsList.pending, (state) => {
      state.district.loading = true;
    });
    builder.addCase(getAddressSendDocumentDistrictsList.fulfilled, (state, action) => {
      state.district.loading = false;
      state.district.addressSendDocumentDistrictsList = action.payload;
    });
    builder.addCase(getAddressSendDocumentDistrictsList.rejected, (state) => {
      state.district.loading = false;
    });
    // *getAddressSendDocumentSubDistrictsList
    builder.addCase(getAddressSendDocumentSubDistrictsList.pending, (state) => {
      state.subDistrict.loading = true;
    });
    builder.addCase(getAddressSendDocumentSubDistrictsList.fulfilled, (state, action) => {
      state.subDistrict.loading = false;
      state.subDistrict.addressSendDocumentSubDistrictsList = action.payload;
    });
    builder.addCase(getAddressSendDocumentSubDistrictsList.rejected, (state) => {
      state.subDistrict.loading = false;
    });
    // *getAddressSendDocumentPostalList
    builder.addCase(getAddressSendDocumentPostalList.pending, (state) => {
      state.postal.loading = true;
    });
    builder.addCase(getAddressSendDocumentPostalList.fulfilled, (state, action) => {
      state.postal.loading = false;
      state.postal.addressSendDocumentPostalList = action.payload;
    });
    builder.addCase(getAddressSendDocumentPostalList.rejected, (state) => {
      state.postal.loading = false;
    });
  },
});

export const { setTemporaryAddressSendDocument, revertDataAddressSendDocument } = addressSendDocument.actions;
export default addressSendDocument.reducer;
export const addressSendDocumentDistrictsSelector = (state: RootState): StateProp => state.addressSendDocumentSlice;
