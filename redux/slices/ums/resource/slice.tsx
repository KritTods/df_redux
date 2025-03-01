import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { createResource, deleteResource, getResourceById, getResourceList, updateResource } from './thunks';
import { FilterSearch, initialState, ItemForm, sliceName, StateProp } from './types';
import { TEXT } from 'wcf-component-lib/src/constants/message';
import { ResourceAccessItem } from '../resourceAccess';
import { BaseToastNotification } from 'wcf-component-lib/src/components';

const resourceSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload } as FilterSearch;
      state.loadData = true;
    },
    resetForm: (state) => {
      state.form = initialState.form;
    },
    setForm: (state, action) => {
      state.form = { ...state.form, ...action.payload } as ItemForm;
    },

    toggleModal: (state, action: { payload: { isOpen: boolean; resourceAccessItem?: ResourceAccessItem | null } }) => {
      if (action.payload.isOpen) {
        state.modal = {
          isOpen: true,
          resourceAccessItem: action.payload.resourceAccessItem as ResourceAccessItem,
        };
      } else {
        state.modal = {
          isOpen: false,
          resourceAccessItem: null,
        };
      }
    },
  },
  extraReducers(builder) {
    //getResourceList
    builder.addCase(getResourceList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
      state.list = [];
      state.totalElements = 0;
    });
    builder.addCase(getResourceList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
    });
    builder.addCase(getResourceList.rejected, (state) => {
      state.loading = false;
    });
    //addResource
    builder.addCase(createResource.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createResource.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key : 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(createResource.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key : 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    //updateResource
    builder.addCase(updateResource.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateResource.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key : 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updateResource.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key : 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
    //getById
    builder.addCase(getResourceById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getResourceById.fulfilled, (state, action) => {
      state.loading = false;
      state.form = action.payload;
    });
    builder.addCase(getResourceById.rejected, (state) => {
      state.loading = false;
    });
    //deleteResource
    builder.addCase(deleteResource.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteResource.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key : 'delete',
        type: 'success',
        description: TEXT.delete.success,
      });
    });
    builder.addCase(deleteResource.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key : 'delete',
        type: 'error',
        description: TEXT.delete.error,
      });
    });
  },
});

export default resourceSlice.reducer;
export const resourceSelector = (state: RootState): StateProp => state.resourceSlice;
export const { setFilter, toggleModal, resetForm } = resourceSlice.actions;
