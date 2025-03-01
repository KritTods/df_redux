import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { sliceName, ItemList, FilterSearch } from './types';
import { omitBy, isNil } from 'lodash';

export const getEmailLogList = createAsyncThunk(`${sliceName}/list`, async (filter: FilterSearch) => {
  const newFilter = omitBy(filter, (value) => isNil(value) || value === '');

  const response = await callApi({
    method: 'post',
    url: 'email-log/list',
    body: newFilter,
    instanceName: 'nms',
  });

  const { content, totalElements, number } = response as { content: ItemList[]; totalElements: number; number: number };

  return { content, totalElements, number };
});

export const getById = createAsyncThunk(
  `${sliceName}/getById`,
  async ({ emailLogId }: { emailLogId: number; }) => {
    return await callApi({
      method: 'get',
      url: `email-log/${emailLogId}`,
      instanceName: 'nms',
    });
  },
);

