import { InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { ResourceAccessItem } from '../resourceAccess';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';

export const sliceName = 'resource';

export interface FilterSearch {
  resourceGroupId: number | null;
  isActive?: string;
  nameLike?: string;
  pagination: Pagination;
}

export const filter: FilterSearch = {
  resourceGroupId: null,
  isActive: '',
  nameLike: '',
  pagination: {
    ...pagination,
    orders: [
      {
        direction: 'ASC',
        property: 'name',
      },
    ],
  },
};

// Form

export interface ItemForm {
  resourceGroupId?: number;
  descriptionGroup: string;
  name: string;
  code: string;
  description: string;
  isActive: string;
  resourceGroupOrder?: number | null;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export const itemForm: ItemForm = {
  descriptionGroup: '',
  name: '',
  code: '',
  description: '',
  isActive: 'Y',
  createdDate: '',
  createdBy: '',
  lastUpdatedDate: '',
  lastUpdatedBy: '',
};

// Item
export interface ResourceItem {
  resourceId: number;
  name: string;
  code: string;
  description: string;
  isActive: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export interface ItemCreate {
  resourceGroupId: number;
  name: string;
  code: string;
  description: string;
  isActive: string;
}

export interface ItemUpdate {
  resourceId: number;
  name: string;
  code: string;
  description: string;
  isActive: string;
}

export interface StateProp extends InitialStateDefault {
  list: ResourceItem[];
  filter: FilterSearch;
  modal: {
    isOpen: boolean;
    resourceAccessItem: ResourceAccessItem | null;
  };
  form: ItemForm;
  totalElements: number;
}

export const initialState: StateProp = {
  loading: false,
  loadData: false,
  list: [],
  filter,
  form: itemForm,
  totalElements: 0,
  modal: {
    isOpen: false,
    resourceAccessItem: null,
  },
};
