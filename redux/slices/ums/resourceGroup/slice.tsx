import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import {
  createResourceGroup,
  deleteResourceGroup,
  getResourceGroupById,
  getResourceGroupList,
  updateResourceGroup,
} from './thunks';
import { initialState, ItemForm, sliceName, StateProp } from './types';
import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { TEXT } from 'wcf-component-lib/src/constants/message';

const resourceGroupSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    resetForm: (state) => {
      state.item = initialState.item;
    },
    setForm: (state, action) => {
      state.item = { ...state.item, ...action.payload } as ItemForm;
    },
  },
  extraReducers(builder) {
    //getResourceGroupList
    builder.addCase(getResourceGroupList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
    });
    builder.addCase(getResourceGroupList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    });
    builder.addCase(getResourceGroupList.rejected, (state) => {
      state.loading = false;
    });
    //addResourceGroup
    builder.addCase(createResourceGroup.pending, (state) => {
      state.loading = true;
      state.loadData = false;
    });
    builder.addCase(createResourceGroup.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(createResourceGroup.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key: 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    //updateResourceGroup
    builder.addCase(updateResourceGroup.pending, (state) => {
      state.loading = true;
      state.loadData = false;
    });
    builder.addCase(updateResourceGroup.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updateResourceGroup.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key: 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
    //getResourceGroupById
    builder.addCase(getResourceGroupById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getResourceGroupById.fulfilled, (state, action) => {
      state.loading = false;
      state.item = action.payload;
    });
    builder.addCase(getResourceGroupById.rejected, (state) => {
      state.loading = false;
    });
    //deleteResourceGroup
    builder.addCase(deleteResourceGroup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteResourceGroup.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'delete',
        type: 'success',
        description: TEXT.delete.success,
      });
    });
    builder.addCase(deleteResourceGroup.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key: 'delete',
        type: 'error',
        description: TEXT.delete.error,
      });
    });
  },
});

export const { resetForm, setForm } = resourceGroupSlice.actions;
export default resourceGroupSlice.reducer;
export const resourceGroupSelector = (state: RootState): StateProp => state.resourceGroupSlice;
