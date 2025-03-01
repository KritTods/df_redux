import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { RootState } from '@/redux/store';
import { sliceName } from './types';

export const getUserGroupMembershipList = createAsyncThunk(
  `${sliceName}/list`,
  async ({ userId, login }: { userId: number; login: string }) => {
    return await callApi({
      method: 'get',
      url: `user-group-memberships?userId=${userId}&login=${login}`,
    });
  },
);

export const addUserGroupMembershipGroup = createAsyncThunk(`${sliceName}/add`, async (_, { getState }) => {
  const {
    userSlice: {
      form: {
        item: { userId },
      },
    },
    userGroupSlice: { selected },
  } = getState() as RootState;

  return await callApi({
    method: 'post',
    url: `users/${userId}/user-group-memberships/add`,
    body: selected,
  });
});

export const deleteUserGroupMembership = createAsyncThunk(
  `${sliceName}/delete`,
  async ({ userId, userGroupId }: { userId: number; userGroupId: number }) => {
    return await callApi({
      method: 'delete',
      url: `user-group-memberships?userId=${userId}&userGroupId=${userGroupId}`,
    });
  },
);
