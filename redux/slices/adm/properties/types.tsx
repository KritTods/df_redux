import { InitialStateDefault } from 'wcf-component-lib/src/constants/interface';

export const sliceName = 'properties';

// * -- Initial State --
export interface Item {
  value: string;
  key: string;
}

export interface StateProp extends InitialStateDefault {
  properties: Record<string, Item[] | []>;
}

export const initialState: StateProp = {
  loading: false,
  loadData: false,
  properties: {},
};
