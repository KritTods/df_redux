import { pagination } from 'wcf-component-lib/src/constants/initialValue';
import { InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
export const sliceName = 'reg-title';

// * -- Title --

export interface FilterSearchTitle {
  pagination: Pagination;
  titleCode?: string;
  titleName?: string;
}
export const filterTitle: FilterSearchTitle = {
  pagination,
};

export interface Title {
  createdDate: string;
  createdBy: string;
  updatedDate: string;
  updatedBy: string;
  isActive: string;
  uuid: string;
  titleCode: string;
  titleName: string;
  titleNameShort: string;
  genderChar: string;
}

// * -- Initial State --

export interface StateProp extends InitialStateDefault {
  title: {
    filterTitle: FilterSearchTitle;
    titleLoading: boolean;
    titleList: Title[];
    totalElements: number;
  };
}

export const initialState: StateProp = {
  loading: false,
  loadData: true,
  title: {
    filterTitle,
    titleLoading: true,
    titleList: [],
    totalElements: 0,
  },
};
