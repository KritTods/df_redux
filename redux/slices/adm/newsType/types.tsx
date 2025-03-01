import { FormDefault, InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';

export const sliceName = 'newTypes';

// * -- FilterSearch --
export interface FilterSearch {
  operation?: string;
  newsTypeCode?: string;
  descriptionLike?: string;
  isActive?: string;
  pagination: Pagination;
}

export const filter: FilterSearch = {
  operation: '',
  newsTypeCode: '',
  descriptionLike: '',
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
export interface NewsTypeItem {
  newsTypeId: number;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
  description: string;
  isActive: string;
  newsTypeCode: string;
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
  description: string;
  isActive: string;
  newsTypeCode: string;
}

export interface ItemUpdate {
  newsTypeId: number;
  newsTypeCode: string;
  description: string;
  isActive: string;
}

// * -- Form --

export interface ItemForm {
  newsTypeId?: number;
  description: string;
  isActive: string;
  newsTypeCode: string;
  lastUpdatedDate?: string;
  lastUpdatedBy?: string;
}

export const itemForm: ItemForm = {
  description: '',
  isActive: 'Y',
  newsTypeCode: '',
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
  list: NewsTypeItem[];
  form: Form;
  totalElements: number;
  filter: FilterSearch;
  loadData: boolean;
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
