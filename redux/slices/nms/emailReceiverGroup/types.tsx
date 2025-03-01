import { FormDefault, InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';

export const sliceName = 'emailReceiverGroup';

// * -- Item --
export interface ItemList {
  emailGroupId: number;
  emailGroupName: string;
  description: string;
  emailGroupOrder: number;
  isActive: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
  emails: string;
  emailGroupCode: string;
}

// * -- Filter --
export interface FilterSearch {
  emailGroupNameLike: string;
  isActive: string;
  pagination: Pagination;
}

export const filter: FilterSearch = {
  emailGroupNameLike: '',
  isActive: '',
  pagination,
};

// * -- Form --
export interface ItemForm {
  emailGroupName: string;
  description: string;
  emailGroupOrder?: number;
  isActive: string;
  emails: string;
  emailGroupCode: string;
}

export const item: ItemForm = {
  emailGroupName: '',
  description: '',
  emailGroupOrder: 0,
  isActive: 'Y',
  emails: '',
  emailGroupCode: '',
};

export interface Form extends FormDefault {
  emailGroupId: number;
  item: ItemForm;
}

export const form: Form = {
  emailGroupId: 0,
  type: 'add',
  loading: false,
  item,
};

// * -- Initial State --
export interface StateProp extends InitialStateDefault {
  list: ItemList[];
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
  totalElements: 0,
  selected: [],
  filter,
};
