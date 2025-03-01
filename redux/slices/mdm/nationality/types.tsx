import { FormDefault, InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';

export const sliceName = 'nationality';

// * -- FilterSearch --
export interface FilterSearch {
  nationalityCodeLike?: string;
  nationalityNameLike?: string;
  pagination: Pagination;
}

export const filter: FilterSearch = {
  nationalityCodeLike: '',
  nationalityNameLike: '',
  pagination,
};

// * -- Item --
export interface NationalityItem {
  nationalityId: number;
  nationalityCode: string;
  nationalityName: string;
  statusThai: string;
  isActive: string;
  createdBy: string;
  createdDate: string;
  lastUpdatedBy: string;
  lastUpdatedDate: string;
}

export interface ItemCreate {
  nationalityCode: string;
  nationalityName: string;
  statusThai: string;
  isActive: string;
}

export interface ItemUpdate {
  nationalityId: number;
  nationalityCode: string;
  nationalityName: string;
  statusThai: string;
  isActive: string;
}

// * -- Form --

export interface ItemForm {
  nationalityId: number;
  nationalityCode: string;
  nationalityName: string;
  statusThai: string;
  isActive: string;
  createdBy: string;
  createdDate: string;
  lastUpdatedBy: string;
  lastUpdatedDate: string;
}

export const itemForm: ItemForm = {
  nationalityId: 0,
  nationalityCode: '',
  nationalityName: '',
  statusThai: '',
  isActive: '',
  createdBy: '',
  createdDate: '',
  lastUpdatedBy: '',
  lastUpdatedDate: '',
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
  list: NationalityItem[];
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
