import { FormDefault, InitialStateDefault } from 'wcf-component-lib/src/constants/interface';
import { modelPaginationOptions, PaginationOptions } from 'wcf-component-lib/src/components/BasePagination/model';

export const sliceName = 'userGroup';

// * -- Item --
export interface UserGroupItem {
  userGroupId: number;
  userGroupName: string;
  description: string;
  userGroupOrder: number;
  isActive: string;
  memberCnt: number;
  userGroupCode: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

// * -- Filter --
export interface FilterSearch {
  userGroupNameLike?: string;
  isActive?: string;
  pagination: PaginationOptions;
}

export const filter: FilterSearch = {
  userGroupNameLike: '',
  isActive: 'Y',
  pagination: modelPaginationOptions,
};

// * -- Form --
export interface ItemForm {
  userGroupId?: number;
  userGroupName: string;
  description: string;
  userGroupOrder?: number;
  isActive: string;
  userGroupCode: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export const item: ItemForm = {
  userGroupName: '',
  description: '',
  isActive: 'Y',
  userGroupCode: '',
  createdDate: '',
  createdBy: '',
  lastUpdatedDate: '',
  lastUpdatedBy: '',
};

export interface ItemCreateAndUpdate {
  userGroupName: string;
  description: string;
  userGroupOrder?: number;
  isActive: string;
  userGroupCode: string;
}

export interface Form extends FormDefault {
  userGroupId: number;
  userGroupName: string;
  item: ItemForm;
}

export const form: Form = {
  userGroupId: 0,
  userGroupName: '',
  type: 'add',
  loading: false,
  item,
};

export interface modalForm {
  type: string;
  isOpen: boolean;
  userLogin: string;
}

// * -- Initial State --
export interface StateProp extends InitialStateDefault {
  list: UserGroupItem[];
  form: Form;
  modal: modalForm;
  filter: FilterSearch;
  selected: number[];
}

export const initialState: StateProp = {
  loading: false,
  loadData: true,
  form,
  list: [],
  modal: {
    type: 'add',
    isOpen: false,
    userLogin: '',
  },
  filter,
  selected: [],
};
