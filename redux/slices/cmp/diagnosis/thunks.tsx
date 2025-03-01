import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
import {
    sliceName,
    // DataUpdateDiagnosis,
    FilterSearch,
    DiagnosisLogHistoryItem,
    FilterHistoryDiagnosisLog,
    ItemList,
    // DigosisFormItem,
} from './types';
import { omitBy, isNil } from 'lodash';


export const getDiagnosisList = createAsyncThunk(`${sliceName}/list`, async (filter: FilterSearch) => {
    const newFilter = omitBy(filter, (value) => isNil(value) || value === '');
    console.log(newFilter.pagination);
    if (newFilter.pagination?.orders) console.table(newFilter.pagination?.orders);

    // Simulating an API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    let content: ItemList[] = [
        {
            recordNo: 1,
            accidentIssueCode: '10126700123',
            accidentIssueId: '10126700123',
            employeeCitizenId: '1234567890123',
            employeeTtileName: 'นาย',
            employeeFirstName: 'อำนาจ',
            employeeLastName: 'สายชื่น',
            accidentDate: '30/08/2567',
            informDate: '01/09/2567',
            createdBy: '01/09/2567',
            createdDate: '01/09/2567',
            updatedBy: '01/09/2567',
            updatedDate: '01/09/2567',
            accidentIssueStatus: 'O',
            accidentIssueStatusDesc: 'รออนุมัติ',
            draft: 'N',
            informalFlag: 'N',
            informalAccidentIssueCode: '',
        },
        {
            recordNo: 2,
            accidentIssueCode: '10126700123',
            employeeCitizenId: '1234567890123',
            employeeTtileName: 'นาย',
            employeeFirstName: 'อำนาจ',
            employeeLastName: 'สายชื่น',
            accidentDate: '30/08/2567',
            informDate: '01/09/2567',
            createdBy: '01/09/2567',
            createdDate: '01/09/2567',
            updatedBy: '01/09/2567',
            updatedDate: '01/09/2567',
            accidentIssueStatus: 'O',
            accidentIssueStatusDesc: 'อนุมัติ',
            draft: 'N',
            informalFlag: 'N',
            informalAccidentIssueCode: '',
            accidentIssueId: ''
        },
        {
            recordNo: 3,
            accidentIssueCode: '10126700123',
            employeeCitizenId: '1234567890123',
            employeeTtileName: 'นาย',
            employeeFirstName: 'อำนาจ',
            employeeLastName: 'สายชื่น',
            accidentDate: '30/08/2567',
            informDate: '01/09/2567',
            createdBy: '01/09/2567',
            createdDate: '01/09/2567',
            updatedBy: '01/09/2567',
            updatedDate: '01/09/2567',
            accidentIssueStatus: 'O',
            accidentIssueStatusDesc: 'แบบร่าง',
            draft: 'N',
            informalFlag: 'N',
            informalAccidentIssueCode: '',
            accidentIssueId: ''
        },
        {
            recordNo: 4,
            accidentIssueCode: '10126700123',
            employeeCitizenId: '1234567890123',
            employeeTtileName: 'นาย',
            employeeFirstName: 'อำนาจ',
            employeeLastName: 'สายชื่น',
            accidentDate: '30/08/2567',
            informDate: '01/09/2567',
            createdBy: '01/09/2567',
            createdDate: '01/09/2567',
            updatedBy: '01/09/2567',
            updatedDate: '01/09/2567',
            accidentIssueStatus: 'O',
            accidentIssueStatusDesc: 'รอวินิจฉัย',
            draft: 'N',
            informalFlag: 'N',
            informalAccidentIssueCode: '',
            accidentIssueId: ''
        },
        {
            recordNo: 5,
            accidentIssueCode: '10126700123',
            employeeCitizenId: '1234567890123',
            employeeTtileName: 'นาย',
            employeeFirstName: 'อำนาจ',
            employeeLastName: 'สายชื่น',
            accidentDate: '30/08/2567',
            informDate: '01/09/2567',
            createdBy: '01/09/2567',
            createdDate: '01/09/2567',
            updatedBy: '01/09/2567',
            updatedDate: '01/09/2567',
            accidentIssueStatus: 'O',
            accidentIssueStatusDesc: 'รอการตัดจ่าย',
            draft: 'N',
            informalFlag: 'N',
            informalAccidentIssueCode: '',
            accidentIssueId: ''
        },
        {
            recordNo: 6,
            accidentIssueCode: '10126700123',
            employeeCitizenId: '1234567890123',
            employeeTtileName: 'นาย',
            employeeFirstName: 'อำนาจ',
            employeeLastName: 'สายชื่น',
            accidentDate: '30/08/2567',
            informDate: '01/09/2567',
            createdBy: '01/09/2567',
            createdDate: '01/09/2567',
            updatedBy: '01/09/2567',
            updatedDate: '01/09/2567',
            accidentIssueStatus: 'O',
            accidentIssueStatusDesc: 'ไม่อนุมัติ',
            draft: 'N',
            informalFlag: 'N',
            informalAccidentIssueCode: '',
            accidentIssueId: ''
        },
    ];

    for (let i = 4; i < 7; i++) {
        content = [
            ...content,
            {
                recordNo: i,
                accidentIssueCode: '10126700123',
                employeeCitizenId: '1234567890123',
                employeeTtileName: 'นาย',
                employeeFirstName: 'อำนาจ',
                employeeLastName: 'สายชื่น',
                accidentDate: '30/08/2567',
                informDate: '01/09/2567',
                createdBy: '01/09/2567',
                createdDate: '01/09/2567',
                updatedBy: '01/09/2567',
                updatedDate: '01/09/2567',
                accidentIssueStatus: 'O',
                accidentIssueStatusDesc: 'รออนุมัติ',
                draft: 'N',
                informalFlag: 'N',
                informalAccidentIssueCode: '',
                accidentIssueId: ''
            },
        ];
    }
    const { totalElements, number } = {
        totalElements: 15,
        number: 0,
    };

    return { content, totalElements, number };
});

// export const geDiagnosisById = createAsyncThunk(
//     `${sliceName}/getDiagnosisById`,
//     async ({ DiagnosisId }: { DiagnosisId: string }) => {
//         return (await callApi({ method: 'get', url: `Diagnosiss/${DiagnosisId}` })) as ItemDiagnosisForm;
//     },
// );

// export const updateDiagnosis = createAsyncThunk(
//     `${sliceName}/update`,
//     async ({ data, DiagnosisId }: { data: DataUpdateDiagnosis; DiagnosisId: number }) => {
//         return await callApi({
//             method: 'patch',
//             url: `Diagnosiss/${DiagnosisId}`,
//             body: data,
//         });
//     },
// );

export const getDiagnosisLogHistory = createAsyncThunk(
    `${sliceName}/logs/list`,
    async ({
        DiagnosisId,
        filterHistory,
    }: {
        DiagnosisId: number;
        filterHistory: FilterHistoryDiagnosisLog;
    }) => {
        const newFilter = omitBy(filterHistory, (value) => isNil(value) || value === '');

        const response = await callApi({
            method: 'post',
            url: `Diagnosiss/${DiagnosisId}/Diagnosis-logs/list`,
            body: newFilter,
            instanceName: 'ums',
        });
        const { content, totalElements, number } = response as {
            content: DiagnosisLogHistoryItem[];
            totalElements: number;
            number: number;
        };

        return { content, totalElements, number };
    },
);
