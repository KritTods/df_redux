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

export const getAddressSendDocumentDistrictsList = createAsyncThunk(
  `${sliceName}/getAddressSendDocumentDistrictsList`,
  async ({ provinceId }: GetDistrictListParams) => {
    return await getDistrictList({ provinceId });
  },
);

export const getAddressSendDocumentSubDistrictsList = createAsyncThunk(
  `${sliceName}/getAddressSendDocumentSubDistrictsList`,
  async ({ provinceId, districtId }: GetSubDistrictListParams) => {
    return await getSubDistrictList({
      provinceId,
      districtId,
    });
  },
);
export const getAddressSendDocumentPostalList = createAsyncThunk(
  `${sliceName}/getAddressSendDocumentPostalList`,
  async ({ subDistrictCode, districtCode, provinceCode }: GetPostalListParams) => {
    return await getPostalList({
      subDistrictCode,
      districtCode,
      provinceCode,
    });
  },
);
