import { FormDefault, InitialStateDefault } from 'wcf-component-lib/src/constants/interface';

export const sliceName = 'userGroup';

// * -- Item --
export interface ItemList {
  userGroupId: number;
  name: string;
  description: string;
  isActive: string;
  isUmRole: string;
}

// * -- Filter --
export interface FilterSearch {
  search: string;
}

export const filter: FilterSearch = {
  search: '',
};

// * -- Form --
export interface ItemForm {
  userGroupId?: number;
  name: string;
  description: string;
  isActive: string;
  isUmRole: string;
}

export const item: ItemForm = {
  userGroupId: 0,
  name: '',
  description: '',
  isActive: 'Y',
  isUmRole: 'Y',
};

export interface Form extends FormDefault {
  userGroupId: number;
  item: ItemForm;
  name: string;
}

export const form: Form = {
  userGroupId: 0,
  type: 'add',
  loading: false,
  item,
  name: '',
};

// * -- Initial State --
export interface StateProp extends InitialStateDefault {
  list: ItemList[];
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
};
