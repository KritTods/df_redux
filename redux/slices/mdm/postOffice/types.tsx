import { FormDefault, InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';

export const sliceName = 'postOffice';

// * -- FilterSearch --
export interface FilterSearch {
  pagination: Pagination;
  provinceCode?: string;
  districtCode?: string;
  postOfficeCodeLike?: string;
  postOfficeNameLike?: string;
  isActive?: string;
  provinceName?: string;
  districtName?: string;
  provinceId?: number;
}

export const filter: FilterSearch = {
  pagination,
  provinceCode: '',
  districtCode: '',
  postOfficeCodeLike: '',
  postOfficeNameLike: '',
  isActive: 'Y',
  provinceName: '',
  districtName: '',
};

// * -- Item --
export interface PostOfficeItem {
  postOfficeId: number;
  postOfficeCode: string;
  postOfficeName: string;
  districtCode: string;
  provinceCode: string;
  isActive: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

// * -- Form --

export interface ItemCreate {
  postOfficeCode: string;
  postOfficeName: string;
  districtCode: string;
  provinceCode: string;
  isActive: string;
}

export interface ItemUpdate {
  postOfficeId: number;
  postOfficeCode: string;
  postOfficeName: string;
  districtCode: string;
  provinceCode: string;
  isActive: string;
}

export interface ItemForm {
  provinceCode: string;
  districtCode: string;
  postOfficeCode: string;
  postOfficeName: string;
  isActive: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export const itemForm: ItemForm = {
  provinceCode: '',
  districtCode: '',
  postOfficeCode: '',
  postOfficeName: '',
  isActive: 'Y',
  createdDate: '',
  createdBy: '',
  lastUpdatedDate: '',
  lastUpdatedBy: '',
};

export interface Form extends FormDefault {
  item: ItemForm;
}

export const form: Form = {
  type: 'add',
  loading: false,
  item: itemForm,
};

// * -- Initial State --

export interface StateProp extends InitialStateDefault {
  list: PostOfficeItem[];
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
