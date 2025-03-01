import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  sliceName,
  FilterSearch,
  ItemCreate,
  ItemUpdate,
  // FilterHistory,
  ItemForm,
  NewsItem,
} from './types';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { omitBy, isNil } from 'lodash';

export const getNewsList = createAsyncThunk(`${sliceName}/list`, async ({ data }: { data: FilterSearch }) => {
  const { newsTypeId } = data;
  const newFilter = omitBy(data, (value) => isNil(value) || value === '');
  const response = await callApi({
    method: 'post',
    url: `news-types/${newsTypeId}/news/list`,
    body: newFilter,
    instanceName: 'adm_new',
  });

  const { content, totalElements, number } = response as {
    content: NewsItem[];
    totalElements: number;
    number: number;
  };

  return { content, totalElements, number };
});

export const createNews = createAsyncThunk(`${sliceName}/create`, async ({ data }: { data: ItemCreate }) => {
  const { newsTypeId } = data;

  return (await callApi({
    method: 'post',
    url: `news-types/${newsTypeId}/news`,
    body: data,
    instanceName: 'adm_new',
  })) as ItemForm;
});

export const updateNews = createAsyncThunk(`${sliceName}/update`, async ({ data }: { data: ItemUpdate }) => {
  const { newsId } = data;

  return (await callApi({
    method: 'patch',
    url: `news/${newsId}`,
    body: data,
    instanceName: 'adm_new',
  })) as ItemForm;
});

export const getNewsById = createAsyncThunk(`${sliceName}/getNewsById`, async ({ newsId }: { newsId: number }) => {
  return (await callApi({
    method: 'get',
    url: `news/${newsId}`,
    instanceName: 'adm_new',
  })) as ItemForm;
});

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
