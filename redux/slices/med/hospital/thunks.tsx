import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { FilterSearch, Hospital, sliceName } from './types';
import { omitBy, isNil } from 'lodash';

// Get Hospital List
export const getHospitalInfo = createAsyncThunk(
  `${sliceName}/getHospitalInfo`,
  async ({ filter }: { filter: FilterSearch }) => {
    const newFilter = omitBy(filter, (value) => isNil(value) || value === '');

    const response = await callApi({
      method: 'post',
      url: 'hospital/list',
      body: newFilter,
      instanceName: 'med',
    });

    const { content, totalElements } = response as {
      content: Hospital[];
      totalElements: number;
    };

    return { content, totalElements };
  },
);
