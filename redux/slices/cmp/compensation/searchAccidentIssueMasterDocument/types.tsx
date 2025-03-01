import { InitialStateDefault } from 'wcf-component-lib/src/constants/interface';

export const sliceName = 'cmp-compensation-searchAccidentIssueMasterDocument';

// * -- AccidentIssueMasterDocument --

export interface AccidentIssueMasterDocument {
  documentCode: string;
  documentName: string;
  remark: string;
  isNecessary: string;
  isDeleted: string;
  createdDate: string;
  createdBy: string;
  updatedDate: string;
  updatedBy: string;
  disabled: string;
}

// * -- Initial State --

export interface StateProp extends InitialStateDefault {
  loading: boolean;
  accidentIssueMasterDocumentList: AccidentIssueMasterDocument[];
}

export const initialState: StateProp = {
  loading: false,
  loadData: true,
  accidentIssueMasterDocumentList: [],
};
