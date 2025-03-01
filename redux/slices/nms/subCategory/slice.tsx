import { createSlice } from '@reduxjs/toolkit';
import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { RootState } from '@/redux/store';
import { FilterSearch, Form, initialState, sliceName, StateProp } from './types';
import { getSubCategoryList, getById, addSubCategory, updateSubCategory } from './thunks';
import { TEXT } from 'wcf-component-lib/src/constants/message';

const subCategorySlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    cleanUp: () => initialState,
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
    setSelected: (state, action) => {
      state.selected = action.payload as [];
    },
  },
  extraReducers(builder) {
    // * getCategoryList
    builder.addCase(getSubCategoryList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
    });
    builder.addCase(getSubCategoryList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    });
    builder.addCase(getSubCategoryList.rejected, (state) => {
      state.loading = false;
    });
    // * getById
    builder.addCase(getById.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(getById.fulfilled, (state, action) => {
      state.form.loading = false;
      state.form.item = action.payload as Form['item'];
    });
    builder.addCase(getById.rejected, (state) => {
      state.form.loading = false;
    });
    // * add
    builder.addCase(addSubCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addSubCategory.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(addSubCategory.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key: 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    // * update
    builder.addCase(updateSubCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateSubCategory.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updateSubCategory.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key: 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
  },
});

export const { cleanUp, setFilter, resetForm, setForm, setSelected } = subCategorySlice.actions;
export default subCategorySlice.reducer;
export const subCategorySelector = (state: RootState): StateProp => state.subCategorySlice;
