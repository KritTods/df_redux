import { FormDefault, InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';

export const sliceName = 'countries';

// * -- Item --
export interface ItemList {
  countryId: number;
  countryCode: string;
  countryNameTh: string;
  countryNameEn: string;
  isActive: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

// * -- FilterSearch --
export interface FilterSearch {
  operation?: string;
  countryCode?: string;
  countryNameThLike?: string;
  countryNameEnLike?: string;
  pagination: Pagination;
}

export const filter: FilterSearch = {
  countryCode: '',
  countryNameThLike: '',
  countryNameEnLike: '',
  pagination,
};

// * -- Form --
export interface ItemForm {
  countryId: number;
  countryCode: string;
  countryNameTh: string;
  countryNameEn: string;
  isActive: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export const item: ItemForm = {
  countryId: 0,
  countryCode: '',
  countryNameTh: '',
  countryNameEn: '',
  isActive: 'Y',
  createdDate: '',
  createdBy: '',
  lastUpdatedDate: '',
  lastUpdatedBy: '',
};

export interface Form extends FormDefault {
  countryId: number;
  item: ItemForm;
}

export const form: Form = {
  countryId: 0,
  type: 'add',
  loading: false,
  item,
};

// * -- Initial State --
export interface StateProp extends InitialStateDefault {
  list: ItemList[];
  form: Form;
  selected: number[];
  filter: FilterSearch;
  totalElements: number;
  currentPage: number;
}

export const initialState: StateProp = {
  loading: false,
  loadData: true,
  form,
  list: [],
  selected: [],
  filter,
  totalElements: 0,
  currentPage: 0,
};
