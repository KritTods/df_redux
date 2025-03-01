import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { FilterSearch, initialState, ItemForm, sliceName, StateProp } from './types';
import { createPage, deletePage, getPageById, getPagesListByModuleId, updatePage } from './thunks';
import { TEXT } from 'wcf-component-lib/src/constants/message';
import { BaseToastNotification } from 'wcf-component-lib/src/components';

const pagesSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    cleanUp: () => initialState,
    setList: (state) => {
      state.list = [];
    },
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
    toggleModal: (
      state,
      action: {
        payload: {
          isOpen: boolean;
          resourceAccessId: number[];
        };
      },
    ) => {
      if (action.payload.isOpen) {
        state.modal = {
          isOpen: true,
          resourceAccessId: [],
        };
      } else {
        state.modal = {
          isOpen: false,
          resourceAccessId: [],
        };
      }
    },
    saveResourceAccess: (state, action) => {
      state.modal.resourceAccessId = action.payload as number[];
    },
  },
  extraReducers(builder) {
    //getPageList
    builder.addCase(getPagesListByModuleId.pending, (state) => {
      state.loading = true;
      state.loadData = false;
      state.list = [];
      state.totalElements = 0;
    });
    builder.addCase(getPagesListByModuleId.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
    });
    builder.addCase(getPagesListByModuleId.rejected, (state) => {
      state.loading = false;
    });
    // addPage
    builder.addCase(createPage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createPage.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key : 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(createPage.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key : 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    // updatePage
    builder.addCase(updatePage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updatePage.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key : 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updatePage.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key : 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
    //getById
    builder.addCase(getPageById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPageById.fulfilled, (state, action) => {
      state.loading = false;
      state.form = action.payload;
    });
    builder.addCase(getPageById.rejected, (state) => {
      state.loading = false;
    });
    //deletePage
    builder.addCase(deletePage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deletePage.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key : 'delete',
        type: 'success',
        description: TEXT.delete.success,
      });
    });
    builder.addCase(deletePage.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key : 'delete',
        type: 'error',
        description: TEXT.delete.error,
      });
    });
  },
});

export const { cleanUp, setList, setFilter, resetForm, toggleModal, saveResourceAccess } = pagesSlice.actions;
export default pagesSlice.reducer;
export const pagesSelector = (state: RootState): StateProp => state.pagesSlice;
