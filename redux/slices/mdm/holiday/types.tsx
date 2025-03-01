import { FormDefault, InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';
import { Dayjs } from 'wcf-component-lib/node_modules/dayjs';

export const sliceName = 'holiday';

// * -- FilterSearch --
export interface FilterSearch {
  pagination: Pagination;
  holidayNameLike: string;
  holidayYear: string | Dayjs;
  isActive?: string;
}

export const filter: FilterSearch = {
  pagination,
  holidayNameLike: '',
  holidayYear: '',
  isActive: '',
};

// * -- History HolidayLog --

export interface FilterHistoryHolidayLog {
  pagination: Pagination;
  operation?: string;
  fieldName?: string;
  holidayId: number;
}

export const filterHistory: FilterHistoryHolidayLog = {
  holidayId: 0,
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
export interface HolidayLogHistoryItem {
  holidayLogId: number;
  fieldName: string;
  before: string;
  after: string;
  createdDate: string;
  createdBy: string;
}

export interface HistoryHolidayLog {
  loading: boolean;
  loadData: boolean;
  listHistory: HolidayLogHistoryItem[];
  filterHistory: FilterHistoryHolidayLog;
  totalElements: number;
}

export const historyHolidayLog: HistoryHolidayLog = {
  loading: false,
  loadData: true,
  listHistory: [],
  filterHistory,
  totalElements: 0,
};

// * -- Item --
export interface ItemList {
  holidayId: number;
  holidayDay: string;
  holidayMonth: string;
  holidayYear: string;
  holidayName: string;
  holidayDescription: string;
  isActive: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
  holidayDate?: string | Dayjs | [Dayjs | null, Dayjs | null];
}

// * -- Form --

export interface ItemCreate {
  holidayStartDate: string | Dayjs;
  holidayEndDate: string | Dayjs;
  holidayName: string;
  holidayDescription: string;
  isActive: string;
}
export interface ItemUpdate {
  holidayName: string;
  isActive: string;
}
export interface ItemForm {
  holidayId: number;
  holidayDate?: string | Dayjs | [Dayjs | null, Dayjs | null];
  holidayDateStart: string;
  holidayDateEnd: string;
  holidayDay: string;
  holidayMonth: string;
  holidayYear: string;
  holidayName: string;
  holidayDescription: string;
  isActive: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export const itemForm: ItemForm = {
  holidayId: 0,
  holidayDate: '',
  holidayDateStart: '',
  holidayDateEnd: '',
  holidayDay: '',
  holidayMonth: '',
  holidayYear: '',
  holidayName: '',
  holidayDescription: '',
  isActive: 'Y',
  createdDate: '',
  createdBy: '',
  lastUpdatedDate: '',
  lastUpdatedBy: '',
};

export interface Form extends FormDefault {
  item: ItemForm;
  holidayId: number;
}

export const form: Form = {
  type: 'add',
  loading: false,
  holidayId: 0,
  item: itemForm,
};

// * -- Initial State --

export interface StateProp extends InitialStateDefault {
  list: ItemList[];
  form: Form;
  totalElements: number;
  filter: FilterSearch;
  historyHolidayLog: HistoryHolidayLog;
}

export const initialState: StateProp = {
  loading: false,
  loadData: false,
  form,
  list: [],
  totalElements: 0,
  filter,
  historyHolidayLog,
};
