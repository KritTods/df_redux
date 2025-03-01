import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { sliceName, DataUpdateUser, FilterSearch, ItemList, UserLogHistoryItem, FilterHistoryUserLog , ItemContactInfo, FilterContactInfo } from './types';
import { omitBy, isNil } from 'lodash';

export const getUserList = createAsyncThunk(`${sliceName}/list`, async (filter: FilterSearch) => {
  const newFilter = omitBy(filter, (value) => isNil(value) || value === '');

  const response = await callApi({
    method: 'post',
    url: 'users/list',
    body: newFilter,
  });

  const { content, totalElements, number } = response as { content: ItemList[]; totalElements: number; number: number };

  return { content, totalElements, number };
});

export const getUserById = createAsyncThunk(`${sliceName}/getUserById`, async ({ userId }: { userId: string }) => {
  return await callApi({ method: 'get', url: `users/${userId}` });
});

export const updateUser = createAsyncThunk(
  `${sliceName}/update`,
  async ({ data, userId }: { data: DataUpdateUser; userId: number }) => {
    return await callApi({
      method: 'patch',
      url: `users/${userId}`,
      body: data,
    });
  },
);

export const getUserLogHistory = createAsyncThunk(
  `${sliceName}/logs/list`,
  async ({ userId, filterHistory }: { userId: number; filterHistory: FilterHistoryUserLog }) => {
    const newFilter = omitBy(filterHistory, (value) => isNil(value) || value === '');

    const response = await callApi({
      method: 'post',
      url: `users/${userId}/user-logs/list`,
      body: newFilter,
      instanceName: 'ums',
    });
    const { content, totalElements, number } = response as {
      content: UserLogHistoryItem[];
      totalElements: number;
      number: number;
    };

    return { content, totalElements, number };
  },
);

export const getUserActiveContactInfoList = createAsyncThunk(
  `${sliceName}/active/contact-info`,
  async (filter: FilterContactInfo) => {
    const newFilter = omitBy(filter, (value) => isNil(value) || value === '');
    const { userGroupId, ssoBranchCode } = filter;
    const response = (await callApi({
      method: 'get',
      url: `users/active/contact-info?userGroupId=${userGroupId}&ssoBranchCode=${ssoBranchCode}`,
      body: newFilter,
    })) as ItemContactInfo[];

    return response;
  },
);

