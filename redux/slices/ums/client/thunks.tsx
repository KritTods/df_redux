import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import {
  ClientItem,
  FilterSearch,
  ItemCreate,
  ItemUpdate,
  sliceName,
  ItemForm,
  ClientPrivileges,
  ItemCreateClientPrivileges,
  ClientPrivilegesItem,
} from './types';
import { omitBy, isNil } from 'lodash';

const clientPrivileges = 'ClientPrivileges';

export const getClientList = createAsyncThunk(`${sliceName}/list`, async ({ data }: { data: FilterSearch }) => {
  const newFilter = omitBy(data, (value) => isNil(value) || value === '');

  const response = await callApi({
    method: 'post',
    url: 'clients/list',
    body: newFilter,
    instanceName: 'ums',
  });

  const { content, totalElements, number } = response as {
    content: ClientItem[];
    totalElements: number;
    number: number;
  };

  return { content, totalElements, number };
});

export const createClient = createAsyncThunk(`${sliceName}/create`, async ({ data }: { data: ItemCreate }) => {
  return (await callApi({
    method: 'post',
    url: 'clients',
    body: data,
    instanceName: 'ums',
  })) as ItemForm;
});

export const updateClient = createAsyncThunk(`${sliceName}/update`, async ({ data }: { data: ItemUpdate }) => {
  const { clientId } = data;

  return (await callApi({
    method: 'patch',
    url: `clients/${clientId}`,
    body: data,
    instanceName: 'ums',
  })) as ItemForm;
});

export const getClientById = createAsyncThunk(
  `${sliceName}/getClientById`,
  async ({ clientId }: { clientId: number }) => {
    return (await callApi({
      method: 'get',
      url: `clients/${clientId}`,
      instanceName: 'ums',
    })) as ItemForm;
  },
);

export const getClientPrivilegesList = createAsyncThunk(
  `${clientPrivileges}/list`,
  async ({ clientId }: { clientId: number }) => {
    return (await callApi({
      method: 'get',
      url: `clients/${clientId}/client-privileges/list`,
      instanceName: 'ums',
    })) as ClientPrivileges[];
  },
);

export const addClientPrivileges = createAsyncThunk(
  `${clientPrivileges}/create`,
  async ({ data }: { data: ItemCreateClientPrivileges }) => {
    const { clientId } = data;

    return (await callApi({
      method: 'post',
      url: `clients/${clientId}/client-privileges/add`,
      body: data,
      instanceName: 'ums',
    })) as ClientPrivilegesItem[];
  },
);

export const deleteClientPrivileges = createAsyncThunk(
  `${clientPrivileges}/delete`,
  async ({ clientPrivilegeId }: { clientPrivilegeId: number }) => {
    return await callApi({
      method: 'delete',
      url: `client-privileges/${clientPrivilegeId}`,
      instanceName: 'ums',
    });
  },
);
