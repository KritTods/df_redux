import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { FilterSearch, Form, initialState, sliceName, StateProp } from './types';
import { createDistrict, getDistrictById, getDistrictList, updateDistrict } from './thunks';
import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { TEXT } from 'wcf-component-lib/src/constants/message';

const districtSlice = createSlice({
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
    // *getDistrictList
    builder.addCase(getDistrictList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
      state.list = [];
      state.totalElements = 0;
    });
    builder.addCase(getDistrictList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
    });
    builder.addCase(getDistrictList.rejected, (state) => {
      state.loading = false;
    });
    //add District
    builder.addCase(createDistrict.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(createDistrict.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(createDistrict.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    //update District
    builder.addCase(updateDistrict.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(updateDistrict.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updateDistrict.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
    //getById
    builder.addCase(getDistrictById.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(getDistrictById.fulfilled, (state, action) => {
      state.form.loading = false;
      state.form.item = action.payload as Form['item'];
    });
    builder.addCase(getDistrictById.rejected, (state) => {
      state.form.loading = false;
    });
  },
});

export const { setFilter, setForm, resetForm } = districtSlice.actions;
export default districtSlice.reducer;
export const districtSelector = (state: RootState): StateProp => state.districtSlice;
