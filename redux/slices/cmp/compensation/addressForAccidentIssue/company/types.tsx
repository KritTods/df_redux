import { DistrictItem } from '@/redux/slices/mdm/district';
import { ItemList as SubDistrict } from '@/redux/slices/mdm/subDistrict';
import { ItemList as Postal } from '@/redux/slices/mdm/postal';
export const sliceName = 'cmp-compensation-addressForCompanyIssue-company';

// * -- Initial State --

export interface StateProp {
  district: {
    loading: boolean;
    addressCompanyDistrictsList: DistrictItem[] | [];
  };
  subDistrict: {
    loading: boolean;
    addressCompanySubDistrictsList: SubDistrict[] | [];
  };
  postal: {
    loading: boolean;
    addressCompanyPostalList: Postal[] | [];
  };
}

export const initialState: StateProp = {
  district: {
    loading: false,
    addressCompanyDistrictsList: [],
  },
  subDistrict: {
    loading: false,
    addressCompanySubDistrictsList: [],
  },
  postal: {
    loading: false,
    addressCompanyPostalList: [],
  },
};
