import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { sliceName, ItemForm, ItemList, FilterSearch } from './types';
import { omitBy, isNil } from 'lodash';

export const getTemplateList = createAsyncThunk(`${sliceName}/list`, async (filter: FilterSearch) => {
  const newFilter = omitBy(filter, (value) => isNil(value) || value === '');
  const response = await callApi({
    method: 'post',
    url: 'templates/list',
    body: newFilter,
    instanceName: 'nms',
  });

  const { content, totalElements, number } = response as { content: ItemList[]; totalElements: number; number: number };

  return { content, totalElements, number };
});

export const getById = createAsyncThunk(`${sliceName}/getById`, async ({ templateId }: { templateId: number }) => {
  return (await callApi({
    method: 'get',
    url: `templates/${templateId}`,
    instanceName: 'nms',
  })) as ItemForm;
});

export const addTemplate = createAsyncThunk(`${sliceName}/add`, async (payload: ItemForm) => {
  return await callApi({ method: 'post', url: 'templates', body: payload, instanceName: 'nms' });
});

export const updateTemplate = createAsyncThunk(
  `${sliceName}/update`,
  async ({ data, templateId }: { data: ItemForm; templateId: number }) => {
    return await callApi({
      method: 'patch',
      url: `templates/${templateId}`,
      body: data,
      instanceName: 'nms',
    });
  },
);
