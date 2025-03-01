import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { TEXT } from 'wcf-component-lib/src/constants/message';
import { addUserGroupMembershipGroup, deleteUserGroupMembership, getUserGroupMembershipList } from './thunks';
import { InitialState, initialState, ItemList, sliceName } from './types';

const userGroupMembershipSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers(builder) {
    //   *  -------------     getUserGroupMembershipList
    builder.addCase(getUserGroupMembershipList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
    });
    builder.addCase(getUserGroupMembershipList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload as ItemList[];
    });
    builder.addCase(getUserGroupMembershipList.rejected, (state) => {
      state.loading = false;
    });
    //   *  -------------     addUserGroupMembershipGroup
    builder.addCase(addUserGroupMembershipGroup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addUserGroupMembershipGroup.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key : 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(addUserGroupMembershipGroup.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key : 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    //   *  -------------     deleteUserGroupMembership
    builder.addCase(deleteUserGroupMembership.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteUserGroupMembership.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key : 'delete',
        type: 'success',
        description: TEXT.delete.success,
      });
    });
    builder.addCase(deleteUserGroupMembership.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key : 'delete',
        type: 'error',
        description: TEXT.delete.error,
      });
    });
  },
});

// export const {} = userGroupMembershipSlice.actions
export default userGroupMembershipSlice.reducer;
export const userGroupMembershipSelector = (state: RootState): InitialState => state.userGroupMembershipSlice;
