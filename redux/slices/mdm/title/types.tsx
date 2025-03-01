import { FormDefault, InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';
export const sliceName = 'title';

// * -- FilterSearch --
export interface FilterSearch {
  operation?: string;
  titleId?: string;
  titleNameLike?: string;
  titleCode?: number | null;
  titleNameShortLike?: string;
  genderChar?: string;
  isActive?: string;
  pagination: Pagination;
}

export const filter: FilterSearch = {
  operation: '',
  titleId: '',
  titleNameLike: '',
  titleCode: null,
  titleNameShortLike: '',
  genderChar: '',
  isActive: '',
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
export interface TitleItem {
  titleId: number;
  titleCode: number;
  titleName: string | null;
  titleNameShort: string | null;
  createdDate: string;
  createdBy: string;
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
  titleCode: number;
  titleName: string;
  titleNameShort: string;
  genderChar: string;
  isActive: string;
}

export interface ItemUpdate {
  titleId: number;
  titleName: string;
  titleNameShort: string;
  genderChar: string;
  isActive: string;
}

// * -- Form --

export interface ItemForm {
  titleCode: number | null;
  titleName: string;
  titleNameShort: string;
  genderChar: string;
  isActive: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export const itemForm: ItemForm = {
  titleCode: null,
  titleName: '',
  titleNameShort: '',
  genderChar: '',
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
  list: TitleItem[];
  form: Form;
  totalElements: number;
  filter: FilterSearch;
}

export const initialState: StateProp = {
  loading: false,
  loadData: false,
  form,
  list: [],
  totalElements: 0,
  filter,
  // history,
};
