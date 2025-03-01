import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { filter, FilterSearch, initialState, ItemForm, ModalResourceAccess, sliceName, StateProp } from './types';
import {
  getClientList,
  getClientPrivilegesList,
  createClient,
  updateClient,
  getClientById,
  addClientPrivileges,
  deleteClientPrivileges,
} from './thunks';
import { TEXT } from 'wcf-component-lib/src/constants/message';
import { BaseToastNotification } from 'wcf-component-lib/src/components';

const clientSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    clearList: (state) => {
      state.list = [];
      state.filter = filter;
    },
    clearPrivilege: (state) => {
      state.clientPrivileges = [];
    },
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload } as FilterSearch;
      state.loadData = true;
    },
    resetForm: (state) => {
      state.form = initialState.form;
    },
    setForm: (state, action) => {
      state.form = { ...state.form, ...action.payload } as ItemForm;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload as number;
      state.loadData = true;
    },
    toggleModal: (state, action: { payload: ModalResourceAccess }) => {
      if (action.payload.isOpen) {
        state.modal = {
          isOpen: true,
          resourceAccessId: [],
        };
      } else {
        state.modal = {
          isOpen: false,
          resourceAccessId: [],
        };
      }
    },
    saveResourceAccess: (state, action) => {
      state.modal.resourceAccessId = action.payload as number[];
    },
  },
  extraReducers(builder) {
    //getClientList
    builder.addCase(getClientList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
      state.list = [];
      state.totalElements = 0;
    });
    builder.addCase(getClientList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
      state.currentPage = action.payload.number;
    });
    builder.addCase(getClientList.rejected, (state) => {
      state.loading = false;
    });
    //addClient
    builder.addCase(createClient.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createClient.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(createClient.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key: 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    //updateClient
    builder.addCase(updateClient.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateClient.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updateClient.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key: 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
    //getById
    builder.addCase(getClientById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getClientById.fulfilled, (state, action) => {
      state.loading = false;
      state.form = action.payload;
    });
    builder.addCase(getClientById.rejected, (state) => {
      state.loading = false;
    });
    //getClientPrivilegesList
    builder.addCase(getClientPrivilegesList.pending, (state) => {
      state.loading = true;
      state.loadDataPrivileges = false;
    });
    builder.addCase(getClientPrivilegesList.fulfilled, (state, action) => {
      state.loading = false;
      state.clientPrivileges = action.payload;
    });
    builder.addCase(getClientPrivilegesList.rejected, (state) => {
      state.loading = false;
    });
    //  * addClientPrivileges
    builder.addCase(addClientPrivileges.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addClientPrivileges.fulfilled, (state) => {
      state.loading = false;
      state.loadDataPrivileges = true;
      BaseToastNotification({
        key: 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(addClientPrivileges.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key: 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    //  *deleteClientPrivileges
    builder.addCase(deleteClientPrivileges.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteClientPrivileges.fulfilled, (state) => {
      state.loading = false;
      state.loadDataPrivileges = true;
      BaseToastNotification({
        key: 'delete',
        type: 'success',
        description: TEXT.delete.success,
      });
    });
    builder.addCase(deleteClientPrivileges.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key: 'delete',
        type: 'error',
        description: TEXT.delete.error,
      });
    });
  },
});

export default clientSlice.reducer;
export const clientSelector = (state: RootState): StateProp => state.clientSlice;
export const {
  clearList,
  setFilter,
  setForm,
  setCurrentPage,
  resetForm,
  toggleModal,
  saveResourceAccess,
  clearPrivilege,
} = clientSlice.actions;
