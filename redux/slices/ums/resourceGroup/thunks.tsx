import { createAsyncThunk } from '@reduxjs/toolkit';
import { ItemCreate, ItemForm, ResourceGroupItem, ItemUpdate, sliceName } from './types';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';

export const getResourceGroupList = createAsyncThunk(`${sliceName}/list`, async () => {
  const result = await callApi({
    method: 'post',
    url: 'resource-groups/list',
  });

  return result as ResourceGroupItem[];
});

export const createResourceGroup = createAsyncThunk(`${sliceName}/create`, async ({ data }: { data: ItemCreate }) => {
  return (await callApi({
    method: 'post',
    url: 'resource-groups',
    body: data,
    instanceName: 'ums',
  })) as ItemForm;
});

export const updateResourceGroup = createAsyncThunk(`${sliceName}/update`, async ({ data }: { data: ItemUpdate }) => {
  const { resourceGroupId } = data;

  return (await callApi({
    method: 'patch',
    url: `resource-groups/${resourceGroupId}`,
    body: data,
    instanceName: 'ums',
  })) as ItemForm;
});

export const getResourceGroupById = createAsyncThunk(
  `${sliceName}/getResourceGroupById`,
  async ({ resourceGroupId }: { resourceGroupId: number }) => {
    return (await callApi({
      method: 'get',
      url: `resource-groups/${resourceGroupId}`,
      instanceName: 'ums',
    })) as ItemForm;
  },
);

export const deleteResourceGroup = createAsyncThunk(
  `${sliceName}/delete`,
  async ({ resourceGroupId }: { resourceGroupId: number }) => {
    return (await callApi({
      method: 'delete',
      url: `resource-groups/${resourceGroupId}`,
      instanceName: 'ums',
    })) as ItemForm;
  },
);
