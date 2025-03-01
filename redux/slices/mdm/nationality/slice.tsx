import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { FilterSearch, Form, initialState, sliceName, StateProp } from './types';
import { createNationality, getNationalityById, getNationalityList, updateNationality } from './thunks';
import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { TEXT } from 'wcf-component-lib/src/constants/message';

const nationalitySlice = createSlice({
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
      state.form = { ...state.form, ...action.payload } as Form;
    },
  },
  extraReducers(builder) {
    // *getNationalityList
    builder.addCase(getNationalityList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
      state.list = [];
      state.totalElements = 0;
    });
    builder.addCase(getNationalityList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
    });
    builder.addCase(getNationalityList.rejected, (state) => {
      state.loading = false;
      state.list = [];
    });
    //add Nationality
    builder.addCase(createNationality.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(createNationality.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(createNationality.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    //update Nationality
    builder.addCase(updateNationality.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(updateNationality.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updateNationality.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
    //getById
    builder.addCase(getNationalityById.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(getNationalityById.fulfilled, (state, action) => {
      state.form.loading = false;
      state.form.item = action.payload;
    });
    builder.addCase(getNationalityById.rejected, (state) => {
      state.form.loading = true;
    });
  },
});

export const { setFilter, setForm, resetForm } = nationalitySlice.actions;
export default nationalitySlice.reducer;
export const nationalitySelector = (state: RootState): StateProp => state.nationalitySlice;
