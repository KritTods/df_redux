import { createAsyncThunk } from '@reduxjs/toolkit';
import { sliceName, FilterSearch, ItemUpdate, ItemCreate, ItemList } from './types';
import { omitBy, isNil } from 'lodash';

import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';

interface GetSubDistrictList {
  filter: FilterSearch;
}
export const getSubDistrictList = createAsyncThunk(`${sliceName}/list`, async ({ filter }: GetSubDistrictList) => {
  const newFilter = omitBy(filter, (value) => isNil(value) || value === '');

  const { provinceId, districtId } = filter;
  const { content, totalElements } = (await callApi({
    method: 'post',
    url: `provinces/${provinceId}/districts/${districtId}/sub-districts/list`,
    body: newFilter,
    instanceName: 'mdm',
  })) as { content: ItemList[]; totalElements: number };

  return { content, totalElements };
});

export const getSubDistrictById = createAsyncThunk(
  `${sliceName}/getUserById`,
  async ({ subDistrictId }: { subDistrictId: string }) => {
    return await callApi({
      method: 'get',
      url: `sub-districts/${subDistrictId}`,
      instanceName: 'mdm',
    });
  },
);

export const createSubDistrict = createAsyncThunk(`${sliceName}/create`, async ({ data }: { data: ItemCreate }) => {
  const { provinceId, districtId } = data;

  return await callApi({
    method: 'post',
    url: `provinces/${provinceId}/districts/${districtId}/sub-districts`,
    body: data,
    instanceName: 'mdm',
  });
});

export const updateSubDistrict = createAsyncThunk(`${sliceName}/update`, async ({ data }: { data: ItemUpdate }) => {
  const { subDistrictId } = data;

  return await callApi({
    method: 'patch',
    url: `sub-districts/${subDistrictId}`,
    body: data,
    instanceName: 'mdm',
  });
});
