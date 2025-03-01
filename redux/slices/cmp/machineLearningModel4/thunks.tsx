import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { sliceName, Item } from './types';

export const getMachineLearningModel4List = createAsyncThunk(
  `${sliceName}/Model4List`,
  async ({ job_position, accident, injury }: { job_position: string; accident: string; injury: string }) => {
    const [response1, response2, response3, response4, response5] = await Promise.all([
      callApi({
        method: 'post',
        url: 'model4/predict_jobcode?top_k=3',
        body: { job_position },
        instanceName: 'ml',
      }),
      callApi({
        method: 'post',
        url: 'model4/predict_accident_cause?top_k=1',
        body: { accident, injury },
        instanceName: 'ml',
      }),
      callApi({
        method: 'post',
        url: 'model4/predict_accident_case?top_k=3',
        body: { accident, injury },
        instanceName: 'ml',
      }),
      callApi({
        method: 'post',
        url: 'model4/predict_injury_case?top_k=3',
        body: { accident, injury },
        instanceName: 'ml',
      }),
      callApi({
        method: 'post',
        url: 'model4/predict_injury_organ?top_k=3',
        body: { accident, injury },
        instanceName: 'ml',
      }),
    ]);

    const predictJobcodeApi1 = (response1 as { items: Item[] }).items;
    const predictAccidentCauseApi2 = (response2 as { items: Item[] }).items;
    const predictAccidentCaseApi3 = (response3 as { items: Item[] }).items;
    const predictInjuryCaseApi4 = (response4 as { items: Item[] }).items;
    const predictInjuryOrganApi5 = (response5 as { items: Item[] }).items;

    return {
      predictJobcodeApi1,
      predictAccidentCauseApi2,
      predictAccidentCaseApi3,
      predictInjuryCaseApi4,
      predictInjuryOrganApi5,
    };
  },
);


// ? ML API 6
export const predictWorkCausedDisease = createAsyncThunk(
  `${sliceName}/predictWorkCausedDisease`,
  async ({ accident, injury }: { accident: string; injury: string }) => {
    const [response] = await Promise.all([
      callApi({
        method: 'post',
        url: 'predict_work_caused_disease?top_k=100',
        body: { accident, injury },
        instanceName: 'ml',
      }),
    ]);

    const predictWorkCausedDiseaseApi6 = (response as { items: Item[] }).items;

    return {
      predictWorkCausedDiseaseApi6,
    };
  },
);
