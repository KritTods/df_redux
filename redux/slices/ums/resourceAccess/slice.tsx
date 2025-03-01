import { createSlice } from '@reduxjs/toolkit';
import { initialState, sliceName, StateProp } from './types';
import { RootState } from '../../../store';
import {
  createResourceAccess,
  deleteResourceAccess,
  getResourceAccessByResourceId,
  updateResourceAccess,
} from './thunks';
import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { TEXT } from 'wcf-component-lib/src/constants/message';

const resourceAccessSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    clearResourceAccess: (state) => {
      state.list = [];
    },
    resetState: () => initialState,
  },
  extraReducers(builder) {
    //getResourceAccessList
    builder.addCase(getResourceAccessByResourceId.pending, (state) => {
      state.loading = true;
      state.loadData = false;
    });
    builder.addCase(getResourceAccessByResourceId.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    });
    builder.addCase(getResourceAccessByResourceId.rejected, (state) => {
      state.loading = false;
    });
    //createResourceAccess
    builder.addCase(createResourceAccess.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createResourceAccess.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key : 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(createResourceAccess.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key : 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    //updateResourceAccess
    builder.addCase(updateResourceAccess.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateResourceAccess.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key : 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updateResourceAccess.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key : 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
    //deleteResourceAccess
    builder.addCase(deleteResourceAccess.pending, (state) => {
      state.loading = true;
      state.loadData = false;
    });
    builder.addCase(deleteResourceAccess.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key : 'delete',
        type: 'success',
        description: TEXT.delete.success,
      });
    });
    builder.addCase(deleteResourceAccess.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key : 'delete',
        type: 'error',
        description: TEXT.delete.error,
      });
    });
  },
});

export default resourceAccessSlice.reducer;
export const resourceAccessSelector = (state: RootState): StateProp => state.resourceAccessSlice;
export const { clearResourceAccess, resetState } = resourceAccessSlice.actions;
