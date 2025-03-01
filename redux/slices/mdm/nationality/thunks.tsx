import { createAsyncThunk } from '@reduxjs/toolkit';
import { sliceName, FilterSearch, ItemCreate, ItemUpdate, ItemForm, NationalityItem } from './types';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { omitBy, isNil } from 'lodash';

export const getNationalityList = createAsyncThunk(`${sliceName}/list`, async ({ data }: { data: FilterSearch }) => {
  const newFilter = omitBy(data, (value) => isNil(value) || value === '');

  const response = await callApi({
    method: 'post',
    url: 'nationalities/list',
    body: newFilter,
    instanceName: 'mdm',
  });

  const { content, totalElements, number } = response as {
    content: NationalityItem[];
    totalElements: number;
    number: number;
  };

  return { content, totalElements, number };
});

export const createNationality = createAsyncThunk(`${sliceName}/create`, async ({ data }: { data: ItemCreate }) => {
  return (await callApi({
    method: 'post',
    url: 'nationalities',
    body: data,
    instanceName: 'mdm',
  })) as ItemForm;
});

export const updateNationality = createAsyncThunk(`${sliceName}/update`, async ({ data }: { data: ItemUpdate }) => {
  const { nationalityId } = data;

  return (await callApi({
    method: 'patch',
    url: `nationalities/${nationalityId}`,
    body: data,
    instanceName: 'mdm',
  })) as ItemForm;
});

export const getNationalityById = createAsyncThunk(
  `${sliceName}/getNationalityIdById`,
  async ({ nationalityId }: { nationalityId: number }) => {
    return (await callApi({
      method: 'get',
      url: `nationalities/${nationalityId}`,
      instanceName: 'mdm',
    })) as ItemForm;
  },
);
