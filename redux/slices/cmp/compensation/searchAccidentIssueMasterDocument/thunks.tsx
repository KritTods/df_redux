import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import { AccidentIssueMasterDocument, sliceName } from './types';

export const getAccidentIssueMasterDocumentInfo = createAsyncThunk(
  `${sliceName}/getAccidentIssueMasterDocumentInfo`,
  async () => {
    const response = await callApi({
      method: 'get',
      url: 'compensation/searchAccidentIssueMasterDocument',
      instanceName: 'cmp',
    });

    const { content } = response as {
      content: AccidentIssueMasterDocument[];
    };

    return content;
  },
);
