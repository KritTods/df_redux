import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { InitialState, initialState, sliceName } from './types';
import { getPageLevelsList, getPageLevelsByPageId, createPageLevel } from './thunks';
import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { TEXT } from 'wcf-component-lib/src/constants/message';

const pageLevelsSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    cleanUp: () => initialState,
    setListPageLevelsByPageId: (state) => {
      state.listPageLevelsByPageId = [];
    },
  },
  extraReducers(builder) {
    //  * getPageLevelsList
    builder.addCase(getPageLevelsList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPageLevelsList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    });
    builder.addCase(getPageLevelsList.rejected, (state) => {
      state.loading = false;
    });
    //  * getPageLevelsByPageId
    builder.addCase(getPageLevelsByPageId.pending, (state) => {
      state.loadingByPageId = true;
      state.loadData = false;
    });
    builder.addCase(getPageLevelsByPageId.fulfilled, (state, action) => {
      state.loadingByPageId = false;
      state.listPageLevelsByPageId = action.payload;
    });
    builder.addCase(getPageLevelsByPageId.rejected, (state) => {
      state.loadingByPageId = false;
    });
    //  * createPageLevel
    builder.addCase(createPageLevel.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createPageLevel.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key : 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(createPageLevel.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key : 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
  },
});

export const { cleanUp, setListPageLevelsByPageId } = pageLevelsSlice.actions;
export default pageLevelsSlice.reducer;
export const pageLevelsSelector = (state: RootState): InitialState => state.pageLevelsSlice;
