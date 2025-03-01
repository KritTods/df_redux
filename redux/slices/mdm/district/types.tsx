import { FormDefault, InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';
import { ProvinceItem } from '../province';

export const sliceName = 'district';

// * -- FilterSearch --
export interface FilterSearch {
  provinceId?: number | null;
  pagination: Pagination;
  isActive?: string;
}

export const filter: FilterSearch = {
  provinceId: null,
  isActive: 'Y',
  pagination,
};

// * -- Item --
export interface DistrictItem {
  districtId: number;
  districtCode: string;
  districtName: string;
  province: ProvinceItem;
  ssoBranchCode: string;
  districtType: number;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export interface ItemCreate {
  provinceId: number;
  districtCode: string;
  districtName: string;
  ssoBranchCode: string;
  districtType: number;
  isActive: string;
}

export interface ItemUpdate {
  districtId: number;
  districtName: string;
  ssoBranchCode: string;
  districtType: number;
  isActive: string;
}

// * -- Form --

export interface ItemForm {
  provinceId?: number;
  provinceCode?: string;
  districtName: string;
  districtCode: string;
  districtType?: number;
  ssoBranchCode: string;
  province?: ProvinceItem;
  isActive: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export const itemForm: ItemForm = {
  districtName: '',
  provinceCode: '',
  districtCode: '',
  ssoBranchCode: '',
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
  list: DistrictItem[];
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
