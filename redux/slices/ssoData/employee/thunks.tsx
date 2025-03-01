import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { Employments, sliceName } from './types';

export const getEmploymentsSsoNum = createAsyncThunk(
  `${sliceName}/getEmploymentsSsoNum`,
  async ({ ssoNum }: { ssoNum: string }): Promise<Employments> => {
    return (await callApi({
      method: 'get',
      url: `employee/employments?ssoNum=${ssoNum}`,
      instanceName: 'ssoData',
    })) as Employments;
  },
);
