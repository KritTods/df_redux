import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { sliceName, UserGroupItem, FilterSearch, ItemCreateAndUpdate } from './types';
import { omitBy, isNil } from 'lodash';

export const getUserGroupList = createAsyncThunk(`${sliceName}/list`, async (filter: FilterSearch) => {
  const newFilter = omitBy(filter, (value) => isNil(value) || value === '');
  const response = await callApi({
    method: 'post',
    url: 'user-groups/list',
    body: newFilter,
    instanceName: 'nms',
  });

  const { content, totalElements } = response as { content: UserGroupItem[]; totalElements: number };

  return { content, totalElements };
});

export const getById = createAsyncThunk(`${sliceName}/getById`, async ({ userGroupId }: { userGroupId: number }) => {
  return await callApi({
    method: 'get',
    url: `user-groups/${userGroupId}`,
    instanceName: 'nms',
  });
});

export const addUserGroup = createAsyncThunk(`${sliceName}/add`, async (payload: ItemCreateAndUpdate) => {
  return await callApi({ method: 'post', url: 'user-groups', body: payload, instanceName: 'nms' });
});

export const updateUserGroup = createAsyncThunk(
  `${sliceName}/update`,
  async ({ data, userGroupId }: { data: ItemCreateAndUpdate; userGroupId: number }) => {
    return await callApi({
      method: 'patch',
      url: `user-groups/${userGroupId}`,
      body: data,
      instanceName: 'nms',
    });
  },
);
