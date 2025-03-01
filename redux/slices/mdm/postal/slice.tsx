import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { FilterSearch, Form, initialState, sliceName, StateProp } from './types';
import { createPostal, getPostalById, getPostalList, updatePostal } from './thunks';
import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { TEXT } from 'wcf-component-lib/src/constants/message';
import { Pagination } from 'wcf-component-lib/src/constants/interface';

const postalSlice = createSlice({
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
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload as number;
      state.loadData = true;
    },
  },
  extraReducers(builder) {
    // *getPostalList
    builder.addCase(getPostalList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
      state.list = [];
      state.totalElements = 0;
    });
    builder.addCase(getPostalList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
      state.currentPage = action.payload.number;
    });
    builder.addCase(getPostalList.rejected, (state) => {
      state.loading = false;
    });
    // *getPostalById
    builder.addCase(getPostalById.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(getPostalById.fulfilled, (state, action) => {
      state.form.loading = false;
      state.form.item = action.payload;
    });
    builder.addCase(getPostalById.rejected, (state) => {
      state.form.loading = false;
    });
    // *createPostal
    builder.addCase(createPostal.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(createPostal.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(createPostal.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    // *updatePostal
    builder.addCase(updatePostal.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(updatePostal.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updatePostal.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
  },
});

export const { setFilter, setForm, resetForm, setPagination, setCurrentPage } = postalSlice.actions;
export default postalSlice.reducer;
export const postalSelector = (state: RootState): StateProp => state.postalSlice;
