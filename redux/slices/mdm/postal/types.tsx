import { FormDefault, InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';

export const sliceName = 'postal';

// * -- FilterSearch --
export interface FilterSearch {
  pagination: Pagination;
  provinceId: string | null;
  districtId: string | null;
  subDistrictId: string | null;
  provinceCode: string | null;
  districtCode: string | null;
  subDistrictCode: string | null;
  provinceName: string;
  districtName: string;
  isActive: string;
}

export const filter: FilterSearch = {
  pagination,
  provinceId: null,
  districtId: null,
  subDistrictId: null,
  provinceCode: null,
  districtCode: null,
  subDistrictCode: null,
  provinceName: '',
  districtName: '',
  isActive: 'Y',
};

// * -- Item --
export interface ItemList {
  postalId: number;
  postalCode: string;
  postalName: string;
  subDistrictCode: string;
  districtCode: string;
  provinceCode: string;
  isActive: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

// * -- Form --

export interface ItemToApi {
  postalCode: string;
  postalName: string;
  subDistrictCode: string;
  districtCode: string;
  provinceCode: string;
  isActive: string;
}

export interface ItemForm {
  postalCode: string;
  postalName: string;
  provinceId: string | null;
  districtId: string | null;
  subDistrictId: string | null;
  provinceCode: string | null;
  districtCode: string | null;
  subDistrictCode: string | null;
  isActive: string;
  provinceName?: string;
  districtName?: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export const itemForm: ItemForm = {
  postalCode: '',
  postalName: '',
  provinceId: '',
  districtId: '',
  subDistrictId: '',
  provinceCode: null,
  districtCode: null,
  subDistrictCode: null,
  isActive: 'Y',
  provinceName: '',
  districtName: '',
  createdDate: '',
  createdBy: '',
  lastUpdatedDate: '',
  lastUpdatedBy: '',
};

export interface Form extends FormDefault {
  item: ItemForm;
  provinceId: string;
  districtId: string;
  provinceName: string;
  districtName: string;
  postalId: string;
}

export const form: Form = {
  type: 'add',
  loading: false,
  provinceId: '',
  districtId: '',
  provinceName: '',
  districtName: '',
  postalId: '',
  item: itemForm,
};

// * -- Initial State --

export interface StateProp extends InitialStateDefault {
  list: ItemList[];
  form: Form;
  totalElements: number;
  filter: FilterSearch;
  currentPage: number;
}

export const initialState: StateProp = {
  loading: false,
  loadData: false,
  form,
  list: [],
  totalElements: 0,
  filter,
  currentPage: 0,
};
