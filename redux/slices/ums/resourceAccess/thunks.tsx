import { createAsyncThunk } from '@reduxjs/toolkit';
import { ItemCreate, ItemUpdate, ResourceAccessItem, sliceName } from './types';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';

export const getResourceAccessByResourceId = createAsyncThunk(
  `${sliceName}/getResourceAccessListByResourceId`,
  async (resourceId: number) => {
    const result = await callApi({
      method: 'post',
      url: `resources/${resourceId}/resource-accesses/list`,
      instanceName: 'ums',
    });

    return result as ResourceAccessItem[];
  },
);

export const createResourceAccess = createAsyncThunk(`${sliceName}/create`, async ({ data }: { data: ItemCreate }) => {
  const { resourceId } = data;

  return await callApi({
    method: 'post',
    url: `resources/${resourceId}/resource-accesses`,
    body: data,
    instanceName: 'ums',
  });
});

export const updateResourceAccess = createAsyncThunk(`${sliceName}/update`, async ({ data }: { data: ItemUpdate }) => {
  const { resourceAccessId } = data;

  return await callApi({
    method: 'patch',
    url: `resource-accesses/${resourceAccessId}`,
    body: data,
    instanceName: 'ums',
  });
});

export const deleteResourceAccess = createAsyncThunk(
  `${sliceName}/delete`,
  async ({ pageResourceAccessId }: { pageResourceAccessId: number }) => {
    return await callApi({
      method: 'delete',
      url: `page-resources-accesses/${pageResourceAccessId}`,
      instanceName: 'ums',
    });
  },
);
