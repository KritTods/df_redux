import { createSlice } from '@reduxjs/toolkit';
import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { RootState } from '@/redux/store';
import { Form, initialState, sliceName, StateProp } from './types';
import { getUserGroupMemberList, addUserGroupMember, deleteUserGroupMember } from './thunks';
import { TEXT } from 'wcf-component-lib/src/constants/message';

const userGroupMemberSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    cleanUp: () => initialState,
    resetForm: (state) => {
      state.form = initialState.form;
    },
    setForm: (state, action) => {
      state.form = { ...state.form, ...action.payload } as Form;
    },
    setSelected: (state, action) => {
      state.selected = action.payload as [];
    },
    resetList: (state) => {
      state.list = [];
    },
  },
  extraReducers(builder) {
    // * getUserGroupMemberList
    builder.addCase(getUserGroupMemberList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
    });
    builder.addCase(getUserGroupMemberList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    });
    builder.addCase(getUserGroupMemberList.rejected, (state) => {
      state.loading = false;
    });
    // * addUserMemberGroup
    builder.addCase(addUserGroupMember.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addUserGroupMember.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(addUserGroupMember.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key: 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    // * deleteUserMemberGroup
    builder.addCase(deleteUserGroupMember.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteUserGroupMember.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'delete',
        type: 'success',
        description: TEXT.delete.success,
      });
    });
    builder.addCase(deleteUserGroupMember.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key: 'delete',
        type: 'error',
        description: TEXT.delete.error,
      });
    });
  },
});

export const { cleanUp, resetForm, setForm, setSelected, resetList } = userGroupMemberSlice.actions;
export default userGroupMemberSlice.reducer;
export const userGroupMemberSelector = (state: RootState): StateProp => state.userGroupMemberSlice;
