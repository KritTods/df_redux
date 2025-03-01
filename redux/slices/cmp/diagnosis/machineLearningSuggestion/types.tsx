import { InitialStateDefault } from 'wcf-component-lib/src/constants/interface';

export const sliceName = 'machineLearningSuggestion';

export interface MachineLearningSuggestion {
    investigatedLogCode: string;
    accidentIssueCode: string;
}

export const machineLearningSuggestion: MachineLearningSuggestion = {
    investigatedLogCode: '',
    accidentIssueCode: '',
};

export interface InitialState extends InitialStateDefault {
    machineLearningSuggestion: MachineLearningSuggestion;
    isSubmit: boolean;
    isOpenModal: boolean;
}

export const initialState: InitialState = {
    loading: false,
    loadData: false,
    machineLearningSuggestion,
    isSubmit: false,
    isOpenModal: false,
};
