import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { FilterSearch, ItemCreate, ItemForm, ResourceItem, ItemUpdate, sliceName } from './types';
import { omitBy, isNil } from 'lodash';

export const getResourceList = createAsyncThunk(`${sliceName}/list`, async ({ data }: { data: FilterSearch }) => {
  const { resourceGroupId } = data;
  const newFilter = omitBy(data, (value) => isNil(value) || value === '');

  const response = await callApi({
    method: 'post',
    url: `resource-groups/${resourceGroupId}/resources/list`,
    body: newFilter,
    instanceName: 'ums',
  });

  const { content, totalElements, number } = response as {
    content: ResourceItem[];
    totalElements: number;
    number: number;
  };

  return { content, totalElements, number };
});

export const createResource = createAsyncThunk(`${sliceName}/create`, async ({ data }: { data: ItemCreate }) => {
  const { resourceGroupId } = data;

  return (await callApi({
    method: 'post',
    url: `resource-groups/${resourceGroupId}/resources`,
    body: data,
    instanceName: 'ums',
  })) as ItemForm;
});

export const updateResource = createAsyncThunk(`${sliceName}/update`, async ({ data }: { data: ItemUpdate }) => {
  const { resourceId } = data;

  return (await callApi({
    method: 'patch',
    url: `resources/${resourceId}`,
    body: data,
    instanceName: 'ums',
  })) as ItemForm;
});

export const getResourceById = createAsyncThunk(
  `${sliceName}/getResourceById`,
  async ({ resourceId }: { resourceId: number }) => {
    return (await callApi({
      method: 'get',
      url: `resources/${resourceId}`,
      instanceName: 'ums',
    })) as ItemForm;
  },
);

export const deleteResource = createAsyncThunk(
  `${sliceName}/delete`,
  async ({ resourceId }: { resourceId: number }) => {
    return await callApi({
      method: 'delete',
      url: `resources/${resourceId}`,
      instanceName: 'ums',
    });
  },
);
