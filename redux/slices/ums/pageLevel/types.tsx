import { InitialStateDefault } from 'wcf-component-lib/src/constants/interface';

export const sliceName = 'pageLevels';
// * -- ListPageLevelsByPageId --

export interface ListPageLevelsByPageId {
  pageLevel: number;
  pageLevelId: number;
  resourceAccesses: ResourceAccess[];
}

export interface ResourceAccess {
  resourceGroupName: string;
  resourceName: string;
  resourceAccessId: number;
  access: string;
  description: string;
  pageResourceAccessId: number;
}

// * -- Item --
export interface ItemList {
  pageId: number;
  pageLabel: string;
  pageLevel: number[];
}

export interface ItemCreatePageLevel {
  pageId: number;
  pageLevel: number;
  resourceId: number;
  resourceAccessId: number[];
}

export interface ResourceAccessItemByPageId {
  resourceGroupName: string;
  resourceName: string;
  resourceAccessId: number;
  access: string;
  description: string;
  pageResourceAccessId: number;
}

export interface PageLevelItem {
  pageLevel: number;
  pageLevelId: number;
  resourceAccesses: ResourceAccessItemByPageId[];
}

// * -- Initial State --

export interface InitialState extends InitialStateDefault {
  pageId: number;
  list: ItemList[] | [];
  loadingByPageId: boolean;
  loadDataByPageId: boolean;
  listPageLevelsByPageId: ListPageLevelsByPageId[] | [];
}
export const initialState: InitialState = {
  pageId: 0,
  loading: false,
  loadData: false,
  list: [],
  loadingByPageId: false,
  loadDataByPageId: false,
  listPageLevelsByPageId: [],
};
