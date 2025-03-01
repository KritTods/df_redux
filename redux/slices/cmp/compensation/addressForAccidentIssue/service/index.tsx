import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { DistrictItem } from '@/redux/slices/mdm/district';
import { ItemList as SubDistrict } from '@/redux/slices/mdm/subDistrict';
import { ItemList as Postal } from '@/redux/slices/mdm/postal';

export interface GetDistrictListParams {
  provinceId: string;
}

export const getDistrictList = async ({ provinceId }: GetDistrictListParams): Promise<DistrictItem[]> => {
  const { content } = (await callApi({
    method: 'post',
    url: `provinces/${provinceId}/districts/list`,
    body: { isActive: 'Y' },
    instanceName: 'mdm',
  })) as { content: DistrictItem[] };

  return content;
};

export interface GetSubDistrictListParams {
  provinceId: string;
  districtId: string;
}

export const getSubDistrictList = async ({
  provinceId,
  districtId,
}: GetSubDistrictListParams): Promise<SubDistrict[]> => {
  const { content } = (await callApi({
    method: 'post',
    url: `provinces/${provinceId}/districts/${districtId}/sub-districts/list`,
    body: { isActive: 'Y' },
    instanceName: 'mdm',
  })) as { content: SubDistrict[] };

  return content;
};

export interface GetPostalListParams {
  subDistrictCode: string;
  districtCode: string;
  provinceCode: string;
}

export const getPostalList = async ({
  subDistrictCode,
  districtCode,
  provinceCode,
}: GetPostalListParams): Promise<Postal[]> => {
  const { content } = (await callApi({
    method: 'post',
    url: 'postal/list',
    body: { subDistrictCode, districtCode, provinceCode, isActive: 'Y' },
    instanceName: 'mdm',
  })) as { content: Postal[] };

  return content;
};
