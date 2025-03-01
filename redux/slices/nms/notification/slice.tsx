import { createSlice } from '@reduxjs/toolkit';
import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { RootState } from '@/redux/store';
import { FilterSearch, Form, initialState, sliceName, StateProp } from './types';
import { getNotificationList, getById, addNotification, updateHideNotification } from './thunks';
import { TEXT } from 'wcf-component-lib/src/constants/message';

const notificationSlice = createSlice({
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
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload as number;
      state.loadData = true;
    },
  },

  extraReducers(builder) {
    // * getNotificationList
    builder.addCase(getNotificationList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
      state.list = [];
      state.totalElements = 0;
    });
    builder.addCase(getNotificationList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
      state.currentPage = action.payload.number;
    });
    builder.addCase(getNotificationList.rejected, (state) => {
      state.loading = false;
    });
    // * getById
    builder.addCase(getById.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(getById.fulfilled, (state, action) => {
      state.form.loading = false;
      state.form.item = action.payload;
    });
    builder.addCase(getById.rejected, (state) => {
      state.form.loading = false;
    });
    // * addNotification
    builder.addCase(addNotification.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addNotification.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(addNotification.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key: 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    // * updateHideNotification
    builder.addCase(updateHideNotification.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateHideNotification.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'hide',
        type: 'success',
        description: TEXT.hide.success,
      });
    });
    builder.addCase(updateHideNotification.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key: 'hide',
        type: 'error',
        description: TEXT.hide.error,
      });
    });
  },
});

export const { cleanUp, setFilter, resetForm, setForm, setSelected } = notificationSlice.actions;
export default notificationSlice.reducer;
export const notificationSelector = (state: RootState): StateProp => state.notificationSlice;
