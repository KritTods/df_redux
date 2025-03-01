import { createAsyncThunk } from '@reduxjs/toolkit';
import { sliceName, MachineLearningModel1_2ModalForm1 } from './types';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';
// import { omitBy, isNil } from 'lodash';

export interface Ml1RequestBody {
    accident: string;
    injury: string;
    during_work_hours: string;
    at_workplace: string;
    has_witness: string;
    accident_issue_code: string;
}
export interface Ml2RequestBody {
    accident: string;
    injury: string;
    work_related: boolean;
    accident_issue_code: string;
}

export const getMachineLearningModel1_2ModalForm = createAsyncThunk(`${sliceName}/getMachineLearningModel1_2ModalForm`,
    async ({ ml1ReqBody, ml2ReqBody }: { ml1ReqBody: Ml1RequestBody, ml2ReqBody: Ml2RequestBody }) => {
        console.log('🚀 ~ file: thunks.tsx:22 ~ ml2ReqBody:', ml2ReqBody);
        console.log('🚀 ~ file: thunks.tsx:17 ~ ml1ReqBody:', ml1ReqBody);

        const [response1, response2] = await Promise.all([
            callApi({
                method: 'post',
                url: 'model1/predict',
                body: ml1ReqBody,
                instanceName: 'ml',
            }),
            callApi({
                method: 'post',
                url: 'model2/predict',
                body: ml2ReqBody,
                instanceName: 'ml',
            }),
        ]);

        console.log('🚀 ~ file: thunks.tsx:57 ~ response1:', response1);
        console.log('🚀 ~ file: thunks.tsx:59 ~ response2:', response2);


        const mockData: MachineLearningModel1_2ModalForm1 = {
            approvSatus: 'A',
            cfromWorkCause: 'A',
            cserverityCode: '11',
            occupationalDisease: 'A',
            approvalRemark: '',
            discussionByDoctor: 'เป็นกล้ามเนื้อหลังอักเสบ เกิดเนื่องจากการทำงาน',
            mlProcess: 'หมอนรองกระดูกสันหลังเคลื่อนกดทับเส้นประสาท',
            year: '2563',
            fromWorkCauseRemark: 'ส่งหารือ',
        };

        return mockData;
    });
