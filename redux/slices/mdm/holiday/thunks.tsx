import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  sliceName,
  FilterSearch,
  ItemUpdate,
  ItemCreate,
  ItemList,
  ItemForm,
  FilterHistoryHolidayLog,
  HolidayLogHistoryItem,
} from './types';
import { omitBy, isNil } from 'lodash';

import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';

interface GetHolidayList {
  filter: FilterSearch;
}
export const getHolidayList = createAsyncThunk(`${sliceName}/list`, async ({ filter }: GetHolidayList) => {
  const newFilter = omitBy(filter, (value) => isNil(value) || value === '');

  const response = await callApi({
    method: 'post',
    url: 'holidays/list',
    body: newFilter,
    instanceName: 'mdm',
  });
  const { content, totalElements, number } = response as { content: ItemList[]; totalElements: number; number: number };

  return { content, totalElements, number };
});

export const getHolidayById = createAsyncThunk(
  `${sliceName}/getUserById`,
  async ({ holidayId }: { holidayId: number }): Promise<ItemForm> => {
    const response = (await callApi({
      method: 'get',
      url: `holidays/${holidayId}`,
      instanceName: 'mdm',
    })) as ItemForm;

    const holidayDate = response.holidayDay + '-' + response.holidayMonth + '-' + response.holidayYear;

    return { ...response, holidayDate };
  },
);

export const createHoliday = createAsyncThunk(`${sliceName}/create`, async ({ data }: { data: ItemCreate }) => {
  return await callApi({
    method: 'post',
    url: 'holidays',
    body: data,
    instanceName: 'mdm',
  });
});

export const updateHoliday = createAsyncThunk(
  `${sliceName}/update`,
  async ({ holidayId, data }: { holidayId: number; data: ItemUpdate }) => {
    return await callApi({
      method: 'patch',
      url: `holidays/${holidayId}`,
      body: data,
      instanceName: 'mdm',
    });
  },
);

export const getHolidayLogHistory = createAsyncThunk(
  `${sliceName}/logs/list`,
  async ({ holidayId, filterHistory }: { holidayId: number; filterHistory: FilterHistoryHolidayLog }) => {
    const newFilter = omitBy(filterHistory, (value) => isNil(value) || value === '');

    const response = await callApi({
      method: 'post',
      url: `holidays/${holidayId}/holidays-logs/list`,
      body: newFilter,
      instanceName: 'mdm',
    });
    const { content, totalElements, number } = response as {
      content: HolidayLogHistoryItem[];
      totalElements: number;
      number: number;
    };

    return { content, totalElements, number };
  },
);
