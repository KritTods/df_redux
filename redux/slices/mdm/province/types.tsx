import { FormDefault, InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';

export const sliceName = 'province';

// * -- FilterSearch --
export interface FilterSearch {
  region?: number | null;
  provinceCode?: string;
  provinceNameLike?: string;
  pagination: Pagination;
  isActive?: string;
}

export const filter: FilterSearch = {
  region: null,
  provinceCode: '',
  provinceNameLike: '',
  pagination,
  isActive: 'Y',
};

export interface ProvinceItem {
  provinceId: number;
  provinceCode: string;
  provinceName: string;
  region: number | undefined;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

// * -- Item --

export interface ItemCreate {
  provinceCode: string;
  provinceName: string;
  region: number | undefined;
  isActive: string;
}

export interface ItemUpdate {
  region: number | undefined;
  provinceId: number;
  provinceCode: string;
  provinceName: string;
  isActive: string;
}

// * -- Form --

export interface ItemForm {
  region: number | undefined;
  provinceCode: string;
  provinceName: string;
  isActive: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export const itemForm: ItemForm = {
  region: undefined,
  provinceCode: '',
  provinceName: '',
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
  list: ProvinceItem[];
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
