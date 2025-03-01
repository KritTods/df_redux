import { InitialStateDefault } from 'wcf-component-lib/src/constants/interface';

export const sliceName = 'diagnosisForm';

export interface InitialState extends InitialStateDefault {
    isOpenPrintDocumentModal: boolean;
}

export const initialState: InitialState = {
    loading: false,
    loadData: false,
    isOpenPrintDocumentModal: false,
};
