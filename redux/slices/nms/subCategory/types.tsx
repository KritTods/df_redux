import { FormDefault, InitialStateDefault } from 'wcf-component-lib/src/constants/interface';


export const sliceName = 'subCategory';

// * -- Item --
export interface ItemList {
  categoryId: number | null;
  subCategoryId: number;
  subCategoryName: string;
  subCategoryCode: string;
  description: string;
  isActive: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

// * -- Filter --
export interface FilterSearch {
  categoryId?: number | null;
  isActive: string;
}

export const filter: FilterSearch = {
  categoryId: null,
  isActive: 'Y',
};

// * -- Form --
export interface ItemForm {
  categoryId: number | null;
  isActive: string | null;
}

export const item: ItemForm = {
  categoryId: null,
  isActive: 'Y',
};

export interface Form extends FormDefault {
  subCategoryId: number;
  item: ItemForm;
}

export const form: Form = {
  subCategoryId: 0,
  type: 'add',
  loading: false,
  item,
};

// * -- Initial State --
export interface StateProp extends InitialStateDefault {
  list?: ItemList[];
  totalElements: number;
  form: Form;
  selected: number[];
  filter: FilterSearch;
}

export const initialState: StateProp = {
  loading: false,
  loadData: true,
  form,
  list: [],
  selected: [],
  filter,
  totalElements: 0,
};
