import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { FilterSearchTitle, Title, sliceName } from './types';
import { omitBy, isNil } from 'lodash';

export const getTitleList = createAsyncThunk(
  `${sliceName}/getTitle`,
  async ({ filterTitle }: { filterTitle: FilterSearchTitle }) => {
    const newFilter = omitBy(filterTitle, (value) => isNil(value) || value === '');
    const response = await callApi({
      method: 'post',
      url: 'master/title/list',
      body: newFilter,
      instanceName: 'reg',
    });

    const { content, totalElements, number } = response as {
      content: Title[];
      totalElements: number;
      number: number;
    };

    return { content, totalElements, number };
  },
);
