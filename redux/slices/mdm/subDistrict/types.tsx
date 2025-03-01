import { FormDefault, InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';
import { ProvinceItem } from '../province';

export const sliceName = 'subDistrict';

// * -- FilterSearch --
export interface FilterSearch {
  pagination: Pagination;
  provinceId: string | null;
  districtId: string | null;
  isActive: string;
}

export const filter: FilterSearch = {
  pagination,
  provinceId: null,
  districtId: null,
  isActive: 'Y',
};

// * -- Item --
export interface ItemList {
  subDistrictId: number;
  subDistrictCode: string;
  subDistrictName: string;
  province: ProvinceItem;
  ssoBranchCode: string;
  subDistrictType: number;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

// * -- Form --

export interface ItemCreate {
  subDistrictCode: string;
  subDistrictName: string;
  provinceId: string;
  districtId: string;
  isActive: string;
}
export interface ItemUpdate {
  subDistrictName: string;
  subDistrictId: string;
  isActive: string;
}
export interface ItemForm {
  subDistrictCode: string;
  subDistrictName: string;
  provinceId: string;
  districtId: string;
  isActive: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export const itemForm: ItemForm = {
  subDistrictCode: '',
  subDistrictName: '',
  provinceId: '',
  districtId: '',
  isActive: 'Y',
  createdDate: '',
  createdBy: '',
  lastUpdatedDate: '',
  lastUpdatedBy: '',
};

export interface Form extends FormDefault {
  item: ItemForm;
  provinceId: string;
  districtId: string;
  subDistrictId: string;
  districtCode: string;
}

export const form: Form = {
  type: 'add',
  loading: false,
  provinceId: '',
  districtId: '',
  districtCode: '',
  subDistrictId: '',
  item: itemForm,
};

// * -- Initial State --

export interface StateProp extends InitialStateDefault {
  list: ItemList[];
  form: Form;
  totalElements: number;
  filter: FilterSearch;
}

export const initialState: StateProp = {
  loading: false,
  loadData: false,
  form,
  list: [],
  totalElements: 0,
  filter,
};
