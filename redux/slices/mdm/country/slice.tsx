import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { FilterSearch, Form, initialState, sliceName, StateProp } from './types';
import { getCountryList, createCountry, updateCountry, getCountryId } from './thunks';
import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { TEXT } from 'wcf-component-lib/src/constants/message';

const countrySlice = createSlice({
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
    // * getCountryList
    builder.addCase(getCountryList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
    });
    builder.addCase(getCountryList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
      state.currentPage = action.payload.number;
    });
    builder.addCase(getCountryList.rejected, (state) => {
      state.loading = false;
    });
    //add Bank
    builder.addCase(createCountry.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(createCountry.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(createCountry.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    //update Bank
    builder.addCase(updateCountry.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(updateCountry.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updateCountry.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
    //getById
    builder.addCase(getCountryId.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(getCountryId.fulfilled, (state, action) => {
      state.form.loading = false;
      state.form.item = action.payload as Form['item'];
    });
    builder.addCase(getCountryId.rejected, (state) => {
      state.form.loading = true;
    });
  },
});

export const { cleanUp, setFilter, resetForm, setForm, setSelected } = countrySlice.actions;
export default countrySlice.reducer;
export const countrySelector = (state: RootState): StateProp => state.countrySlice;
