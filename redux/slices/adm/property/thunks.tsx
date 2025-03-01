import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  sliceName,
  FilterSearch,
  ItemCreate,
  ItemUpdate,
  // FilterHistory,
  PropertyItem,
  PropertyValueCreate,
  PropertyValueUpdate,
  // BankHistoryItem,
  ItemForm,
  PropertyValueItem,
} from './types';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { omitBy, isNil } from 'lodash';

export const getPropertyList = createAsyncThunk(`${sliceName}/list`, async ({ data }: { data: FilterSearch }) => {
  const newFilter = omitBy(data, (value) => isNil(value) || value === '');

  const response = await callApi({
    method: 'post',
    url: 'properties/list',
    body: newFilter,
    instanceName: 'adm_tool',
  });

  const { content, totalElements, number } = response as {
    content: PropertyItem[];
    totalElements: number;
    number: number;
  };

  return { content, totalElements, number };
});

export const createProperty = createAsyncThunk(`${sliceName}/create`, async ({ data }: { data: ItemCreate }) => {
  return (await callApi({
    method: 'post',
    url: 'properties',
    body: data,
    instanceName: 'adm_tool',
  })) as ItemForm;
});

export const updateProperty = createAsyncThunk(`${sliceName}/update`, async ({ data }: { data: ItemUpdate }) => {
  const { propertyId } = data;

  return (await callApi({
    method: 'patch',
    url: `properties/${propertyId}`,
    body: data,
    instanceName: 'adm_tool',
  })) as ItemForm;
});

export const getPropertyById = createAsyncThunk(
  `${sliceName}/getPropertyById`,
  async ({ propertyId }: { propertyId: number }) => {
    return (await callApi({
      method: 'get',
      url: `properties/${propertyId}`,
      instanceName: 'adm_tool',
    })) as ItemForm;
  },
);

// export const getPropertyLogById = createAsyncThunk(
//   `${sliceName}/getPropertyLogById`,
//   async ({ data }: { data: FilterHistory }) => {
//     const { bankId } = data;

//     const response = await callApi({
//       method: 'post',
//       url: `banks/${bankId}/bank-logs/list`,
//       body: data,
//       instanceName: 'mdm',
//     });
//     const { content, totalElements, number } = response as {
//       content: BankHistoryItem[];
//       totalElements: number;
//       number: number;
//     };

//     return { content, totalElements, number };
//   },
// );

//Property Value

export const getPropertyValueList = createAsyncThunk(
  `${sliceName}/listPropertyValue`,
  async ({ propertyId }: { propertyId: number }) => {
    return (await callApi({
      method: 'get',
      url: `properties/${propertyId}/properties-values/list`,
      instanceName: 'adm_tool',
    })) as PropertyValueItem[];
  },
);

export const addPropertyValue = createAsyncThunk(
  `${sliceName}/addPropertyValue`,
  async ({ data }: { data: PropertyValueCreate }) => {
    const { propertyId } = data;

    return (await callApi({
      method: 'post',
      body: data,
      url: `properties/${propertyId}/properties-values`,
      instanceName: 'adm_tool',
    })) as PropertyValueItem;
  },
);

export const deletePropertyValue = createAsyncThunk(
  `${sliceName}/deletePropertyValue`,
  async ({ propertyValueId }: { propertyValueId: number }) => {
    return await callApi({
      method: 'delete',
      url: `properties-values/${propertyValueId}`,
      instanceName: 'adm_tool',
    });
  },
);

export const updatePropertyValue = createAsyncThunk(
  `${sliceName}/updatePropertyValue`,
  async ({ data }: { data: PropertyValueUpdate }) => {
    const { propertyValueId } = data;

    return (await callApi({
      method: 'patch',
      body: data,
      url: `properties-values/${propertyValueId}`,
      instanceName: 'adm_tool',
    })) as PropertyValueItem;
  },
);

export const getPropertyValueById = createAsyncThunk(
  `${sliceName}/getPropertyValueById`,
  async ({ propertyValueId }: { propertyValueId: number }) => {

    return (await callApi({
      method: 'get',
      url: `properties-values/${propertyValueId}`,
      instanceName: 'adm_tool',
    })) as PropertyValueItem;
  },
);




