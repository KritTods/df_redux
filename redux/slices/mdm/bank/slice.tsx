import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { FilterHistory, FilterSearch, Form, initialState, sliceName, StateProp } from './types';
import { createBank, getBankById, getBankList, getBankLogById, updateBank } from './thunks';
import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { TEXT } from 'wcf-component-lib/src/constants/message';

const bankSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload } as FilterSearch;
      state.loadData = true;
    },
    setFilterHistory: (state, action) => {
      state.history.filterHistory = { ...state.history.filterHistory, ...action.payload } as FilterHistory;
      state.history.loadData = true;
    },
    resetForm: (state) => {
      state.form = initialState.form;
    },
    setForm: (state, action) => {
      state.form = { ...state.form, ...action.payload } as Form;
    },
  },
  extraReducers(builder) {
    // *getBankList
    builder.addCase(getBankList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
      state.list = [];
      state.totalElements = 0;
    });
    builder.addCase(getBankList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
    });
    builder.addCase(getBankList.rejected, (state) => {
      state.loading = false;
    });
    //getBankLogById
    builder.addCase(getBankLogById.pending, (state) => {
      state.loading = true;
      state.history.loadData = false;
      state.history.listHistory = [];
      state.history.totalElements = 0;
    });
    builder.addCase(getBankLogById.fulfilled, (state, action) => {
      state.loading = false;
      state.history.listHistory = action.payload.content;
      state.history.totalElements = action.payload.totalElements;
      state.history.currentPage = action.payload.number;
    });
    builder.addCase(getBankLogById.rejected, (state) => {
      state.loading = false;
    });
    //add Bank
    builder.addCase(createBank.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(createBank.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(createBank.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    //update Bank
    builder.addCase(updateBank.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(updateBank.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updateBank.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
    //getById
    builder.addCase(getBankById.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(getBankById.fulfilled, (state, action) => {
      state.form.loading = false;
      state.form.item = action.payload;
    });
    builder.addCase(getBankById.rejected, (state) => {
      state.form.loading = true;
    });
  },
});

export const { setFilter, setForm, resetForm, setFilterHistory } = bankSlice.actions;
export default bankSlice.reducer;
export const bankSelector = (state: RootState): StateProp => state.bankSlice;
