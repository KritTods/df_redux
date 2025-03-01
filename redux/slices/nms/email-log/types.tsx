import { FormDefault, InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';
import { Dayjs } from 'wcf-component-lib/node_modules/dayjs';

export const sliceName = 'emailLog';

// * -- Item --
export interface ItemList {
  emailLogId: number
  sender: string
  subject: string
  receiver: string[]
  cc: string[]
  bcc: string[]
  body: string
  fileNames: string[]
  receiverCnt:number
  createdDate: string
  createdBy: string
  createdDay: string;
  createdMonth: string;
  createdYear: string;
}


// * -- Filter --
export interface FilterSearch {
  createdDate?: string | Dayjs | [Dayjs | null, Dayjs | null];
  createdDateGreaterEqual: string | null;
  createdDateLesserEqual: string | null;
  createdBy: string | null;
  sender: string | null;
  subjectLike: string | null;
  pagination: Pagination;
}

export const filter: FilterSearch = {
  createdDate: '',
  createdDateGreaterEqual: null,
  createdDateLesserEqual: null,
  createdBy: null,
  sender: null,
  subjectLike: null,
  pagination,
};

// * -- Form --
export interface ItemForm {
  emailId: number
  sender: string
  subject: string
  receiver: string[]
  cc: string[]
  bcc: string[]
  body: string
  fileNames: string[]
  createdDate: string
  createdBy: string
}

export const item: ItemForm = {
  emailId: 0,
  sender: '',
  subject: '',
  receiver: [],
  cc: [],
  bcc: [],
  body: '',
  fileNames: [],
  createdDate: '',
  createdBy: ''
};

export interface Form extends FormDefault {
  emailId: number;
  item: ItemForm;
}

export const form: Form = {
  emailId: 0,
  type: 'add',
  loading: false,
  item,
};

// * -- Initial State --
export interface StateProp extends InitialStateDefault {
  list: ItemList[];
  totalElements: number;
  form: Form;
  selected: number[];
  filter: FilterSearch;
}

export const initialState: StateProp = {
  loading: false,
  loadData: true,
  form,
  list: [],
  totalElements: 0,
  selected: [],
  filter,
};
