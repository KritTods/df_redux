import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { ItemCreate, sliceName, UserGroupMemberItem } from './types';

export const getUserGroupMemberList = createAsyncThunk(
  `${sliceName}/list`,
  async ({ userGroupId }: { userGroupId: number }) => {
    return (await callApi({
      method: 'get',
      url: `user-group-members?userGroupId=${userGroupId}`,
      instanceName: 'nms',
    })) as UserGroupMemberItem[];
  },
);

export const addUserGroupMember = createAsyncThunk(
  `${sliceName}/add`,
  async ({ data, userGroupId }: { data: ItemCreate; userGroupId: number }) => {
    return await callApi({
      method: 'post',
      url: `user-groups/${userGroupId}/user-group-members`,
      body: data,
      instanceName: 'nms',
    });
  },
);

export const deleteUserGroupMember = createAsyncThunk(
  `${sliceName}/delete`,
  async ({ userGroupMemberId }: { userGroupMemberId: number }) => {
    return await callApi({
      method: 'delete',
      url: `user-group-members/${userGroupMemberId}`,
      instanceName: 'nms',
    });
  },
);
