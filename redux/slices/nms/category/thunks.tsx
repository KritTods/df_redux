import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { sliceName, ItemForm, FilterSearch, ItemList } from './types';
import { omitBy, isNil } from 'lodash';

export const getCategoryList = createAsyncThunk(`${sliceName}/list`, async (filter: FilterSearch) => {
  const newFilter = omitBy(filter, (value) => isNil(value) || value === '');

  const response = await callApi({
    method: 'post',
    url: 'categories/list',
    body: newFilter,
    instanceName: 'nms',
  });

  const { content, totalElements, number } = response as { content: ItemList[]; totalElements: number; number: number };

  return { content, totalElements, number };
});

export const getById = createAsyncThunk(`${sliceName}/getById`, async (categoryId: string | null) => {
  return await callApi({
    method: 'get',
    url: `categories/${categoryId}`,
    instanceName: 'nms',
  });
});

export const addCategory = createAsyncThunk(`${sliceName}/add`, async (payload: ItemForm) => {
  return await callApi({ method: 'post', url: 'categories', body: payload, instanceName: 'nms' });
});

export const updateCategory = createAsyncThunk(
  `${sliceName}/update`,
  async ({ data, categoryId }: { data: ItemForm; categoryId: number }) => {
    return await callApi({
      method: 'patch',
      url: `categories/${categoryId}`,
      body: data,
      instanceName: 'nms',
    });
  },
);
