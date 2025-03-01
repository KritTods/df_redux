import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { sliceName, ItemForm, ItemList, FilterSearch } from './types';
import { omitBy, isNil } from 'lodash';

export const getEmailReceiverGroupList = createAsyncThunk(`${sliceName}/list`, async (filter: FilterSearch) => {
  const newFilter = omitBy(filter, (value) => isNil(value) || value === '');

  const response = await callApi({
    method: 'post',
    url: 'email-groups/list',
    body: newFilter,
    instanceName: 'nms',
  });

  const { content, totalElements, number } = response as { content: ItemList[]; totalElements: number; number: number };

  return { content, totalElements, number };
});

export const getById = createAsyncThunk(
  `${sliceName}/getById`,
  async ({ emailGroupId, emailGroupCode }: { emailGroupId: string; emailGroupCode: string }) => {
    return await callApi({
      method: 'get',
      url: `email-groups?emailGroupId=${emailGroupId}&emailGroupCode=${emailGroupCode}`,
      instanceName: 'nms',
    });
  },
);

export const addEmailReceiverGroup = createAsyncThunk(`${sliceName}/add`, async (payload: ItemForm) => {
  return await callApi({ method: 'post', url: 'email-groups', body: payload, instanceName: 'nms' });
});

export const updateEmailReceiverGroup = createAsyncThunk(
  `${sliceName}/update`,
  async ({ data, emailGroupId }: { data: ItemForm; emailGroupId: number }) => {
    return await callApi({
      method: 'patch',
      url: `email-groups/${emailGroupId}`,
      body: data,
      instanceName: 'nms',
    });
  },
);
