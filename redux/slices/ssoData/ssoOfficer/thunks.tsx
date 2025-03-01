import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { ItemByUserLogin, sliceName } from './types';

export const getSsoOfficerById = createAsyncThunk(
  `${sliceName}/getSsoOfficerById`,
  async ({ userLogin }: { userLogin: string }): Promise<ItemByUserLogin> => {
    return (await callApi({
      method: 'get',
      url: `sso-officer/info?userLogin=${userLogin}`,
      instanceName: 'ssoData',
    })) as ItemByUserLogin;
  },
);
