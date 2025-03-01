import { createAsyncThunk } from '@reduxjs/toolkit';
import { sliceName } from './types';
import {
  getDistrictList,
  GetDistrictListParams,
  getPostalList,
  GetPostalListParams,
  getSubDistrictList,
  GetSubDistrictListParams,
} from '../service';

export const getAddressCompanyDistrictsList = createAsyncThunk(
  `${sliceName}/getAddressCompanyDistrictsList`,
  async ({ provinceId }: GetDistrictListParams) => {
    return await getDistrictList({ provinceId });
  },
);

export const getAddressCompanySubDistrictsList = createAsyncThunk(
  `${sliceName}/getAddressCompanySubDistrictsList`,
  async ({ provinceId, districtId }: GetSubDistrictListParams) => {
    return await getSubDistrictList({
      provinceId,
      districtId,
    });
  },
);
export const getAddressCompanyPostalList = createAsyncThunk(
  `${sliceName}/getAddressCompanyPostalList`,
  async ({ subDistrictCode, districtCode, provinceCode }: GetPostalListParams) => {
    return await getPostalList({
      subDistrictCode,
      districtCode,
      provinceCode,
    });
  },
);
