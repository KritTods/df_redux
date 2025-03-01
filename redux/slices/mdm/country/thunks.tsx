import { createAsyncThunk } from '@reduxjs/toolkit';
import { sliceName, FilterSearch, ItemList, ItemForm } from './types';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { omitBy, isNil } from 'lodash';

export const getCountryList = createAsyncThunk(`${sliceName}/list`, async (filter: FilterSearch) => {
  const newFilter = omitBy(filter, (value) => isNil(value) || value === '');

  const response = await callApi({
    method: 'post',
    url: '/countries/list',
    body: newFilter,
    instanceName: 'mdm',
  });

  const { content, totalElements, number } = response as { content: ItemList[]; totalElements: number; number: number };

  return { content, totalElements, number };
});

export const createCountry = createAsyncThunk(`${sliceName}/create`, async (data: ItemForm) => {
  return await callApi({
    method: 'post',
    url: 'countries',
    body: data,
    instanceName: 'mdm',
  });
});

export const getCountryId = createAsyncThunk(
  `${sliceName}/getCountryId`,
  async ({ countryId }: { countryId: number }) => {
    return await callApi({
      method: 'get',
      url: `countries/${countryId}`,
      instanceName: 'mdm',
    });
  },
);

export const updateCountry = createAsyncThunk(
  `${sliceName}/update`,
  async ({ data, countryId }: { data: ItemForm; countryId: number }) => {
    return await callApi({
      method: 'patch',
      url: `countries/${countryId}`,
      body: data,
      instanceName: 'mdm',
    });
  },
);
