import { FormDefault, InitialStateDefault } from 'wcf-component-lib/src/constants/interface';

export const sliceName = 'notificationReceiver';

// * -- Item --
export interface ItemList {
  notificationReceiverId?: number;
  login: string;
  status?: string;
  readDate?: null;
  createdDate?: string;
  createdBy?: string;
  lastUpdatedDate?: string;
  lastUpdatedBy?: string;
  note: string;
  type: string;
}
// * -- Filter --
export interface FilterSearch {
  notificationId: string;
}

export const filter: FilterSearch = {
  notificationId: '',
};

// * -- Form --
export interface ItemForm {
  login: string;
  note: string;
  type: string;
}

export const item: ItemForm = {
  login: '',
  note: '',
  type: '',
};

export interface FormReceiver extends FormDefault {
  item: ItemForm;
  notificationId?: number | undefined;
  notificationReceiverId?: number;
  login?: string;
  displayName?: string;
  ssoBranchCode?: string;
  ssoBranchName?: string;
  ssoPersonPosition?: string;
  userGroupId?: string;
  userGroupName?: string;
  typeReceiver: string;
}

export const form: FormReceiver = {
  type: 'add',
  loading: false,
  item,
  notificationId: undefined,
  notificationReceiverId: 0,
  login: '',
  displayName: '',
  ssoBranchCode: '',
  ssoBranchName: '',
  ssoPersonPosition: '',
  userGroupId: '',
  userGroupName: '',
  typeReceiver: '',
};

//Modal
export interface ModalReceiver {
  isOpen: boolean;
  type: string;
}
export const modal: ModalReceiver = {
  isOpen: false,
  type: '',
};

// * -- Initial State --
export interface StateProp extends InitialStateDefault {
  list: ItemList[];
  totalElements: number;
  form: FormReceiver;
  selected: number[];
  filter: FilterSearch;
  currentPage: number;
  modal: ModalReceiver;
}

export const initialState: StateProp = {
  loading: false,
  loadData: true,
  form,
  list: [],
  totalElements: 0,
  selected: [],
  filter,
  currentPage: 0,
  modal,
};
