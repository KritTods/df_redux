import { pagination } from 'wcf-component-lib/src/constants/initialValue';
import { InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
export const sliceName = 'reg-subTsic';

// * -- SubTsic --

export interface FilterSearchSubTsic {
  pagination: Pagination;
  isActive?: string;
}
export const filterSubTsic: FilterSearchSubTsic = {
  pagination,
  isActive: 'Y',
};

export interface SubTsic {
  createdDate: string;
  createdBy: string;
  updatedDate: string;
  updatedBy: string;
  isActive: string;
  uuid: string;
  subTsicCode: string;
  subTsicName: string;
}

// * -- Initial State --

export interface StateProp extends InitialStateDefault {
  subTsic: {
    filterSubTsic: FilterSearchSubTsic;
    subTsicLoading: boolean;
    subTsicList: SubTsic[];
    totalElements: number;
  };
}

export const initialState: StateProp = {
  loading: false,
  loadData: true,
  subTsic: {
    filterSubTsic,
    subTsicLoading: true,
    subTsicList: [],
    totalElements: 0,
  },
};
