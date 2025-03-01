import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { FilterSearch, Form, initialState, sliceName, StateProp } from './types';
import { createProvince, getProvinceById, getProvinceList, updateProvince } from './thunks';
import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { TEXT } from 'wcf-component-lib/src/constants/message';
import { Pagination } from 'wcf-component-lib/src/constants/interface';

const provinceSlice = createSlice({
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
    // *getProvinceList
    builder.addCase(getProvinceList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
      state.list = [];
      state.totalElements = 0;
    });
    builder.addCase(getProvinceList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
    });
    builder.addCase(getProvinceList.rejected, (state) => {
      state.loading = false;
    });
    //add Province
    builder.addCase(createProvince.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(createProvince.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(createProvince.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    // update Province
    builder.addCase(updateProvince.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(updateProvince.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updateProvince.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
    //getById
    builder.addCase(getProvinceById.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(getProvinceById.fulfilled, (state, action) => {
      state.form.loading = false;
      state.form.item = action.payload;
    });
    builder.addCase(getProvinceById.rejected, (state) => {
      state.form.loading = false;
    });
  },
});

export const { setFilter, setForm, resetForm, setPagination } = provinceSlice.actions;
export default provinceSlice.reducer;
export const provinceSelector = (state: RootState): StateProp => state.provinceSlice;
