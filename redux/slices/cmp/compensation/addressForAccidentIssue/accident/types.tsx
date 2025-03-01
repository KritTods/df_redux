import { DistrictItem } from '@/redux/slices/mdm/district';
import { ItemList as SubDistrict } from '@/redux/slices/mdm/subDistrict';
import { ItemList as Postal } from '@/redux/slices/mdm/postal';
export const sliceName = 'cmp-compensation-addressForAccidentIssue-accident';

// * -- Initial State --

export interface StateProp {
  district: {
    loading: boolean;
    addressAccidentDistrictsList: DistrictItem[] | [];
  };
  subDistrict: {
    loading: boolean;
    addressAccidentSubDistrictsList: SubDistrict[] | [];
  };
  postal: {
    loading: boolean;
    addressAccidentPostalList: Postal[] | [];
  };
}

export const initialState: StateProp = {
  district: {
    loading: false,
    addressAccidentDistrictsList: [],
  },
  subDistrict: {
    loading: false,
    addressAccidentSubDistrictsList: [],
  },
  postal: {
    loading: false,
    addressAccidentPostalList: [],
  },
};
