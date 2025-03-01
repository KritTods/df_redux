import { InitialStateDefault, SelectData } from 'wcf-component-lib/src/constants/interface';

export const sliceName = 'region';

export type RegionItem = Record<string, string>;

export interface FilterSearch {
  name: string;
  mode?: string;
  key?: string;
}

export interface StateProp extends InitialStateDefault {
  loadDataPropertyValue: boolean;
  list: SelectData[];
}

export const initialState: StateProp = {
  loading: false,
  loadData: false,
  loadDataPropertyValue: false,
  list: [],
};
