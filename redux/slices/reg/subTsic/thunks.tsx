import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { FilterSearchSubTsic, SubTsic, sliceName } from './types';
import { omitBy, isNil } from 'lodash';

export const getSubTsicList = createAsyncThunk(
  `${sliceName}/getSubTsic`,
  async ({ filterSubTsic }: { filterSubTsic: FilterSearchSubTsic }) => {
    const newFilter = omitBy(filterSubTsic, (value) => isNil(value) || value === '');
    const response = await callApi({
      method: 'post',
      url: 'master/sub-tsic/list',
      body: newFilter,
      instanceName: 'reg',
    });

    const { content, totalElements, number } = response as {
      content: SubTsic[];
      totalElements: number;
      number: number;
    };

    return { content, totalElements, number };
  },
);
