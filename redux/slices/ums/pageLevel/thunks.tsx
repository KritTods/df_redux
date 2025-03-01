import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { ItemCreatePageLevel, ItemList, ListPageLevelsByPageId, sliceName } from './types';

export const getPageLevelsList = createAsyncThunk(`${sliceName}/list`, async ({ moduleId }: { moduleId: number }) => {
  const res = (await callApi({
    method: 'get',
    url: `page-levels/list?moduleId=${moduleId}`,
  })) as { pages: ItemList[] };

  return res?.pages || [];
});

export const getPageLevelsByPageId = createAsyncThunk(
  `${sliceName}/listPageLevelsByPageId`,
  async ({ pageId }: { pageId: number }) => {
    return (await callApi({
      method: 'post',
      url: `pages/${pageId}/page-levels/list`,
      instanceName: 'ums',
    })) as ListPageLevelsByPageId[];
  },
);

export const createPageLevel = createAsyncThunk(
  `${sliceName}/create`,
  async ({ data }: { data: ItemCreatePageLevel }) => {
    const { pageId } = data;

    return await callApi({
      method: 'post',
      url: `pages/${pageId}/page-levels`,
      body: data,
      instanceName: 'ums',
    });
  },
);
