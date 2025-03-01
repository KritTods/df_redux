import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  sliceName,
  FilterSearch,
  ItemCreate,
  ItemUpdate,
  // FilterHistory,
  // BankItem,
  // BankHistoryItem,
  ItemForm,
  TitleItem,
} from './types';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { omitBy, isNil } from 'lodash';

export const getTitleList = createAsyncThunk(`${sliceName}/list`, async ({ data }: { data: FilterSearch }) => {
  const newFilter = omitBy(data, (value) => isNil(value) || value === '');

  const response = await callApi({
    method: 'post',
    url: 'titles/list',
    body: newFilter,
    instanceName: 'mdm',
  });

  const { content, totalElements, number } = response as {
    content: TitleItem[];
    totalElements: number;
    number: number;
  };

  return { content, totalElements, number };
});

export const createTitle = createAsyncThunk(`${sliceName}/create`, async ({ data }: { data: ItemCreate }) => {
  return (await callApi({
    method: 'post',
    url: 'titles',
    body: data,
    instanceName: 'mdm',
  })) as ItemForm;
});

export const updateTitle = createAsyncThunk(`${sliceName}/update`, async ({ data }: { data: ItemUpdate }) => {
  const { titleId } = data;

  return (await callApi({
    method: 'patch',
    url: `titles/${titleId}`,
    body: data,
    instanceName: 'mdm',
  })) as ItemForm;
});

export const getTitleById = createAsyncThunk(`${sliceName}/getTitleById`, async ({ titleId }: { titleId: number }) => {
  return (await callApi({
    method: 'get',
    url: `titles/${titleId}`,
    instanceName: 'mdm',
  })) as ItemForm;
});

// export const getBankLogById = createAsyncThunk(
//   `${sliceName}/getBankLogById`,
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
