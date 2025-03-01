import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import {
  sliceName,
  DataUpdateAccidentIssue,
  FilterSearch,
  AccidentIssueLogHistoryItem,
  FilterHistoryAccidentIssueLog,
  ItemList,
  ItemAccidentIssueForm,
} from './types';
import { omitBy, isNil } from 'lodash';

export const getAccidentIssueList = createAsyncThunk(`${sliceName}/list`, async (filter: FilterSearch) => {
  try {
    const newFilter = omitBy(filter.condition, (value) => isNil(value) || value === '');

    const body = { ...filter, condition: newFilter };

    const response = await callApi({
      method: 'post',
      url: 'compensation/searchRequestStatus',
      body,
      instanceName: 'cmp',
    });

    const { content, totalElements, number } = response as {
      content: ItemList[];
      totalElements: number;
      number: number;
    };

    return { content: content || [], totalElements, number };
  } catch (error) {
    return { content: [], totalElements: 0, number: 0 };
  }
});

export const getAccidentIssueById = createAsyncThunk(
  `${sliceName}/getAccidentIssueById`,
  async ({ accidentIssueId }: { accidentIssueId: string }) => {
    const response = await callApi({
      method: 'post',
      url: 'compensation/searchAccidentIssueById',
      body: { accidentIssueId },
      instanceName: 'cmp',
    });

    const { content } = response as {
      content: ItemAccidentIssueForm;
    };

    return content;
  },
);

export const updateAccidentIssue = createAsyncThunk(
  `${sliceName}/update`,
  async ({ data, accidentIssueId }: { data: DataUpdateAccidentIssue; accidentIssueId: number }) => {
    return await callApi({
      method: 'patch',
      url: `compensation/${accidentIssueId}`,
      body: data,
      instanceName: 'cmp',
    });
  },
);

export const getAccidentIssueLogHistory = createAsyncThunk(
  `${sliceName}/logs/list`,
  async ({
    accidentIssueId,
    filterHistory,
  }: {
    accidentIssueId: number;
    filterHistory: FilterHistoryAccidentIssueLog;
  }) => {
    const newFilter = omitBy(filterHistory, (value) => isNil(value) || value === '');

    const response = await callApi({
      method: 'post',
      url: `compensation/${accidentIssueId}/accidentIssue-logs/list`,
      body: newFilter,
      instanceName: 'cmp',
    });
    const { content, totalElements, number } = response as {
      content: AccidentIssueLogHistoryItem[];
      totalElements: number;
      number: number;
    };

    return { content, totalElements, number };
  },
);
