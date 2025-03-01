import { FormDefault, InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';

export const sliceName = 'category';

// * -- Item --
export interface ItemList {
  categoryId: number;
  categoryName: string;
  categoryCode: string;
  description: string;
  categoryOrder: number;
  isActive: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

// * -- Filter --
export interface FilterSearch {
  categoryNameLike?: string;
  isActive?: string | null;
  pagination: Pagination;
}

export const filter: FilterSearch = {
  categoryNameLike: '',
  isActive: null,
  pagination,
};

// * -- Form --
export interface ItemForm {
  categoryId: number;
  isActive: string | null;
}

export const item: ItemForm = {
  categoryId: 0,
  isActive: 'Y',
};

export interface Form extends FormDefault {
  categoryId: number;
  item: ItemForm;
}

export const form: Form = {
  categoryId: 0,
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
