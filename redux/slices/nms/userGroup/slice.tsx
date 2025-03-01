import { createSlice } from '@reduxjs/toolkit';
import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { RootState } from '@/redux/store';
import { FilterSearch, Form, initialState, sliceName, StateProp } from './types';
import { addUserGroup, getById, getUserGroupList, updateUserGroup } from './thunks';
import { TEXT } from 'wcf-component-lib/src/constants/message';

const userGroupNMSSlice = createSlice({
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
    toggleModal: (state, action: { payload: { isOpen: boolean; userLogin?: string; type: string } }) => {
      if (action.payload.isOpen) {
        state.modal = {
          isOpen: true,
          type: action.payload.type,
          userLogin: action.payload.userLogin ? action.payload.userLogin : '',
        };
      } else {
        state.modal = {
          isOpen: false,
          userLogin: '',
          type: action.payload.type,
        };
      }
    },
    setSelected: (state, action) => {
      state.selected = action.payload as [];
    },
  },
  extraReducers(builder) {
    // * getUserGroupList
    builder.addCase(getUserGroupList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
    });
    builder.addCase(getUserGroupList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.filter.pagination.totalData = action.payload.totalElements;
    });
    builder.addCase(getUserGroupList.rejected, (state) => {
      state.loading = false;
    });
    // * getUserGroupById
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
    // * addUserGroup
    builder.addCase(addUserGroup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addUserGroup.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(addUserGroup.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key: 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    // * updateUserGroup
    builder.addCase(updateUserGroup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUserGroup.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updateUserGroup.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key: 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
  },
});
export const { cleanUp, setFilter, resetForm, setForm, toggleModal, setSelected } = userGroupNMSSlice.actions;
export default userGroupNMSSlice.reducer;
export const userGroupNMSSelector = (state: RootState): StateProp => state.userGroupNMSSlice;
