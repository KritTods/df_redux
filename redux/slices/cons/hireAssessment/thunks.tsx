import { createAsyncThunk } from '@reduxjs/toolkit';
import { sliceName, FilterSearch, Item, Excel, ProcessJob, Detail } from './types';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { omitBy, isNil } from 'lodash';

export const getJobList = createAsyncThunk(`${sliceName}/list`, async (data: FilterSearch) => {
  const newFilter = omitBy(data, (value) => isNil(value) || value === '');
  const response = await callApi({
    method: 'post',
    url: 'hire-assessment/job/list',
    body: newFilter,
    instanceName: 'cons',
  });

  const { content, totalElements, number } = response as { content: Item[]; totalElements: number; number: number };

  return { content, totalElements, number };
});

export const jobCreate = createAsyncThunk(`${sliceName}/list`, async (data: ProcessJob) => {
  const response = await callApi({
    method: 'post',
    url: 'hire-assessment/job/create',
    body: data,
    instanceName: 'cons',
  });

  return response as Item[];
});

export const reculateDetail = createAsyncThunk(`${sliceName}/list`, async () => {
  const response = await callApi({
    method: 'post',
    url: 'hire-assessment/job/reculateDetailCnt',
    instanceName: 'cons',
  });

  return response;
});

export const getContributionJob = createAsyncThunk(`${sliceName}/job`, async (contributionJobId: number) => {
  const response = await callApi({
    method: 'get',
    url: `hire-assessment/job/${contributionJobId}/detail/list`,
    instanceName: 'cons',
  });

  const { hireAssessment, details } = response as { hireAssessment: Item; details: Detail[] };

  return { hireAssessment, details };
});

export const jobDelete = createAsyncThunk(`${sliceName}/delete`, async (data: number) => {
  const response = await callApi({
    method: 'patch',
    url: `hire-assessment/job/${data}`,
    instanceName: 'cons',
  });

  return response as Item[];
});

export const getExcelSuccess = createAsyncThunk(`${sliceName}/excel-success`, async (data: Excel) => {
  const response = await callApi({
    method: 'get',
    url: `hire-assessment/job/download-excel-success?contributionJobId=${data.contributionJobId}&year=${data.year}&ssoBranchCode=${data.ssoBranchCode}`,
    instanceName: 'cons',
    responseType: 'blob',
  });

  return response as Blob;
});

export const getExcelFail = createAsyncThunk(`${sliceName}/excel-fail`, async (data: Excel) => {
  const response = await callApi({
    method: 'get',
    url: `hire-assessment/job/download-excel-fails?contributionJobId=${data.contributionJobId}&ssoBranchCode=${data.ssoBranchCode}`,
    instanceName: 'cons',
  });

  console.log('getExcelFail', response);

  const url = window.URL.createObjectURL(new Blob([response as Blob]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${Date.now()}.xlsx`); // Set the file name
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);

  return response;
});
