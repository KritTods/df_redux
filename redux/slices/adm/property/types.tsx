import { FormDefault, InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';

export const sliceName = 'property';

// * -- FilterSearch --
export interface FilterSearch {
  operation?: string;
  propertyNameLike?: string;
  propertyDescription?: string;
  pagination: Pagination;
}

export const filter: FilterSearch = {
  operation: '',
  propertyNameLike: '',
  propertyDescription: '',
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
export interface PropertyItem {
  propertyId: number;
  propertyName: string;
  propertyDescription: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export interface PropertyValueItem {
  propertyValueId: number;
  property: PropertyItem;
  propertyValue: string;
  propertyValueOrder: number;
  propertyKey: string;
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
  propertyName: string;
  propertyDescription: string;
}

export interface ItemUpdate {
  propertyId: number;
  propertyName: string;
  propertyDescription: string;
}

export interface PropertyValueCreate {
  propertyId: number;
  property: {
    propertyName: string;
    propertyDescription: string;
  };
  propertyValue: string;
  propertyValueOrder?: number | null;
  propertyKey?: string;
}

export interface PropertyValueUpdate {
  propertyValueId: number;
  propertyValue: string;
  propertyValueOrder?: number | null;
  propertyKey?: string;
}

// * -- Form --

export interface ItemForm {
  propertyName: string;
  propertyDescription: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export interface PropertyValueForm {
  propertyValueId?: number;
  propertyName: string;
  propertyDescription: string;
  propertyValue: string;
  propertyValueOrder: number | null;
  propertyKey: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export interface ModalPropertyValue {
  type: 'add' | 'edit';
  isOpen: boolean;
  form: PropertyValueForm;
}

export const modalForm: PropertyValueForm = {
  propertyName: '',
  propertyDescription: '',
  propertyValue: '',
  propertyValueOrder: null,
  propertyKey: '',
  createdDate: '',
  createdBy: '',
  lastUpdatedDate: '',
  lastUpdatedBy: '',
};

export const itemForm: ItemForm = {
  propertyName: '',
  propertyDescription: '',
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
  list: PropertyItem[];
  listPropertyValue: PropertyValueItem[];
  form: Form;
  modal: ModalPropertyValue;
  totalElements: number;
  filter: FilterSearch;
  loadDataPropertyValue: boolean;
  // history: History;
}

export const initialState: StateProp = {
  loading: false,
  loadData: false,
  loadDataPropertyValue: false,
  form,
  modal: {
    type: 'add',
    isOpen: false,
    form: modalForm,
  },
  list: [],
  listPropertyValue: [],
  totalElements: 0,
  filter,
  // history,
};
