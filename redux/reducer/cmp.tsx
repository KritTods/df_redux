import accidentIssueSlice from '@/redux/slices/cmp/compensation/searchRequestStatus/slice';
import diagnosisSlice from '@/redux/slices/cmp/diagnosis/slice';
import accidentIssueMasterDocumentSlice from '@/redux/slices/cmp/compensation/searchAccidentIssueMasterDocument/slice';
import addressEmployeeSlice from '@/redux/slices/cmp/compensation/addressForAccidentIssue/employee/slice';
import addressAccidentSlice from '@/redux/slices/cmp/compensation/addressForAccidentIssue/accident/slice';
import addressWitnessSlice from '@/redux/slices/cmp/compensation/addressForAccidentIssue/witness/slice';
import addressCompanySlice from '@/redux/slices/cmp/compensation/addressForAccidentIssue/company/slice';
import addressSendDocumentSlice from '@/redux/slices/cmp/compensation/addressForAccidentIssue/sendDocument/slice';
import machineLearningModel4Slice from '@/redux/slices/cmp/machineLearningModel4/slice';
import mlSuggestionSlice from '@/redux/slices/cmp/diagnosis/machineLearningSuggestion/slice';
import machineLearningModel1_2Slice from '@/redux/slices/cmp/machineLearningModel1_2/slice';
import salaryRateCalculationSlice from '@/redux/slices/cmp/diagnosis/salaryRateCalculation/slice';
import diagnosisFormSlice from '@/redux/slices/cmp/diagnosis/form/slice';

export const cmp = {
  accidentIssueSlice,
  diagnosisSlice,
  accidentIssueMasterDocumentSlice,
  addressEmployeeSlice,
  addressAccidentSlice,
  addressWitnessSlice,
  addressCompanySlice,
  addressSendDocumentSlice,
  machineLearningModel4Slice,
  mlSuggestionSlice,
  machineLearningModel1_2Slice,
  salaryRateCalculationSlice,
  diagnosisFormSlice,
};
