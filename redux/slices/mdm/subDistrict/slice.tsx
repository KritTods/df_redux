import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { FilterSearch, Form, initialState, sliceName, StateProp } from './types';
import { createSubDistrict, getSubDistrictById, getSubDistrictList, updateSubDistrict } from './thunks';
import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { TEXT } from 'wcf-component-lib/src/constants/message';
import { Pagination } from 'wcf-component-lib/src/constants/interface';

const subDistrictSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setPagination: (state, action) => {
      const newState = {
        ...state,
        filter: {
          ...state.filter,
          pagination: {
            ...state.filter.pagination,
            ...action.payload,
          } as Pagination,
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
    // *getSubDistrictList
    builder.addCase(getSubDistrictList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
      state.list = [];
      state.totalElements = 0;
    });
    builder.addCase(getSubDistrictList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
    });
    builder.addCase(getSubDistrictList.rejected, (state) => {
      state.loading = false;
    });
    // *getSubDistrictById
    builder.addCase(getSubDistrictById.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(getSubDistrictById.fulfilled, (state, action) => {
      state.form.loading = false;
      state.form.item = action.payload as Form['item'];
    });
    builder.addCase(getSubDistrictById.rejected, (state) => {
      state.form.loading = false;
    });
    // *createSubDistrict
    builder.addCase(createSubDistrict.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(createSubDistrict.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(createSubDistrict.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    // *updateSubDistrict
    builder.addCase(updateSubDistrict.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(updateSubDistrict.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updateSubDistrict.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
  },
});

export const { setFilter, setForm, resetForm, setPagination } = subDistrictSlice.actions;
export default subDistrictSlice.reducer;
export const subDistrictSelector = (state: RootState): StateProp => state.subDistrictSlice;
