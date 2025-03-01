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

export const getAddressAccidentDistrictsList = createAsyncThunk(
  `${sliceName}/getAddressAccidentDistrictsList`,
  async ({ provinceId }: GetDistrictListParams) => {
    return await getDistrictList({ provinceId });
  },
);

export const getAddressAccidentSubDistrictsList = createAsyncThunk(
  `${sliceName}/getAddressAccidentSubDistrictsList`,
  async ({ provinceId, districtId }: GetSubDistrictListParams) => {
    return await getSubDistrictList({
      provinceId,
      districtId,
    });
  },
);
export const getAddressAccidentPostalList = createAsyncThunk(
  `${sliceName}/getAddressAccidentPostalList`,
  async ({ subDistrictCode, districtCode, provinceCode }: GetPostalListParams) => {
    return await getPostalList({
      subDistrictCode,
      districtCode,
      provinceCode,
    });
  },
);
