import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { FilterSearch, Form, initialState, sliceName, StateProp } from './types';
import {
  addPropertyValue,
  createProperty,
  deletePropertyValue,
  getPropertyById,
  getPropertyList,
  getPropertyValueList,
  updateProperty,
  updatePropertyValue,
  getPropertyValueById,
} from './thunks';
import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { TEXT } from 'wcf-component-lib/src/constants/message';

const propertySlice = createSlice({
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
    toggleModal: (state, action: { payload: { isOpen: boolean; type: string } }) => {
      if (action.payload.isOpen && action.payload.type === 'add') {
        //add
        state.modal.isOpen = true;
      } else if (action.payload.isOpen && action.payload.type === 'edit') {
        //edit
        state.modal.isOpen = true;
        state.modal.type = 'edit';
      } else {
        // isOpen === false and set type to add
        state.modal = initialState.modal;
      }
    },
  },
  extraReducers(builder) {
    // *getPropertyList
    builder.addCase(getPropertyList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
      state.list = [];
      state.totalElements = 0;
    });
    builder.addCase(getPropertyList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
    });
    builder.addCase(getPropertyList.rejected, (state) => {
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
    //createProperty
    builder.addCase(createProperty.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(createProperty.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(createProperty.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    //updateProperty
    builder.addCase(updateProperty.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(updateProperty.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updateProperty.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
    //getById
    builder.addCase(getPropertyById.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(getPropertyById.fulfilled, (state, action) => {
      state.form.loading = false;
      state.form.item = action.payload;
    });
    builder.addCase(getPropertyById.rejected, (state) => {
      state.form.loading = true;
    });
    //getPropertyValueList
    builder.addCase(getPropertyValueList.pending, (state) => {
      state.loading = true;
      state.loadDataPropertyValue = false;
    });
    builder.addCase(getPropertyValueList.fulfilled, (state, action) => {
      state.listPropertyValue = action.payload;
      state.loading = false;
    });
    builder.addCase(getPropertyValueList.rejected, (state) => {
      state.loading = false;
    });

    //getPropertyValueById
    builder.addCase(getPropertyValueById.pending, (state) => {
      state.form.loading = true;
      state.loadDataPropertyValue = false;
    });
    builder.addCase(getPropertyValueById.fulfilled, (state, action) => {
      state.form.loading = false;
      state.modal.form = { ...state.modal.form, ...action.payload };
    });
    builder.addCase(getPropertyValueById.rejected, (state) => {
      state.form.loading = false;
    });

    //add PropertyValue
    builder.addCase(addPropertyValue.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addPropertyValue.fulfilled, (state) => {
      state.loading = false;
      state.loadDataPropertyValue = true;
      BaseToastNotification({
        key: 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(addPropertyValue.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key: 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    //delete PropertyValue
    builder.addCase(deletePropertyValue.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deletePropertyValue.fulfilled, (state) => {
      state.loading = false;
      state.loadDataPropertyValue = true;
      BaseToastNotification({
        key: 'delete',
        type: 'success',
        description: TEXT.delete.success,
      });
    });
    builder.addCase(deletePropertyValue.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key: 'delete',
        type: 'error',
        description: TEXT.delete.error,
      });
    });
    //edit PropertyValue
    builder.addCase(updatePropertyValue.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updatePropertyValue.fulfilled, (state) => {
      state.loading = false;
      state.loadDataPropertyValue = true;
      BaseToastNotification({
        key: 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updatePropertyValue.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key: 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
  },
});

export const { setFilter, setForm, resetForm, toggleModal } = propertySlice.actions;
export default propertySlice.reducer;
export const propertySelector = (state: RootState): StateProp => state.propertySlice;
