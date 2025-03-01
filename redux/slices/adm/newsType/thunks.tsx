import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  sliceName,
  FilterSearch,
  ItemCreate,
  ItemUpdate,
  // FilterHistory,
  ItemForm,
  NewsTypeItem,
} from './types';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { omitBy, isNil } from 'lodash';

export const getNewsTypeList = createAsyncThunk(`${sliceName}/list`, async ({ data }: { data: FilterSearch }) => {
  const newFilter = omitBy(data, (value) => isNil(value) || value === '');

  const response = await callApi({
    method: 'post',
    url: 'news-types/list',
    body: newFilter,
    instanceName: 'adm_new',
  });

  const { content, totalElements, number } = response as {
    content: NewsTypeItem[];
    totalElements: number;
    number: number;
  };

  return { content, totalElements, number };
});

export const createNewsType = createAsyncThunk(`${sliceName}/create`, async ({ data }: { data: ItemCreate }) => {
  return (await callApi({
    method: 'post',
    url: 'news-types',
    body: data,
    instanceName: 'adm_new',
  })) as ItemForm;
});

export const updateNewsType = createAsyncThunk(`${sliceName}/update`, async ({ data }: { data: ItemUpdate }) => {
  const { newsTypeId } = data;

  return (await callApi({
    method: 'patch',
    url: `news-types/${newsTypeId}`,
    body: data,
    instanceName: 'adm_new',
  })) as ItemForm;
});

export const getNewsTypeById = createAsyncThunk(
  `${sliceName}/getNewsTypeById`,
  async ({ newsTypeId }: { newsTypeId: number }) => {
    return (await callApi({
      method: 'get',
      url: `news-types/${newsTypeId}`,
      instanceName: 'adm_new',
    })) as ItemForm;
  },
);

// export const getPropertyLogById = createAsyncThunk(
//   `${sliceName}/getPropertyLogById`,
//   async ({ data }: { data: FilterHistory }) => {
//     const { bankId } = data;

//     const response = await callApi({
//       method: 'post',
//       url: `banks/${bankId}/bank-logs/list`,
//       body: data,
//       instanceName: 'mdm',
//     });
//     const { content, totalElements, number } = response as {
//       content: BankHistoryItem[];
//       totalElements: number;
//       number: number;
//     };

//     return { content, totalElements, number };
//   },
// );
