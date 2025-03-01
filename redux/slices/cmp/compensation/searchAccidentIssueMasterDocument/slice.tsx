import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { StateProp, initialState, sliceName } from './types';
import { getAccidentIssueMasterDocumentInfo } from './thunks';

const accidentIssueMasterDocumentSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers(builder) {
    // *getAccidentIssueMasterDocumentInfo
    builder.addCase(getAccidentIssueMasterDocumentInfo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAccidentIssueMasterDocumentInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.accidentIssueMasterDocumentList = action.payload;
    });
    builder.addCase(getAccidentIssueMasterDocumentInfo.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default accidentIssueMasterDocumentSlice.reducer;
export const accidentIssueMasterDocumentSelector = (state: RootState): StateProp =>
  state.accidentIssueMasterDocumentSlice;
