import { DistrictItem } from '@/redux/slices/mdm/district';
import { ItemList as SubDistrict } from '@/redux/slices/mdm/subDistrict';
import { ItemList as Postal } from '@/redux/slices/mdm/postal';
export const sliceName = 'cmp-compensation-addressForWitnessIssue-witness';

// * -- Initial State --

export interface StateProp {
  district: {
    loading: boolean;
    addressWitnessDistrictsList: DistrictItem[] | [];
  };
  subDistrict: {
    loading: boolean;
    addressWitnessSubDistrictsList: SubDistrict[] | [];
  };
  postal: {
    loading: boolean;
    addressWitnessPostalList: Postal[] | [];
  };
}

export const initialState: StateProp = {
  district: {
    loading: false,
    addressWitnessDistrictsList: [],
  },
  subDistrict: {
    loading: false,
    addressWitnessSubDistrictsList: [],
  },
  postal: {
    loading: false,
    addressWitnessPostalList: [],
  },
};
