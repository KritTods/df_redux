import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { Company, sliceName } from './types';

// Get Company Info by accountNo and branchNo
export const getCompanyInfo = createAsyncThunk(
  `${sliceName}/getCompanyInfo`,
  async ({ accountNo, branchNo }: { accountNo: string; branchNo: string }): Promise<Company> => {
    return (await callApi({
      method: 'get',
      url: `company/info?accountNo=${accountNo}&branchNo=${branchNo}`,
      instanceName: 'ssoData',
    })) as Company;
  },
);
