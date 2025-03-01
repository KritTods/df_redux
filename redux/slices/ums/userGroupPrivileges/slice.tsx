import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { createSlice } from '@reduxjs/toolkit';

import { TEXT } from 'wcf-component-lib/src/constants/message';
import { RootState } from '@/redux/store';

import { initialState, ItemForm, sliceName, ItemList, InitialState } from './types';
import { getUserGroupPrivilegesList, addPrivileges, deletePrivileges } from './thunks';

const userGroupPrivilegesSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    cleanUp: () => initialState,
    setItem: (state, action) => {
      state.form.item = { ...state.form.item, ...action.payload } as ItemForm;
    },
  },
  extraReducers: (builder) => {
    // * getUserGroupPrivilegesList
    builder.addCase(getUserGroupPrivilegesList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
    });
    builder.addCase(getUserGroupPrivilegesList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload as ItemList[];
    });
    builder.addCase(getUserGroupPrivilegesList.rejected, (state) => {
      state.loading = false;
    });
    // * addPrivileges
    builder.addCase(addPrivileges.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addPrivileges.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key : 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(addPrivileges.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key : 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    // * deletePrivileges
    builder.addCase(deletePrivileges.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deletePrivileges.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key : 'delete',
        type: 'success',
        description: TEXT.delete.success,
      });
    });
    builder.addCase(deletePrivileges.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key : 'delete',
        type: 'error',
        description: TEXT.delete.error,
      });
    });
  },
});

export const { cleanUp, setItem } = userGroupPrivilegesSlice.actions;
export default userGroupPrivilegesSlice.reducer;

export const userGroupPrivilegesSelector = (state: RootState): InitialState => state.userGroupPrivilegesSlice;
