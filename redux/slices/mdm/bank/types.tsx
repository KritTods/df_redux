import { FormDefault, InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';

export const sliceName = 'bank';

// * -- FilterSearch --
export interface FilterSearch {
  operation?: string;
  bankCode?: string;
  bankCodeLike?: string;
  bankNameLike?: string;
  isActive?: string | null;
  pagination: Pagination;
}

export const filter: FilterSearch = {
  operation: '',
  bankCode: '',
  bankCodeLike: '',
  bankNameLike: '',
  isActive: null,
  pagination,
};

// * -- History --

export interface FilterHistory {
  pagination: Pagination;
  fieldName?: string;
  bankId: number;
}

export const filterHistory: FilterHistory = {
  bankId: 0,
  pagination,
};

export interface History {
  loadData: boolean;
  listHistory: BankHistoryItem[];
  filterHistory: FilterHistory;
  currentPage: number;
  totalElements: number;
}

export const history: History = {
  loadData: false,
  listHistory: [],
  filterHistory,
  currentPage: 0,
  totalElements: 0,
};

// * -- Item --
export interface BankItem {
  bankId: number;
  bankCode: string;
  bankNameShort: string;
  bankName: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export interface BankHistoryItem {
  bankLogId: number;
  fieldName: string;
  before: string;
  after: string;
  createdDate: string;
  createdBy: string;
}

export interface ItemCreate {
  bankCode: string;
  bankNameShort: string;
  bankName: string;
  bankNameReceipt: string;
  isActive: string;
}

export interface ItemUpdate {
  bankId: number;
  bankNameShort: string;
  bankName: string;
  bankNameReceipt: string;
  isActive: string;
}

// * -- Form --

export interface ItemForm {
  bankCode: string;
  bankNameShort: string;
  bankName: string;
  bankNameReceipt: string;
  isActive: string;
}

export const itemForm: ItemForm = {
  bankCode: '',
  bankNameShort: '',
  bankName: '',
  bankNameReceipt: '',
  isActive: 'Y',
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
  list: BankItem[];
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
