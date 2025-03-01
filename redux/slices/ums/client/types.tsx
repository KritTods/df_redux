import { InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';

export const sliceName = 'client';

//FilterSearch

export interface FilterSearch {
  nameLike?: string;
  ssoType?: string;
  isActive?: string;
  pagination: Pagination;
}

export const filter: FilterSearch = {
  nameLike: '',
  ssoType: '',
  isActive: '',
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

//ClientPrivileges

export interface ClientPrivileges {
  resourceGroups: {
    name: string;
    resourceAccesses: ResourceAccessWithClientPrivilege[];
  };
}

export interface ResourceAccessWithClientPrivilege {
  resourceAccessId: number;
  resource: string;
  access: string;
  scope: string;
  description: string;
  clientPrivilegeId: number;
}

export interface ItemCreateClientPrivileges {
  clientId: number;
  resourceAccessId: number[];
}

export interface ClientPrivilegesItem {
  clientPrivilegeId: number;
  createdDate: string;
  createdBy: string;
}

//Client

export interface ClientItem {
  clientId: number;
  name: string;
  description?: string;
  ssoType: string;
  isActive: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

//Item

export interface ItemForm {
  clientId?: number;
  name: string;
  description: string;
  ssoType: string;
  isActive: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export interface ItemCreate {
  name: string;
  description?: string;
  ssoType: string;
  isActive: string;
}

export interface ItemUpdate {
  clientId: number;
  name: string;
  description: string;
  ssoType: string;
  isActive: string;
  clientSecret: string;
}

//Modal
export interface ModalResourceAccess {
  isOpen: boolean;
  resourceAccessId: number[];
}

//Constant

export const modal: ModalResourceAccess = {
  isOpen: false,
  resourceAccessId: [],
};

export const itemForm: ItemForm = {
  name: '',
  description: '',
  ssoType: '',
  isActive: '',
  createdDate: '',
  createdBy: '',
  lastUpdatedDate: '',
  lastUpdatedBy: '',
};

export interface StateProp extends InitialStateDefault {
  list: ClientItem[];
  filter: FilterSearch;
  clientPrivileges: ClientPrivileges[];
  modal: ModalResourceAccess;
  totalElements: number;
  currentPage: number;
  loadDataPrivileges: boolean;
  form: ItemForm;
}

export const initialState: StateProp = {
  loading: false,
  loadData: false,
  loadDataPrivileges: false,
  list: [],
  form: itemForm,
  filter,
  clientPrivileges: [],
  modal,
  totalElements: 0,
  currentPage: 0,
};
