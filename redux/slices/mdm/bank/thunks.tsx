import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  sliceName,
  FilterSearch,
  ItemCreate,
  ItemUpdate,
  FilterHistory,
  BankItem,
  BankHistoryItem,
  ItemForm,
} from './types';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { omitBy, isNil } from 'lodash';

export const getBankList = createAsyncThunk(`${sliceName}/list`, async ({ data }: { data: FilterSearch }) => {
  const newFilter = omitBy(data, (value) => isNil(value) || value === '');

  const response = await callApi({
    method: 'post',
    url: 'banks/list',
    body: newFilter,
    instanceName: 'mdm',
  });

  const { content, totalElements, number } = response as { content: BankItem[]; totalElements: number; number: number };

  return { content, totalElements, number };
});

export const createBank = createAsyncThunk(`${sliceName}/create`, async ({ data }: { data: ItemCreate }) => {
  return (await callApi({
    method: 'post',
    url: 'banks',
    body: data,
    instanceName: 'mdm',
  })) as ItemForm;
});

export const updateBank = createAsyncThunk(`${sliceName}/update`, async ({ data }: { data: ItemUpdate }) => {
  const { bankId } = data;

  return (await callApi({
    method: 'patch',
    url: `banks/${bankId}`,
    body: data,
    instanceName: 'mdm',
  })) as ItemForm;
});

export const getBankById = createAsyncThunk(`${sliceName}/getBankById`, async ({ bankId }: { bankId: number }) => {
  return (await callApi({
    method: 'get',
    url: `banks/${bankId}`,
    instanceName: 'mdm',
  })) as ItemForm;
});

export const getBankLogById = createAsyncThunk(
  `${sliceName}/getBankLogById`,
  async ({ data }: { data: FilterHistory }) => {
    const { bankId } = data;

    const response = await callApi({
      method: 'post',
      url: `banks/${bankId}/bank-logs/list`,
      body: data,
      instanceName: 'mdm',
    });
    const { content, totalElements, number } = response as {
      content: BankHistoryItem[];
      totalElements: number;
      number: number;
    };

    return { content, totalElements, number };
  },
);
