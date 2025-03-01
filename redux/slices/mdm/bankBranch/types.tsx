import { FormDefault, InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';

export const sliceName = 'bankBranch';

// * -- FilterSearch --
export interface FilterSearch {
  bankId: number | null;
  bankCode?: string;
  bankName?: string;
  operation?: string;
  bankBranchCode?: string;
  bankBranchNameLike?: string;
  isActive?: string;
  pagination: Pagination;
}

export const filter: FilterSearch = {
  bankId: null,
  operation: '',
  bankBranchCode: '',
  bankBranchNameLike: '',
  isActive: 'Y',
  pagination,
};

// * -- History --

export interface FilterHistory {
  pagination: Pagination;
  operation?: string;
  fieldName?: string;
  bankBranchId: number;
}

export const filterHistory: FilterHistory = {
  bankBranchId: 0,
  pagination,
};

export interface History {
  loadData: boolean;
  listHistory: BankBranchHistoryItem[];
  filterHistory: FilterHistory;
  totalElements: number;
}

export const history: History = {
  loadData: false,
  listHistory: [],
  filterHistory,
  totalElements: 0,
};

// * -- Item --
export interface BankBranchItem {
  bankBranchId: number;
  bankBranchName: string;
  bankBranchCode: string;
  isActive: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export interface BankBranchHistoryItem {
  bankLogId: number;
  fieldName: string;
  before: string;
  after: string;
  createdDate: string;
  createdBy: string;
}

export interface ItemCreate {
  bankId: number;
  bankBranchName: string;
  bankBranchCode: string;
  isActive: string;
}

export interface ItemUpdate {
  bankBranchId: number;
  bankBranchName: string;
  isActive: string;
}

// * -- Form --

export interface ItemForm {
  bankId?: number;
  bankCode?: string;
  bankName?: string;
  bankBranchName: string;
  bankBranchCode: string;
  isActive: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export const itemForm: ItemForm = {
  bankBranchName: '',
  bankBranchCode: '',
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
  list: BankBranchItem[];
  form: Form;
  totalElements: number;
  filter: FilterSearch;
  history: History;
}

export const initialState: StateProp = {
  loading: false,
  loadData: false,
  form,
  list: [],
  totalElements: 0,
  filter,
  history,
};
