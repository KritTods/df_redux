import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import {
  sliceName,
  ItemForm,
  FilterSearch,
  ItemList,
  FilterHistorySsoBranchLog,
  SsoBranchLogHistoryItem,
} from './types';
import { omitBy, isNil } from 'lodash';

export const getSsoBranchsList = createAsyncThunk(`${sliceName}/list`, async (filter: FilterSearch) => {
  const newFilter = omitBy(filter, (value) => isNil(value) || value === '');

  const response = await callApi({
    method: 'post',
    url: 'sso-branchs/list',
    instanceName: 'mdm',
    body: newFilter,
  });

  const { content, totalElements, number } = response as { content: ItemList[]; totalElements: number; number: number };

  return { content, totalElements, number };
});

export const getSsoBranchsListByssoBranchTypeId = createAsyncThunk(
  `${sliceName}/getList`,
  async ({ ssoBranchTypeId }: { ssoBranchTypeId: string }) => {
    return (await callApi({
      method: 'get',
      url: `sso-branchs/list?ssoBranchTypeId=${ssoBranchTypeId}`,
      instanceName: 'mdm',
    })) as ItemList[];
  },
);

export const getById = createAsyncThunk(`${sliceName}/getById`, async ({ ssoBranchId }: { ssoBranchId: string }) => {
  return await callApi({ method: 'get', url: `sso-branchs/${ssoBranchId}`, instanceName: 'mdm' });
});

export const addSsoBranchs = createAsyncThunk(`${sliceName}/add`, async (payload: ItemForm) => {
  return await callApi({ method: 'post', url: 'sso-branchs', body: payload, instanceName: 'mdm' });
});

export const updateSsoBranchs = createAsyncThunk(
  `${sliceName}/update`,
  async ({ data, ssoBranchId }: { data: ItemForm; ssoBranchId: number }) => {
    return await callApi({
      method: 'patch',
      url: `sso-branchs/${ssoBranchId}`,
      body: data,
      instanceName: 'mdm',
    });
  },
);

export const getSsoBranchLogHistory = createAsyncThunk(
  `${sliceName}/logs/list`,
  async ({ ssoBranchId, filterHistory }: { ssoBranchId: number; filterHistory: FilterHistorySsoBranchLog }) => {
    const newFilter = omitBy(filterHistory, (value) => isNil(value) || value === '');

    const response = await callApi({
      method: 'post',
      url: `sso-branchs/${ssoBranchId}/sso-branch-logs/list`,
      body: newFilter,
      instanceName: 'mdm',
    });
    const { content, totalElements, number } = response as {
      content: SsoBranchLogHistoryItem[];
      totalElements: number;
      number: number;
    };

    return { content, totalElements, number };
  },
);
