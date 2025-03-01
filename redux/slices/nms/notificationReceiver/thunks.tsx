import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { sliceName, ItemList, FilterSearch } from './types';
import { omitBy, isNil } from 'lodash';

export const getNotificationReceiverList = createAsyncThunk(`${sliceName}/list`, async (filter: FilterSearch) => {
  const newFilter = omitBy(filter, (value) => isNil(value) || value === '');
  const { notificationId } = filter;
  const response = await callApi({
    method: 'post',
    url: `notifications/${notificationId}/receivers/list`,
    body: newFilter,
    instanceName: 'nms',
  });

  const { content, totalElements, number } = response as { content: ItemList[]; totalElements: number; number: number };

  return { content, totalElements, number };
});

export const getById = createAsyncThunk(
  `${sliceName}/getById`,
  async ({ notificationId }: { notificationId: string }) => {
    return await callApi({
      method: 'get',
      url: `notification/${notificationId}`,
      instanceName: 'nms',
    });
  },
);
