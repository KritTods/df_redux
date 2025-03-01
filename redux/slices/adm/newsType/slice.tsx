import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { FilterSearch, Form, initialState, sliceName, StateProp } from './types';
import { createNewsType, getNewsTypeById, getNewsTypeList, updateNewsType } from './thunks';
import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { TEXT } from 'wcf-component-lib/src/constants/message';

const newsTypeSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload } as FilterSearch;
      state.loadData = true;
    },
    // setFilterHistory: (state, action) => {
    //   // state.history.filterHistory = { ...state.history.filterHistory, ...action.payload } as FilterHistory;
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
    // *getNewsTypeList
    builder.addCase(getNewsTypeList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
      state.list = [];
      state.totalElements = 0;
    });
    builder.addCase(getNewsTypeList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
    });
    builder.addCase(getNewsTypeList.rejected, (state) => {
      state.loading = false;
    });
    //getPropertyLogById
    // builder.addCase(getPropertyLogById.pending, (state) => {
    //   state.loading = true;
    //   state.history.loadData = false;
    //   state.history.listHistory = [];
    //   state.history.totalElements = 0;
    // });
    // builder.addCase(getPropertyLogById.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.history.listHistory = action.payload.content;
    //   state.history.totalElements = action.payload.totalElements;
    //   state.history.currentPage = action.payload.number;
    // });
    // builder.addCase(getPropertyLogById.rejected, (state) => {
    //   state.loading = false;
    // });

    //createNewsType
    builder.addCase(createNewsType.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(createNewsType.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(createNewsType.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    //updateNewsType
    builder.addCase(updateNewsType.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(updateNewsType.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updateNewsType.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
    //getById
    builder.addCase(getNewsTypeById.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(getNewsTypeById.fulfilled, (state, action) => {
      state.form.loading = false;
      state.form.item = action.payload;
    });
    builder.addCase(getNewsTypeById.rejected, (state) => {
      state.form.loading = true;
    });
  },
});

export const { setFilter, setForm, resetForm } = newsTypeSlice.actions;
export default newsTypeSlice.reducer;
export const newsTypeSelector = (state: RootState): StateProp => state.newsTypeSlice;
