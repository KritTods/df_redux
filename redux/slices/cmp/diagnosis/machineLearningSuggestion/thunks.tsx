import { createAsyncThunk } from '@reduxjs/toolkit';
// import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';

// import { omitBy, isNil } from 'lodash';
import { sliceName } from './types';


export const getMachineLearningSuggestion = createAsyncThunk(`${sliceName}/machineLearningSuggestion`,
    async () => {
        // const newMachineLearningSuggestion = omitBy(machineLearningSuggestion, (value) => isNil(value) || value === '');
        // console.log(newMachineLearningSuggestion);

        // Simulating an API call with a delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const content = {
            machineLearningSuggestion: {
                investigatedLogCode: '25556649',
                accidentIssueCode: '25556649',
            },
        };

        return content;
    });
