import { InitialStateDefault } from 'wcf-component-lib/src/constants/interface';

export const sliceName = 'MachineLearningModel1_2';

export interface MachineLearningModel1_2ModalForm1 {
    approvSatus: string;
    cfromWorkCause: string;
    cserverityCode?: string;
    occupationalDisease?: string;
    approvalRemark?: string;
    discussionByDoctor?: string;
    mlProcess?: string;
    year?: string;
    fromWorkCauseRemark?: string;
}

export const machineLearningModel1_2ModalForm1: MachineLearningModel1_2ModalForm1 = {
    approvSatus: 'A',
    cfromWorkCause: '',
    cserverityCode: 'A',
    occupationalDisease: '',
    approvalRemark: '',
    discussionByDoctor: '',
    mlProcess: '',
    year: '',
    fromWorkCauseRemark: '',
};


export interface InitialState extends InitialStateDefault {
    loadData: boolean;
    isModalOpen: boolean;
    machineLearningModel1_2ModalForm1: MachineLearningModel1_2ModalForm1;
}

export const initialState: InitialState = {
    loading: false,
    loadData: false,
    isModalOpen: false,
    machineLearningModel1_2ModalForm1,
};

