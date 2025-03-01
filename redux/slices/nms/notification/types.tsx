import { FormDefault, InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';
import { Dayjs } from 'wcf-component-lib/node_modules/dayjs';
import { ItemForm as ItemReceiverForm } from '@/redux/slices/nms/notificationReceiver';

export const sliceName = 'notification';

// * -- Item --
export interface ItemList {
  notificationId: number;
  categoryId: number;
  subCategoryId: number;
  subject: string;
  body: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
  receiverCnt: number;
  createdDay: string;
  createdMonth: string;
  createdYear: string;
}

// * -- Filter --
export interface FilterSearch {
  createdDate?: string | Dayjs | [Dayjs | null, Dayjs | null];
  createdDateGreaterEqual: string | null;
  createdDateLesserEqual: string | null;
  categoryId: number | null;
  subCategoryId: number | null;
  pagination: Pagination;
  categoryName: string;
  subCategoryName: string;
}

export const filter: FilterSearch = {
  createdDate: '',
  createdDateGreaterEqual: null,
  createdDateLesserEqual: null,
  categoryId: null,
  subCategoryId: null,
  pagination,
  categoryName: '',
  subCategoryName: '',
};
export interface ItemForm {
  notificationId: number;
  categoryId: number | null;
  categoryName: string;
  subCategoryId: number | null;
  subCategoryName: string;
  subject: string;
  body: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
  receiverCnt: number;
  receivers: ItemReceiverForm[];
}

export const item: ItemForm = {
  notificationId: 0,
  categoryId: null,
  categoryName: '',
  subCategoryId: null,
  subCategoryName: '',
  subject: '',
  body: '',
  createdDate: '',
  createdBy: '',
  lastUpdatedDate: '',
  lastUpdatedBy: '',
  receiverCnt: 0,
  receivers: [],
};

export interface Form extends FormDefault {
  item: ItemForm;
  notificationId: string;
  categoryId: string;
  subCategoryId: string;
  categoryName: string;
  subCategoryName: string;
}

export const form: Form = {
  type: 'add',
  loading: false,
  item,
  notificationId: '',
  categoryId: '',
  subCategoryId: '',
  categoryName: '',
  subCategoryName: '',
};

// * -- Initial State --
export interface StateProp extends InitialStateDefault {
  list: ItemList[];
  totalElements: number;
  form: Form;
  selected: number[];
  filter: FilterSearch;
  currentPage: number;
}

export const initialState: StateProp = {
  loading: false,
  loadData: false,
  form,
  list: [],
  totalElements: 0,
  selected: [],
  filter,
  currentPage: 0,
};
