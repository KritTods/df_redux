import { createAsyncThunk } from '@reduxjs/toolkit';
import { sliceName, FilterSearch, ItemToApi, ItemList, ItemForm } from './types';
import { omitBy, isNil } from 'lodash';

import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';

interface GetPostalList {
  filter: FilterSearch;
}
export const getPostalList = createAsyncThunk(`${sliceName}/list`, async ({ filter }: GetPostalList) => {
  const newFilter = omitBy(filter, (value) => isNil(value) || value === '');

  const response = await callApi({
    method: 'post',
    url: '/postal/list',
    body: newFilter,
    instanceName: 'mdm',
  });

  const { content, totalElements, number } = response as { content: ItemList[]; totalElements: number; number: number };

  return { content, totalElements, number };
});

export const getPostalById = createAsyncThunk(
  `${sliceName}/getUserById`,
  async ({ postalId }: { postalId: string }) => {
    return (await callApi({
      method: 'get',
      url: `postal/${postalId}`,
      instanceName: 'mdm',
    })) as ItemForm;
  },
);

export const createPostal = createAsyncThunk(`${sliceName}/create`, async ({ data }: { data: ItemToApi }) => {
  return await callApi({
    method: 'post',
    url: 'postal',
    body: data,
    instanceName: 'mdm',
  });
});

export const updatePostal = createAsyncThunk(
  `${sliceName}/update`,
  async ({ postalId, data }: { postalId: string; data: ItemToApi }) => {
    return await callApi({
      method: 'patch',
      url: `postal/${postalId}`,
      body: data,
      instanceName: 'mdm',
    });
  },
);
