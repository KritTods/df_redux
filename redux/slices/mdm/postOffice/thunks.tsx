import { createAsyncThunk } from '@reduxjs/toolkit';
import { sliceName, FilterSearch, ItemCreate, ItemUpdate, PostOfficeItem } from './types';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { omitBy, isNil } from 'lodash';

export const getPostOfficeList = createAsyncThunk(`${sliceName}/list`, async (data: FilterSearch) => {
  const newFilter = omitBy(data, (value) => isNil(value) || value === '');
  const response = await callApi({
    method: 'post',
    url: 'post-office/list',
    body: newFilter,
    instanceName: 'mdm',
  });

  const { content, totalElements, number } = response as {
    content: PostOfficeItem[];
    totalElements: number;
    number: number;
  };

  return { content, totalElements, number };
});

export const createPostOffice = createAsyncThunk(`${sliceName}/create`, async ({ data }: { data: ItemCreate }) => {
  return (await callApi({
    method: 'post',
    url: 'post-office',
    body: data,
    instanceName: 'mdm',
  })) as PostOfficeItem;
});

export const updatePostOffice = createAsyncThunk(`${sliceName}/update`, async ({ data }: { data: ItemUpdate }) => {
  const { postOfficeId } = data;

  return await callApi({
    method: 'patch',
    url: `post-office/${postOfficeId}`,
    body: data,
    instanceName: 'mdm',
  });
});

export const getPostOfficeById = createAsyncThunk(
  `${sliceName}/getPostOfficeById`,
  async ({ postOfficeId }: { postOfficeId: number }) => {
    return (await callApi({
      method: 'get',
      url: `post-office/${postOfficeId}`,
      instanceName: 'mdm',
    })) as PostOfficeItem;
  },
);
