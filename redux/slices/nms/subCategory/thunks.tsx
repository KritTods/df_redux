import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { sliceName, ItemForm, ItemList } from './types';
// import { omitBy, isNil } from 'lodash';

export const getSubCategoryList = createAsyncThunk(`${sliceName}/list`, async (categoryId: number) => {
  const response = await callApi({
    method: 'get',
    url: `categories/${categoryId}/sub-categories/list`,
    instanceName: 'nms',
  });

  return response as ItemList[];
});

export const getById = createAsyncThunk(`${sliceName}/getById`, async (subCategoryId: string) => {
  return await callApi({
    method: 'get',
    url: `sub-categories/${subCategoryId}`,
    instanceName: 'nms',
  });
});

export const addSubCategory = createAsyncThunk(`${sliceName}/add`, async (payload: ItemForm) => {
  const categoryId = payload.categoryId;

  return await callApi({
    method: 'post',
    url: `categories/${categoryId}/sub-categories`,
    body: payload,
    instanceName: 'nms',
  });
});

export const updateSubCategory = createAsyncThunk(
  `${sliceName}/update`,
  async ({ data, subCategoryId }: { data: ItemForm; subCategoryId: number }) => {
    return await callApi({
      method: 'patch',
      url: `sub-categories/${subCategoryId}`,
      body: data,
      instanceName: 'nms',
    });
  },
);
