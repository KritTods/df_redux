import { InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';
import { ResourceAccessItemByPageId } from '../pageLevel';
export const sliceName = 'pages';

// Filter
export interface FilterSearch {
  moduleId: number | null;
  moduleName?: string;
  moduleDescription?: string;
  code?: string;
  name?: string;
  isActive?: string | undefined;
  isMenu?: string;
  pagination: Pagination;
}

export const filter: FilterSearch = {
  moduleId: null,
  moduleName: '',
  moduleDescription: '',
  code: '',
  name: '',
  isActive: '',
  isMenu: '',
  pagination,
};

// * -- Item --

export interface ItemCreate {
  moduleId: number;
  code: string;
  name: string;
  description: string;
  isActive: string;
  isMenu: string;
  path: string;
  pageOrder?: number;
}

export interface ItemUpdate {
  pageId: number;
  code: string;
  name: string;
  description: string;
  isActive: string;
  isMenu: string;
  path: string;
  pageOrder: number;
}

export interface ItemForm {
  moduleId?: number;
  moduleDescription?: string;
  pageId?: number;
  code: string;
  name: string;
  description: string;
  isActive: string;
  isMenu: string;
  path: string;
  pageOrder?: number;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export const itemForm: ItemForm = {
  code: '',
  name: '',
  description: '',
  isActive: 'Y',
  isMenu: '',
  path: '',
  createdDate: '',
  createdBy: '',
  lastUpdatedDate: '',
  lastUpdatedBy: '',
};

export interface PageItem {
  pageId: number;
  code: string;
  name: string;
  description: string;
  isActive: string;
  isMenu: string;
  path: string;
  pageOrder: number;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export interface ItemList {
  pageLevel: number;
  pageLevelId: number;
  resourceAccesses: ResourceAccessItemByPageId[];
}

// * -- Initial State --

export interface StateProp extends InitialStateDefault {
  pageId: number | null;
  list: PageItem[] | [];
  modal: {
    isOpen: boolean;
    resourceAccessId: number[];
  };
  filter: FilterSearch;
  form: ItemForm;
  totalElements: number;
}

export const initialState: StateProp = {
  pageId: null,
  loading: false,
  loadData: false,
  list: [],
  form: itemForm,
  totalElements: 0,
  filter,
  modal: {
    isOpen: false,
    resourceAccessId: [],
  },
};
