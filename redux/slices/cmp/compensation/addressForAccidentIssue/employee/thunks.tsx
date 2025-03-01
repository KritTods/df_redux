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

export const getAddressEmployeeDistrictsList = createAsyncThunk(
  `${sliceName}/getAddressEmployeeDistrictsList`,
  async ({ provinceId }: GetDistrictListParams) => {
    return await getDistrictList({ provinceId });
  },
);

export const getAddressEmployeeSubDistrictsList = createAsyncThunk(
  `${sliceName}/getAddressEmployeeSubDistrictsList`,
  async ({ provinceId, districtId }: GetSubDistrictListParams) => {
    return await getSubDistrictList({
      provinceId,
      districtId,
    });
  },
);
export const getAddressEmployeePostalList = createAsyncThunk(
  `${sliceName}/getAddressEmployeePostalList`,
  async ({ subDistrictCode, districtCode, provinceCode }: GetPostalListParams) => {
    return await getPostalList({
      subDistrictCode,
      districtCode,
      provinceCode,
    });
  },
);
