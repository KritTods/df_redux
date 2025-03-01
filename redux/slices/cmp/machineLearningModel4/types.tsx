import { InitialStateDefault } from 'wcf-component-lib/src/constants/interface';

export const sliceName = 'machineLearningModel4';

// * -- Form Step1  --

export interface FormStep1 {
  currentPosition?: string;
  accidentCauseText?: string;
  accidentInjuryText?: string;
  remarkAccidentExplain1?: string;
}

export const formStep1: FormStep1 = {
  currentPosition: '',
  accidentCauseText: '',
  accidentInjuryText: '',
  remarkAccidentExplain1: '',
};

// * -- Form Step2  --

export interface FormStep2 {
  positionCode: string;
  accidentInjury: string;
  accidentOrganSubGroup: string;
  accidentCase: string;
  accidentCaus: string;
}

export const formStep2: FormStep2 = {
  positionCode: '',
  accidentInjury: '',
  accidentOrganSubGroup: '',
  accidentCase: '',
  accidentCaus: '',
};

// * -- Form Step3  --

export interface FormStep3 {
  currentPosition?: string;
  accidentCauseText?: string;
  accidentInjuryText?: string;
  remarkAccidentExplain3?: string;
  positionCode?: string;
  accidentInjury?: string;
  accidentOrganSubGroup?: string;
  accidentCaus?: string;
  accidentCase?: string;
}

export const formStep3: FormStep3 = {
  currentPosition: '',
  accidentCauseText: '',
  accidentInjuryText: '',
  remarkAccidentExplain3: '',
  positionCode: '',
  accidentInjury: '',
  accidentOrganSubGroup: '',
  accidentCaus: '',
  accidentCase: '',
};
// * -- model4 API   --

export interface Item {
  code: string;
  label: string;
  score: number;
}

export interface InitialState extends InitialStateDefault {
  isOpenedModal: boolean;
  step: number;
  formStep1: FormStep1;
  formStep2: FormStep2;
  formStep3: FormStep3;
  predictJobcodeApi1: Item[];
  predictAccidentCauseApi2: Item[];
  predictAccidentCaseApi3: Item[];
  predictInjuryCaseApi4: Item[];
  predictInjuryOrganApi5: Item[];
  predictWorkCausedDiseaseApi6: Item[];
}

// ? -------- initialValue --------

export const initialState: InitialState = {
  isOpenedModal: false,
  step: 1,
  formStep1,
  formStep2,
  formStep3,
  loading: false,
  loadData: false,
  predictJobcodeApi1: [],
  predictAccidentCauseApi2: [],
  predictAccidentCaseApi3: [],
  predictInjuryCaseApi4: [],
  predictInjuryOrganApi5: [],
  predictWorkCausedDiseaseApi6: [],
};
