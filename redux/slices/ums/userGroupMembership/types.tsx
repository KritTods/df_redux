import { InitialStateDefault } from 'wcf-component-lib/src/constants/interface';

export const sliceName = 'userGroupMembership';

export interface ItemList {
  userGroupId: number;
  name: string;
  description: string;
  isActive: string;
  isUmRole: string;
}

export interface InitialState extends InitialStateDefault {
  list: ItemList[] | [];
}

// ? -------- initialValue --------

export const initialState: InitialState = {
  loading: false,
  loadData: true,
  list: [],
};
