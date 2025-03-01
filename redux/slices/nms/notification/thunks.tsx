import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { sliceName, ItemForm, ItemList, FilterSearch } from './types';
import { omitBy, isNil } from 'lodash';

export const getNotificationList = createAsyncThunk(`${sliceName}/list`, async (filter: FilterSearch) => {
  const newFilter = omitBy(filter, (value) => isNil(value) || value === '');
  const response = await callApi({
    method: 'post',
    url: 'notifications/list',
    body: newFilter,
    instanceName: 'nms',
  });

  const { content, totalElements, number } = response as { content: ItemList[]; totalElements: number; number: number };

  return { content, totalElements, number };
});

export const getById = createAsyncThunk(
  `${sliceName}/getById`,
  async ({ notificationId }: { notificationId: string }) => {
    return (await callApi({
      method: 'get',
      url: `notifications/${notificationId}`,
      instanceName: 'nms',
    })) as ItemForm;
  },
);

export const addNotification = createAsyncThunk(`${sliceName}/add`, async (payload: ItemForm) => {
  return await callApi({ method: 'post', url: 'notifications', body: payload, instanceName: 'nms' });
});

export const updateHideNotification = createAsyncThunk(
  `${sliceName}/updateHide`,
  async ({ notificationId }: { notificationId: number }) => {
    return await callApi({
      method: 'post',
      url: `notifications/${notificationId}/hide`,
      instanceName: 'nms',
    });
  },
);
