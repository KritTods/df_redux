import { createAsyncThunk } from '@reduxjs/toolkit';
import { sliceName } from './types';

export const getSalaryRateCalculationProvince = createAsyncThunk(`${sliceName}/getSalaryRateCalculationProvince`,
    async () => {
        // Simulating an API call with a delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const content = {
            provinces: [
                {
                    value: '1',
                    label: 'กระบี่'
                },
                {
                    value: '2',
                    label: 'กรุงเทพมหานคร'
                },
                {
                    value: '3',
                    label: 'กาญจนบุรี'
                },
                {
                    value: '4',
                    label: 'กาฬสินธุ์'
                },
                {
                    value: '5',
                    label: 'กำแพงเพชร'
                }
            ]
        };

        return content;
    });
