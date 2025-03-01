import { InitialStateDefault } from 'wcf-component-lib/src/constants/interface';

export const sliceName = 'resourceAccess';

// Item
export interface ItemCreate {
  resourceId: number;
  name: string;
  description: string;
  isActive: string;
}

export interface ItemUpdate {
  resourceAccessId: number;
  name: string;
  description: string;
  isActive: string;
}

export interface ResourceAccessItem {
  resourceAccessId: number;
  name: string;
  description: string;
  isActive: string;
}

//constant

export interface StateProp extends InitialStateDefault {
  loading: boolean;
  list: ResourceAccessItem[];
}

export const initialState: StateProp = {
  loading: false,
  loadData: true,
  list: [],
};
