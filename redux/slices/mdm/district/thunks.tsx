import { createAsyncThunk } from '@reduxjs/toolkit';
import { sliceName, FilterSearch, ItemCreate, ItemUpdate, DistrictItem } from './types';
import { omitBy, isNil } from 'lodash';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';

interface GetDistrictList {
  provinceId: string;
  filter: FilterSearch;
}

export const getDistrictList = createAsyncThunk(
  `${sliceName}/list`,
  async ({ provinceId, filter }: GetDistrictList) => {
    const newFilter = omitBy(filter, (value) => isNil(value) || value === '');

    const response = await callApi({
      method: 'post',
      url: `provinces/${provinceId}/districts/list`,
      body: newFilter,
      instanceName: 'mdm',
    });
    const { content, totalElements, number } = response as {
      content: DistrictItem[];
      totalElements: number;
      number: number;
    };

    return { content, totalElements, number };
  },
);

export const createDistrict = createAsyncThunk(`${sliceName}/create`, async ({ data }: { data: ItemCreate }) => {
  const { provinceId } = data;

  return await callApi({
    method: 'post',
    url: `provinces/${provinceId}/districts`,
    body: data,
    instanceName: 'mdm',
  });
});

export const updateDistrict = createAsyncThunk(`${sliceName}/update`, async ({ data }: { data: ItemUpdate }) => {
  const { districtId } = data;

  return await callApi({
    method: 'patch',
    url: `districts/${districtId}`,
    body: data,
    instanceName: 'mdm',
  });
});

export const getDistrictById = createAsyncThunk(
  `${sliceName}/getDistrictById`,
  async ({ districtId }: { districtId: number }) => {
    return await callApi({
      method: 'get',
      url: `districts/${districtId}`,
      instanceName: 'mdm',
    });
  },
);
