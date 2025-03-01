import { FormDefault, InitialStateDefault } from 'wcf-component-lib/src/constants/interface';

export const sliceName = 'userGroupMember';

// * -- Item --
export interface UserGroupMemberItem {
  firstName: string;
  lastName: string;
  login: string;
  email: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
  userGroupMemberId: number;
}
// * -- Filter --
export interface FilterSearch {
  userGroupId: number;
}

export const filter: FilterSearch = {
  userGroupId: 0,
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

export interface ItemCreate {
  firstName: string;
  lastName: string;
  login: string;
  email: string;
}

export interface Form extends FormDefault {
  userGroupId: number;
  item: ItemForm;
}

export const form: Form = {
  userGroupId: 0,
  type: 'add',
  loading: false,
  item,
};

// * -- Initial State --
export interface StateProp extends InitialStateDefault {
  list: UserGroupMemberItem[];
  form: Form;
  selected: number[];
}

export const initialState: StateProp = {
  loading: false,
  loadData: false,
  form,
  list: [],
  selected: [],
};
