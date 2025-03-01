import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { FilterHistory, FilterSearch, Form, initialState, ItemForm, sliceName, StateProp } from './types';
import {
  createBankBranch,
  getBankBranchById,
  getBankBranchList,
  getBankBranchLogById,
  updateBankBranch,
} from './thunks';
import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { TEXT } from 'wcf-component-lib/src/constants/message';

const bankBranchSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload } as FilterSearch;
      state.loadData = true;
    },
    setFilterHistory: (state, action) => {
      state.history.filterHistory = { ...state.history.filterHistory, ...action.payload } as FilterHistory;
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
    // *getBankBranchList
    builder.addCase(getBankBranchList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
      state.list = [];
      state.totalElements = 0;
    });
    builder.addCase(getBankBranchList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
    });
    builder.addCase(getBankBranchList.rejected, (state) => {
      state.loading = false;
    });
    //getBankLogById
    builder.addCase(getBankBranchLogById.pending, (state) => {
      state.loading = true;
      state.history.loadData = false;
      state.history.listHistory = [];
      state.history.totalElements = 0;
    });
    builder.addCase(getBankBranchLogById.fulfilled, (state, action) => {
      state.loading = false;
      state.history.listHistory = action.payload.content;
      state.history.totalElements = action.payload.totalElements;
    });
    builder.addCase(getBankBranchLogById.rejected, (state) => {
      state.loading = false;
    });
    //add District
    builder.addCase(createBankBranch.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(createBankBranch.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(createBankBranch.rejected, (state) => {
      state.form.loading = false;
    });
    //update District
    builder.addCase(updateBankBranch.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(updateBankBranch.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updateBankBranch.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
    //getById
    builder.addCase(getBankBranchById.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(getBankBranchById.fulfilled, (state, action) => {
      state.form.loading = false;
      state.form.item = action.payload as ItemForm;
    });
    builder.addCase(getBankBranchById.rejected, (state) => {
      state.form.loading = true;
    });
  },
});

export const { setFilter, setForm, resetForm, setFilterHistory } = bankBranchSlice.actions;
export default bankBranchSlice.reducer;
export const bankBranchSelector = (state: RootState): StateProp => state.bankBranchSlice;
