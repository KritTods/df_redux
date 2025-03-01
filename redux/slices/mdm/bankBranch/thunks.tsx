import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  sliceName,
  ItemCreate,
  ItemUpdate,
  FilterHistory,
  BankBranchItem,
  BankBranchHistoryItem,
  FilterSearch,
} from './types';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { omitBy, isNil } from 'lodash';

export const getBankBranchList = createAsyncThunk(`${sliceName}/list`, async ({ data }: { data: FilterSearch }) => {
  const bankId = data.bankId as number;

  const newFilter = omitBy(data, (value) => isNil(value) || value === '');
  const response = await callApi({
    method: 'post',
    url: `banks/${bankId}/bank-branches/list`,
    body: newFilter,
    instanceName: 'mdm',
  });
  const { content, totalElements, number } = response as {
    content: BankBranchItem[];
    totalElements: number;
    number: number;
  };

  return { content, totalElements, number };
});

export const createBankBranch = createAsyncThunk(`${sliceName}/create`, async ({ data }: { data: ItemCreate }) => {
  const { bankId } = data;

  return await callApi({
    method: 'post',
    url: `banks/${bankId}/bank-branches`,
    body: data,
    instanceName: 'mdm',
  });
});

export const updateBankBranch = createAsyncThunk(`${sliceName}/update`, async ({ data }: { data: ItemUpdate }) => {
  const { bankBranchId } = data;

  return await callApi({
    method: 'patch',
    url: `bank-branches/${bankBranchId}`,
    body: data,
    instanceName: 'mdm',
  });
});

export const getBankBranchById = createAsyncThunk(
  `${sliceName}/getBankBranchById`,
  async ({ bankBranchId }: { bankBranchId: number }) => {
    return await callApi({
      method: 'get',
      url: `bank-branches/${bankBranchId}`,
      instanceName: 'mdm',
    });
  },
);

export const getBankBranchLogById = createAsyncThunk(
  `${sliceName}/getBankBranchLogById`,
  async ({ data }: { data: FilterHistory }) => {
    const { bankBranchId } = data;
    const response = await callApi({
      method: 'post',
      url: `bank-branches/${bankBranchId}/bank-branch-logs/list`,
      body: data,
      instanceName: 'mdm',
    });
    const { content, totalElements, number } = response as {
      content: BankBranchHistoryItem[];
      totalElements: number;
      number: number;
    };

    return { content, totalElements, number };
  },
);
