import { FormDefault, InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';

export const sliceName = 'ssoBranchs';

// * -- History SsoBranchLog --

export interface FilterHistorySsoBranchLog {
  ssoBranchId: number;
  pagination: Pagination;
  operation?: string;
  fieldName?: string;
}

export const filterHistory: FilterHistorySsoBranchLog = {
  ssoBranchId: 0,
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

export interface SsoBranchLogHistoryItem {
  ssoBranchLogId: number;
  fieldName: string;
  before: string;
  after: string;
  createdDate: string;
  createdBy: string;
}

export interface HistorySsoBranchLog {
  loading: boolean;
  loadData: boolean;
  listHistory: SsoBranchLogHistoryItem[];
  filterHistory: FilterHistorySsoBranchLog;
  currentPage: number;
  totalElements: number;
}

export const historySsoBranchLog: HistorySsoBranchLog = {
  loading: false,
  loadData: true,
  listHistory: [],
  filterHistory,
  currentPage: 0,
  totalElements: 0,
};

// * -- Item --
export interface ItemList {
  ssoBranchId: number;
  ssoBranchCode: string;
  ssoBranchName: string;
  ssoBranchNameShortTh: string | null;
  ssoBranchNameShortEn: string | null;
  ssoBranchAddress: string | null;
  financeDocId: string | null;
  taxId: string | null;
  isProvince: string;
  isDistrict: string;
  isCentral: string;
  isRehab: string;
  isActive: string;
  provinceCode: string;
  districtCode: string | null;
  subDistrictCode: string | null;
  postOfficeCode: string | null;
  effectiveDateStart: string | null;
  effectiveDateEnd: string | null;
  startDate: string;
  endDate: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

// * -- Filter --
export interface FilterSearch {
  search?: string;
  pagination: Pagination;
  isProvince?: string;
  provinceCode?: string;
  ssoBranchTypeId ?: string;
}

export const filter: FilterSearch = {
  search: '',
  isProvince: '',
  provinceCode: '',
  pagination,
  ssoBranchTypeId: '',
};

// * -- Form --
export interface ItemForm {
  ssoBranchsId?: number;
  name: string;
  description: string;
  isActive: string;
  isUmRole: string;
}

export const item: ItemForm = {
  ssoBranchsId: 0,
  name: '',
  description: '',
  isActive: 'Y',
  isUmRole: 'Y',
};

export interface Form extends FormDefault {
  ssoBranchId: number;
  item: ItemForm;
  ssoBranchCode: string;
  ssoBranchName: string;
}

export const form: Form = {
  ssoBranchId: 0,
  type: 'add',
  loading: false,
  item,
  ssoBranchCode: '',
  ssoBranchName: '',
};

// * -- Initial State --
export interface StateProp extends InitialStateDefault {
  list: ItemList[];
  totalElements: number;
  form: Form;
  filter: FilterSearch;
  historySsoBranchLog: HistorySsoBranchLog;
  filterHistory: FilterHistorySsoBranchLog;
}

export const initialState: StateProp = {
  list: [],
  totalElements: 0,
  loading: false,
  loadData: true,
  form,
  filter,
  historySsoBranchLog,
  filterHistory,
};
