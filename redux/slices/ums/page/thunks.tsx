import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { FilterSearch, ItemCreate, ItemForm, ItemUpdate, PageItem, sliceName } from './types';
import { omitBy, isNil } from 'lodash';

export const getPagesListByModuleId = createAsyncThunk(
  `${sliceName}/listByModuleId`,
  async ({ data }: { data: FilterSearch }) => {
    const { moduleId } = data;
    const newFilter = omitBy(data, (value) => isNil(value) || value === '');

    const response = await callApi({
      method: 'post',
      url: `modules/${moduleId}/pages/list`,
      body: newFilter,
      instanceName: 'ums',
    });

    const { content, totalElements, number } = response as {
      content: PageItem[];
      totalElements: number;
      number: number;
    };

    return { content, totalElements, number };
  },
);

export const createPage = createAsyncThunk(`${sliceName}/create`, async ({ data }: { data: ItemCreate }) => {
  const { moduleId } = data;

  return (await callApi({
    method: 'post',
    url: `modules/${moduleId}/pages`,
    body: data,
    instanceName: 'ums',
  })) as ItemForm;
});

export const updatePage = createAsyncThunk(`${sliceName}/update`, async ({ data }: { data: ItemUpdate }) => {
  const { pageId } = data;

  return (await callApi({
    method: 'patch',
    url: `pages/${pageId}`,
    body: data,
    instanceName: 'ums',
  })) as ItemForm;
});

export const getPageById = createAsyncThunk(`${sliceName}/getPageById`, async ({ pageId }: { pageId: number }) => {
  return (await callApi({
    method: 'get',
    url: `pages/${pageId}`,
    instanceName: 'ums',
  })) as ItemForm;
});

export const deletePage = createAsyncThunk(`${sliceName}/delete`, async ({ pageId }: { pageId: number }) => {
  return await callApi({
    method: 'delete',
    url: `pages/${pageId}`,
    instanceName: 'ums',
  });
});
