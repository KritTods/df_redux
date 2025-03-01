import { FormDefault, InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';

export const sliceName = 'news';

// * -- FilterSearch --
export interface FilterSearch {
  operation?: string;
  newsTypeId: number | null;
  bodyLike?: string;
  bodyStartWith?: string;
  subjectLike?: string;
  isActive?: string;
  pagination: Pagination;
}

export const filter: FilterSearch = {
  operation: '',
  newsTypeId: null,
  subjectLike: '',
  isActive: 'Y',
  pagination,
};

// * -- History --

// export interface FilterHistory {
//   pagination: Pagination;
//   fieldName?: string;
//   bankId: number;
// }

// export const filterHistory: FilterHistory = {
//   bankId: 0,
//   pagination,
// };

// export interface History {
//   loadData: boolean;
//   listHistory: BankHistoryItem[];
//   filterHistory: FilterHistory;
//   currentPage: number;
//   totalElements: number;
// }

// export const history: History = {
//   loadData: false,
//   listHistory: [],
//   filterHistory,
//   currentPage: 0,
//   totalElements: 0,
// };

// * -- Item --
export interface NewsItem {
  newsId: number;
  body: string;
  isActive: string;
  createdDate: string;
  createdBy: string;
  subject: string;
  newsOrder: number;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

// export interface BankHistoryItem {
//   bankLogId: number;
//   fieldName: string;
//   before: string;
//   after: string;
//   createdDate: string;
//   createdBy: string;
// }

export interface ItemCreate {
  newsTypeId: number;
  body: string;
  isActive: string;
  subject: string;
  newsOrder: number;
}

export interface ItemUpdate {
  newsId: number;
  body: string;
  isActive: string;
  newsOrder: number;
  subject: string;
}

// * -- Form --

export interface ItemForm {
  newsTypeId?: number;
  newsTypeDescription?: string;
  body: string;
  isActive: string;
  subject: string;
  newsOrder?: number;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export const itemForm: ItemForm = {
  body: '',
  isActive: 'Y',
  subject: '',
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
  list: NewsItem[];
  form: Form;
  totalElements: number;
  filter: FilterSearch;
  loadData: boolean;
  newsTypeCode?: string;
  newsTypeDescription?: string;
  // history: History;
}

export const initialState: StateProp = {
  loading: false,
  loadData: false,
  list: [],
  form,
  totalElements: 0,
  filter,
  // history,
};
