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

export const getAddressWitnessDistrictsList = createAsyncThunk(
  `${sliceName}/getAddressWitnessDistrictsList`,
  async ({ provinceId }: GetDistrictListParams) => {
    return await getDistrictList({ provinceId });
  },
);

export const getAddressWitnessSubDistrictsList = createAsyncThunk(
  `${sliceName}/getAddressWitnessSubDistrictsList`,
  async ({ provinceId, districtId }: GetSubDistrictListParams) => {
    return await getSubDistrictList({
      provinceId,
      districtId,
    });
  },
);
export const getAddressWitnessPostalList = createAsyncThunk(
  `${sliceName}/getAddressWitnessPostalList`,
  async ({ subDistrictCode, districtCode, provinceCode }: GetPostalListParams) => {
    return await getPostalList({
      subDistrictCode,
      districtCode,
      provinceCode,
    });
  },
);
