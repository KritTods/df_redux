import { DistrictItem } from '@/redux/slices/mdm/district';
import { ItemList as SubDistrict } from '@/redux/slices/mdm/subDistrict';
import { ItemList as Postal } from '@/redux/slices/mdm/postal';
export const sliceName = 'cmp-compensation-addressForAccidentIssue-employee';

// * -- Initial State --

export interface StateProp {
  district: {
    loading: boolean;
    addressEmployeeDistrictsList: DistrictItem[] | [];
  };
  subDistrict: {
    loading: boolean;
    addressEmployeeSubDistrictsList: SubDistrict[] | [];
  };
  postal: {
    loading: boolean;
    addressEmployeePostalList: Postal[] | [];
  };
}

export const initialState: StateProp = {
  district: {
    loading: false,
    addressEmployeeDistrictsList: [],
  },
  subDistrict: {
    loading: false,
    addressEmployeeSubDistrictsList: [],
  },
  postal: {
    loading: false,
    addressEmployeePostalList: [],
  },
};
