import { createSlice } from '@reduxjs/toolkit';
import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { RootState } from '@/redux/store';
import { TEXT } from 'wcf-component-lib/src/constants/message';
import { CategoryDetail, FilterSearch, Form, initialState, Modal, sliceName, StateProp } from './types';
import { getTemplateList, getById, addTemplate, updateTemplate } from './thunks';

const templateSlice = createSlice({
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
    setCategoryDetail: (state, action: { payload: CategoryDetail }) => {
      state.categoryDetail = {
        categoryName: action.payload.categoryName,
        subCategoryName: action.payload.subCategoryName,
      };
    },
    toggleModal: (state, action: { payload: Modal }) => {
      if (action.payload.isOpen) {
        state.modal = {
          isOpen: true,
          data: action.payload.data,
        };
      } else {
        state.modal = {
          isOpen: false,
          data: null,
        };
      }
    },
  },
  extraReducers(builder) {
    // * getTemplateList
    builder.addCase(getTemplateList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
      state.list = [];
      state.totalElements = 0;
    });
    builder.addCase(getTemplateList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
      state.currentPage = action.payload.number;
    });
    builder.addCase(getTemplateList.rejected, (state) => {
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
    // * addTemplate
    builder.addCase(addTemplate.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTemplate.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key : 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(addTemplate.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key : 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    // * updateTemplate
    builder.addCase(updateTemplate.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateTemplate.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key : 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updateTemplate.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key: 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
  },
});

export const { cleanUp, setFilter, resetForm, setForm, setSelected, toggleModal, setCategoryDetail } =
  templateSlice.actions;
export default templateSlice.reducer;
export const templateSelector = (state: RootState): StateProp => state.emailTemplateSlice;
