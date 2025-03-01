import { createAsyncThunk } from '@reduxjs/toolkit';
import { sliceName, Item } from './types';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';

export const getPropertiesByName = createAsyncThunk(
  `${sliceName}/getPropertiesByName`,
  async ({ name }: { name: number }) => {
    const response = await callApi({
      method: 'get',
      url: `properties?name=${name}&mode=objects`,
      instanceName: 'adm_tool',
    });

    return { [name]: response };
  },
);

export const getPropertiesForAccidentIssue = createAsyncThunk(
  `${sliceName}/getPropertiesForAccidentIssue`,
  async (): Promise<Record<string, Item[] | []>> => {
    const [response1, response2, response3] = await Promise.all([
      // ? ACCIDENT_PLACE
      callApi({
        method: 'get',
        url: 'properties?name=ACCIDENT_PLACE&mode=objects',
        instanceName: 'adm_tool',
      }) as Promise<Item[]>,
      // ?   WAGE_TYPE
      callApi({
        method: 'get',
        url: 'properties?name=WAGE_TYPE&mode=objects',
        instanceName: 'adm_tool',
      }) as Promise<Item[]>,
      // ?   SEVERITY_CODE
      callApi({
        method: 'get',
        url: 'properties?name=SEVERITY_CODE&mode=objects',
        instanceName: 'adm_tool',
      }) as Promise<Item[]>,
    ]);

    return { ACCIDENT_PLACE: response1, WAGE_TYPE: response2, SEVERITY_CODE: response3 };
  },
);
