import { createSlice } from '@reduxjs/toolkit';
import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { RootState } from '@/redux/store';
import { FilterSearch, Form, initialState, sliceName, StateProp } from './types';
import { getEmailReceiverGroupList, getById, addEmailReceiverGroup, updateEmailReceiverGroup } from './thunks';
import { TEXT } from 'wcf-component-lib/src/constants/message';

const emailReceiverGroupSlice = createSlice({
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
    // * getEmailReceiverGroupList
    builder.addCase(getEmailReceiverGroupList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
    });
    builder.addCase(getEmailReceiverGroupList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
    });
    builder.addCase(getEmailReceiverGroupList.rejected, (state) => {
      state.loading = false;
    });
    // * getById
    builder.addCase(getById.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(getById.fulfilled, (state, action) => {
      state.form.loading = false;
      state.form.item = action.payload as Form['item'];
    });
    builder.addCase(getById.rejected, (state) => {
      state.form.loading = false;
    });
    // * addEmailReceiverGroup
    builder.addCase(addEmailReceiverGroup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addEmailReceiverGroup.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(addEmailReceiverGroup.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key: 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    // * updateEmailReceiverGroup
    builder.addCase(updateEmailReceiverGroup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateEmailReceiverGroup.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updateEmailReceiverGroup.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key: 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
  },
});

export const { cleanUp, setFilter, resetForm, setForm, setSelected } = emailReceiverGroupSlice.actions;
export default emailReceiverGroupSlice.reducer;
export const emailReceiverGroupSelector = (state: RootState): StateProp => state.emailReceiverGroupSlice;
