import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { ItemCreate, ItemForm, ModuleItem, ItemUpdate, sliceName } from './types';

export const getModulesList = createAsyncThunk(`${sliceName}/list`, async () => {
  const result = await callApi({
    method: 'post',
    url: 'modules/list',
  });

  return result as ModuleItem[];
});

export const createModule = createAsyncThunk(`${sliceName}/create`, async ({ data }: { data: ItemCreate }) => {
  return (await callApi({
    method: 'post',
    url: 'modules',
    body: data,
    instanceName: 'ums',
  })) as ItemForm;
});

export const updateModule = createAsyncThunk(`${sliceName}/update`, async ({ data }: { data: ItemUpdate }) => {
  const { moduleId } = data;

  return (await callApi({
    method: 'patch',
    url: `modules/${moduleId}`,
    body: data,
    instanceName: 'ums',
  })) as ItemForm;
});

export const getModuleById = createAsyncThunk(
  `${sliceName}/getModuleById`,
  async ({ moduleId }: { moduleId: number }) => {
    return (await callApi({
      method: 'get',
      url: `modules/${moduleId}`,
      instanceName: 'ums',
    })) as ItemForm;
  },
);

export const deleteModule = createAsyncThunk(`${sliceName}/delete`, async ({ moduleId }: { moduleId: number }) => {
  return await callApi({
    method: 'delete',
    url: `modules/${moduleId}`,
    instanceName: 'ums',
  });
});
