import { FormDefault, InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';

export const sliceName = 'user';

// * -- FilterSearch --
export interface FilterSearch {
  pagination: Pagination;
  login?: string;
  ssoBranchCode?: string;
  type: string;
  createdDateGreaterEqual?: string;
  createdDateLesserEqual?: string;
  lastLoginDateGreaterEqual?: string;
  lastLoginDateLesserEqual?: string;
  active: string;
  firstName?: string;
  email?: string;
  userGroupId?: number;
}

export const filter: FilterSearch = {
  pagination,
  type: '',
  active: '',
};

// * -- History UserLog --

export interface FilterHistoryUserLog {
  pagination: Pagination;
  operation?: string;
  fieldName?: string;
  userId: number;
}

export const filterHistory: FilterHistoryUserLog = {
  userId: 0,
  pagination: {
    pageNumber: 0,
    pageSize: 10,
    orders: [
      {
        direction: 'DESC',
        property: 'createdDate',
      },
    ],
  },
};

export interface UserLogHistoryItem {
  userLogId: number;
  fieldName: string;
  before: string;
  after: string;
  createdDate: string;
  createdBy: string;
}

export interface HistoryUserLog {
  loading: boolean;
  loadData: boolean;
  listHistory: UserLogHistoryItem[];
  filterHistory: FilterHistoryUserLog;
  currentPage: number;
  totalElements: number;
}

export const historyUserLog: HistoryUserLog = {
  loading: false,
  loadData: true,
  listHistory: [],
  filterHistory,
  currentPage: 0,
  totalElements: 0,
};

// * -- Item --
export interface ItemList {
  userId: number;
  login: string;
  firstName: string;
  lastName: string;
  email: string;
  ssoBranchCode: string;
  createdDate: string;
  createdBy: string;
  lastLoginDate: string;
  type: string;
  active: string;
  title: string;
}

// * -- Form --
export interface ItemById {
  userId: number;
  login: string;
  firstName: string;
  lastName: string;
  email: string;
  ssoBranchCode: string;
  createdDate: string;
  createdBy: string;
  lastLoginDate: string;
  type: string;
  active: string;
  title: string;
}

export interface DataUpdateUser {
  firstName: string;
  lastName: string;
  type: string;
  email: string;
}

export interface ItemForm {
  userId: number;
  login: string;
  firstName: string;
  lastName: string;
  email: string;
  active: string;
  type: string;
  createdDate: string;
  lastLoginDate: string;
}

export const item: ItemForm = {
  userId: 0,
  login: '',
  firstName: '',
  lastName: '',
  email: '',
  active: '',
  type: '',
  createdDate: '',
  lastLoginDate: '',
};

export interface Form extends FormDefault {
  userId: number;
  item: ItemForm;
}

export const form: Form = {
  userId: 0,
  type: 'add',
  loading: false,
  item,
};

// * -- User Active Contact Info --
// filter
export interface FilterContactInfo {
  userGroupId: number;
  ssoBranchCode: string;
}

export const filterContactInfo: FilterContactInfo = {
  userGroupId: 0,
  ssoBranchCode: '',
};
//item
export interface ItemContactInfo {
  userId: number;
  login: string;
  firstName: string;
  lastName: string;
  email: string;
}
export interface ContactInfo {
  loading: boolean;
  loadData: boolean;
  list: ItemContactInfo[];
  filter: FilterContactInfo;
  currentPage: number;
  totalElements: number;
}
export const contactInfo: ContactInfo = {
  loading: false,
  loadData: true,
  list: [],
  filter: filterContactInfo,
  currentPage: 0,
  totalElements: 0,
};


// * -- Initial State --

export interface StateProp extends InitialStateDefault {
  list: ItemList[];
  form: Form;
  totalElements: number;
  filter: FilterSearch;
  historyUserLog: HistoryUserLog;
  contactInfo: ContactInfo;
}

export const initialState: StateProp = {
  loading: false,
  loadData: true,
  form,
  list: [],
  totalElements: 0,
  filter,
  historyUserLog,
  contactInfo,
};
