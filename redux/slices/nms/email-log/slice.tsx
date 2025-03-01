import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { FilterSearch, Form, initialState, sliceName, StateProp } from './types';
import { getEmailLogList, getById } from './thunks';

const emailLogSlice = createSlice({
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
    // * getEmailLogList
    builder.addCase(getEmailLogList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
    });
    builder.addCase(getEmailLogList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
      
    });
    builder.addCase(getEmailLogList.rejected, (state) => {
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
  },
});

export const { cleanUp, setFilter, resetForm, setForm, setSelected } = emailLogSlice.actions;
export default emailLogSlice.reducer;
export const emailLogSelector = (state: RootState): StateProp => state.emailLogSlice;
