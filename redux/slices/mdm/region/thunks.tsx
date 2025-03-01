import { createAsyncThunk } from '@reduxjs/toolkit';
import { RegionItem, sliceName } from './types';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { SelectData } from 'wcf-component-lib/src/constants/interface';

export const getRegionList = createAsyncThunk(`${sliceName}`, async () => {
  const response = await callApi({
    method: 'get',
    url: 'properties?name=REGION&mode=map',
    instanceName: 'adm_tool',
  });
  const list: SelectData[] = Object.entries(response as RegionItem).map(([key, value]) => ({
    value: Number(key),
    label: value,
  }));

  return { list };
});
