import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { FilterSearch, Form, initialState, sliceName, StateProp } from './types';
import { createPostOffice, getPostOfficeById, getPostOfficeList, updatePostOffice } from './thunks';
import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { TEXT } from 'wcf-component-lib/src/constants/message';
import { Pagination } from 'wcf-component-lib/src/constants/interface';

const postOfficeSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setPagination: (state, action) => {
      const pagination = {
        ...state.filter.pagination,
        ...action.payload,
      } as Pagination;

      const newState = {
        ...state,
        filter: {
          ...state.filter,
          pagination,
        },
        loadData: true,
      };

      return newState;
    },
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload } as FilterSearch;
      state.loadData = true;
    },
    resetForm: (state) => {
      state.form = initialState.form;
    },
    setForm: (state, action) => {
      state.form = { ...state.form, ...action.payload } as Form;
    },
  },
  extraReducers(builder) {
    // *getPostalList
    builder.addCase(getPostOfficeList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
      state.list = [];
      state.totalElements = 0;
    });
    builder.addCase(getPostOfficeList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
    });
    builder.addCase(getPostOfficeList.rejected, (state) => {
      state.loading = false;
    });
    // *createPostOffice
    builder.addCase(createPostOffice.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(createPostOffice.fulfilled, (state, action) => {
      state.form.loading = false;
      state.loadData = true;
      state.form.item = action.payload;
      BaseToastNotification({
        key: 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(createPostOffice.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    // *updatePostOffice
    builder.addCase(updatePostOffice.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(updatePostOffice.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updatePostOffice.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
    // *getPostOfficeById
    builder.addCase(getPostOfficeById.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(getPostOfficeById.fulfilled, (state, action) => {
      state.form.loading = false;
      state.form.item = action.payload;
    });
    builder.addCase(getPostOfficeById.rejected, (state) => {
      state.form.loading = false;
    });
  },
});

export const { setFilter, setForm, resetForm, setPagination } = postOfficeSlice.actions;
export default postOfficeSlice.reducer;
export const postOfficeSelector = (state: RootState): StateProp => state.postOfficeSlice;
