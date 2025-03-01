import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { sliceName, ItemForm } from './types';

export const getUserGroupList = createAsyncThunk(`${sliceName}/list`, async () => {
  return await callApi({ method: 'post', url: 'user-groups/list' });
});

export const getById = createAsyncThunk(`${sliceName}/getById`, async ({ userGroupId }: { userGroupId: string }) => {
  return await callApi({ method: 'get', url: `user-groups/${userGroupId}` });
});

export const addUserGroup = createAsyncThunk(`${sliceName}/add`, async (payload: ItemForm) => {
  return await callApi({ method: 'post', url: 'user-groups', body: payload });
});

export const updateUserGroup = createAsyncThunk(
  `${sliceName}/update`,
  async ({ data, userGroupId }: { data: ItemForm; userGroupId: number }) => {
    return await callApi({
      method: 'patch',
      url: `user-groups/${userGroupId}`,
      body: data,
    });
  },
);
