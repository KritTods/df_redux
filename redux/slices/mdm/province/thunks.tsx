import { createAsyncThunk } from '@reduxjs/toolkit';
import { sliceName, FilterSearch, ItemCreate, ItemUpdate, ProvinceItem, ItemForm } from './types';
import { omitBy, isNil } from 'lodash';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';

export const getProvinceList = createAsyncThunk(`${sliceName}/list`, async (filter: FilterSearch) => {
  const newFilter = omitBy(filter, (value) => isNil(value) || value === '');

  const response = await callApi({
    method: 'post',
    url: 'provinces/list',
    body: newFilter,
    instanceName: 'mdm',
  });
  const { content, totalElements, number } = response as {
    content: ProvinceItem[];
    totalElements: number;
    number: number;
  };

  return { content, totalElements, number };
});

export const createProvince = createAsyncThunk(`${sliceName}/create`, async ({ data }: { data: ItemCreate }) => {
  return await callApi({
    method: 'post',
    url: 'provinces',
    body: data,
    instanceName: 'mdm',
  });
});

export const updateProvince = createAsyncThunk(`${sliceName}/update`, async ({ data }: { data: ItemUpdate }) => {
  const { provinceId } = data;

  return await callApi({
    method: 'patch',
    url: `provinces/${provinceId}`,
    body: data,
    instanceName: 'mdm',
  });
});

export const getProvinceById = createAsyncThunk(
  `${sliceName}/getProvinceById`,
  async ({ provinceId }: { provinceId: number }) => {
    return (await callApi({
      method: 'get',
      url: `provinces/${provinceId}`,
      instanceName: 'mdm',
    })) as ItemForm;
  },
);

export const getSsoBranchCodeByProvinceId = createAsyncThunk(
  `${sliceName}/getSsoBranchCodeByProvinceId`,
  async ({ provinceId }: { provinceId: number }) => {
    return await callApi({
      method: 'get',
      url: `provinces/${provinceId}`,
      instanceName: 'mdm',
    });
  },
);
