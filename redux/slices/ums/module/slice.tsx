import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { InitialState, initialState, ItemForm, sliceName } from './types';
import { createModule, deleteModule, getModuleById, getModulesList, updateModule } from './thunks';

import { TEXT } from 'wcf-component-lib/src/constants/message';
import { BaseToastNotification } from 'wcf-component-lib/src/components';

const modulesSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    cleanUp: () => initialState,
    toggleModal: (state, action: { payload: { type: string; moduleId?: number } }) => {
      if (action.payload.type === 'add') {
        state.modal = {
          isOpen: true,
          moduleId: null,
        };
      } else if (action.payload.type === 'edit') {
        state.modal = {
          isOpen: true,
          moduleId: action.payload.moduleId ?? null,
        };
      } else {
        state.modal = {
          isOpen: false,
          moduleId: null,
        };
      }
    },
    resetForm: (state) => {
      state.item = initialState.item;
    },
    setForm: (state, action) => {
      state.item = { ...state.item, ...action.payload } as ItemForm;
    },
  },
  extraReducers(builder) {
    //getModuleList
    builder.addCase(getModulesList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
    });
    builder.addCase(getModulesList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    });
    builder.addCase(getModulesList.rejected, (state) => {
      state.loading = false;
    });
    //createModule
    builder.addCase(createModule.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createModule.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key : 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(createModule.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key : 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    //updateModule
    builder.addCase(updateModule.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateModule.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key : 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updateModule.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key : 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
    //getModuleById
    builder.addCase(getModuleById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getModuleById.fulfilled, (state, action) => {
      state.loading = false;
      state.item = action.payload;
    });
    builder.addCase(getModuleById.rejected, (state) => {
      state.loading = false;
    });
    //deleteModule
    builder.addCase(deleteModule.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteModule.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key : 'delete',
        type: 'success',
        description: TEXT.delete.success,
      });
    });
    builder.addCase(deleteModule.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key : 'delete',
        type: 'error',
        description: TEXT.delete.error,
      });
    });
  },
});

export const { cleanUp, toggleModal, resetForm, setForm } = modulesSlice.actions;
export default modulesSlice.reducer;
export const modulesSelector = (state: RootState): InitialState => state.modulesSlice;
