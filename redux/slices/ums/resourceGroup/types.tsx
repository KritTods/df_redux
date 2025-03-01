import { InitialStateDefault } from 'wcf-component-lib/src/constants/interface';

export const sliceName = 'resourceGroup';

export interface ResourceGroupItem {
  resourceGroupId: number;
  name: string;
  description: string;
  isActive: string;
  resourceGroupOrder: null;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export interface ItemCreate {
  name: string;
  description: string;
  isActive: string;
  resourceGroupOrder?: number | null;
}

export interface ItemUpdate {
  resourceGroupId: number;
  name: string;
  description: string;
  isActive: string;
  resourceGroupOrder: number | null;
}

// * -- Form --

export interface ItemForm {
  resourceGroupId?: number;
  name: string;
  description: string;
  isActive: string;
  resourceGroupOrder?: null;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export const itemForm: ItemForm = {
  name: '',
  description: '',
  isActive: 'Y',
  resourceGroupOrder: null,
  createdDate: '',
  createdBy: '',
  lastUpdatedDate: '',
  lastUpdatedBy: '',
};

export interface StateProp extends InitialStateDefault {
  loading: boolean;
  list: ResourceGroupItem[];
  item: ItemForm;
}

export const initialState: StateProp = {
  loading: false,
  loadData: false,
  item: itemForm,
  list: [],
};
