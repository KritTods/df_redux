import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { FormStep1, FormStep3, InitialState, initialState, sliceName } from './types';
import { getMachineLearningModel4List, predictWorkCausedDisease } from './thunks';

const machineLearningModel4Slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setDataStep1: (state, action: PayloadAction<FormStep1>) => {
      state.formStep1 = { ...state.formStep1, ...action.payload };
      state.isOpenedModal = true;
    },
    setDataStep2: (state, action: PayloadAction<FormStep3>) => {
      return {
        ...state,
        formStep3: { ...state.formStep3, ...action.payload },
        isOpenedModal: true,
        loadData: true,
      };
    },
    setDataStep2ToStep3: (state, action: PayloadAction<FormStep3>) => {
      state.formStep3 = { ...state.formStep3, ...action.payload };
      state.isOpenedModal = true;
      state.step = 3;
    },
    setDataStep2ToForm: (state, action: PayloadAction<FormStep3>) => {
      state.formStep3 = { ...state.formStep3, ...action.payload };
      state.isOpenedModal = false;
      state.step = 1;
    },
    setDataStep3: (state, action: PayloadAction<FormStep3>) => {
      state.formStep3 = { ...state.formStep3, ...action.payload };
      state.loading = true;
    },
    setIsOpenedModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenedModal = action.payload;
      state.step = action.payload === false ? 1 : state.step;
    },
    resetStateMachineLearningModel4: () => initialState,
  },
  extraReducers(builder) {
    // ? getMachineLearningModel4List
    builder.addCase(getMachineLearningModel4List.pending, (state) => {
      state.loading = true;
      state.loadData = false;
    });
    builder.addCase(getMachineLearningModel4List.fulfilled, (state, action) => {
      state.loading = false;
      //   state = { ...state, ...action.payload };
      state.predictJobcodeApi1 = action.payload.predictJobcodeApi1;
      state.predictAccidentCauseApi2 = action.payload.predictAccidentCauseApi2;
      state.predictAccidentCaseApi3 = action.payload.predictAccidentCaseApi3;
      state.predictInjuryCaseApi4 = action.payload.predictInjuryCaseApi4;
      state.predictInjuryOrganApi5 = action.payload.predictInjuryOrganApi5;
      state.step = 2;
    });
    builder.addCase(getMachineLearningModel4List.rejected, (state) => {
      state.loading = false;
    });

    // ? predictWorkCausedDisease
    builder.addCase(predictWorkCausedDisease.pending, (state) => {
      state.loading = true;
      state.loadData = false;
    });
    builder.addCase(predictWorkCausedDisease.fulfilled, (state, action) => {
      state.loading = false;
      state.predictWorkCausedDiseaseApi6 = action.payload.predictWorkCausedDiseaseApi6;
      state.isOpenedModal = false;
      state.step = 1;
    });
    builder.addCase(predictWorkCausedDisease.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const {
  setDataStep1,
  setDataStep2,
  setDataStep3,
  setIsOpenedModal,
  setDataStep2ToStep3,
  setDataStep2ToForm,
  resetStateMachineLearningModel4,
} = machineLearningModel4Slice.actions;
export default machineLearningModel4Slice.reducer;
export const machineLearningModel4Selector = (state: RootState): InitialState => state.machineLearningModel4Slice;
