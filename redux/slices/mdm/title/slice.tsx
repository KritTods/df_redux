import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { FilterSearch, Form, initialState, sliceName, StateProp } from './types';
import { createTitle, getTitleById, getTitleList, updateTitle } from './thunks';
import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { TEXT } from 'wcf-component-lib/src/constants/message';

const titleSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload } as FilterSearch;
      state.loadData = true;
    },
    // setFilterHistory: (state, action) => {
    //   state.history.filterHistory = { ...state.history.filterHistory, ...action.payload } as FilterHistory;
    //   state.loadData = true;
    // },
    resetForm: (state) => {
      state.form = initialState.form;
    },
    setForm: (state, action) => {
      state.form = { ...state.form, ...action.payload } as Form;
    },
    // setCurrentHistoryPage: (state, action) => {
    //   state.currentPage = action.payload as number;
    //   state.history.loadData = true;
    // },
  },
  extraReducers(builder) {
    // *getTitleList
    builder.addCase(getTitleList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
      state.list = [];
      state.totalElements = 0;
    });
    builder.addCase(getTitleList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
    });
    builder.addCase(getTitleList.rejected, (state) => {
      state.loading = false;
      state.list = [];
    });
    //add Title
    builder.addCase(createTitle.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(createTitle.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(createTitle.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    //update Title
    builder.addCase(updateTitle.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(updateTitle.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updateTitle.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
    //getById
    builder.addCase(getTitleById.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(getTitleById.fulfilled, (state, action) => {
      state.form.loading = false;
      state.form.item = action.payload;
    });
    builder.addCase(getTitleById.rejected, (state) => {
      state.form.loading = true;
    });
  },
});

export const { setFilter, setForm, resetForm } = titleSlice.actions;
export default titleSlice.reducer;
export const titleSelector = (state: RootState): StateProp => state.titleSlice;
