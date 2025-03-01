import { InitialStateDefault, FormDefault, Pagination } from 'wcf-component-lib/src/constants/interface';

export const sliceName = 'cons';

// * -- Item --
export interface Item {
  contributionJobId: number;
  contributionJobCode: string;
  ssoBranchCode: string;
  year: number;
  processDate: string;
  processType: string;
  sumSuccess: number;
  sumFail: number;
  typeDocCode: string;
  processUser: string;
  jobStatus: string;
  isDeleted: string;
  createdDate: string;
  createdBy: string;
  updatedDate: string;
  updatedBy: string;
  startAccountNo: string;
  endAccountNo: string;
  conditionDate: string;
  alertDocCode: string;
  inviteDocCode: string;
  signBy: string;
  flagType: string;
}

export interface Detail {
  contributionJobDetailId: number;
  contributionJobId: number;
  ssoBranchCode: string;
  success: number;
  fail: number;
  sumCompany: number;
  isDeleted: string;
  createdDate: string;
  createdBy: string;
  updatedDate: string;
  updatedBy: string;
  startInvoiceCode: string;
  endInvoiceCode: string;
}

// * -- FilterSearch --
export interface FilterSearch {
  hasSsoBranchCodes: string[];
  pagination: Pagination;
  year: number;
  processType?: string;
  typeDocCode?: string;
}

export const filter: FilterSearch = {
  hasSsoBranchCodes: [''],
  year: Number(new Date().getFullYear() + 543),
  pagination: {
    pageNumber: 0,
    pageSize: 10,
    orders: [
      {
        direction: 'DESC',
        property: 'contributionJobId',
      },
    ],
  },
  processType: '1',
  typeDocCode: '0',
};

// * -- Submit --
export interface ProcessJob {
  ssoBranchCodes: string[];
  year: number;
}

export const filterProcess: ProcessJob = {
  ssoBranchCodes: ['All'],
  year: Number(new Date().getFullYear() + 543),
};

// * -- Excel --
export interface Excel {
  contributionJobId: string;
  year?: string;
  ssoBranchCode: string;
}

// * -- table --
export const contributionDetail: Item = {
  contributionJobId: 0,
  contributionJobCode: '',
  ssoBranchCode: '',
  year: 0,
  processDate: '',
  processType: '',
  sumSuccess: 0,
  sumFail: 0,
  typeDocCode: '',
  processUser: '',
  jobStatus: '',
  isDeleted: '',
  createdDate: '',
  createdBy: '',
  updatedDate: '',
  updatedBy: '',
  startAccountNo: '',
  endAccountNo: '',
  conditionDate: '',
  alertDocCode: '',
  inviteDocCode: '',
  signBy: '',
  flagType: '',
};

export interface Excel {
  contributionJobId: string;
  year?: string;
  ssoBranchCode: string;
}

//Modal
export interface ModalHireAssessmentJob {
  isOpen: boolean;
  contributionJobId: number;
  ssoBranchCode: number;
  contributionJobCode: string;
}

export const modal: ModalHireAssessmentJob = {
  isOpen: false,
  contributionJobId: 0,
  ssoBranchCode: 0,
  contributionJobCode: '',
};

// * -- Form --
export interface ItemForm {
  isActive: string;
}

export const itemForm: ItemForm = {
  isActive: 'Y',
};

export interface Form extends FormDefault {
  item: ItemForm;
}

export const form: Form = {
  type: 'add',
  loading: false,
  item: itemForm,
};

// * -- Initial State --

export interface StateProp extends InitialStateDefault {
  list: Item[];
  totalElements: number;
  contributionJoblist: Detail[];
  contributionDetail: Item;
  form: Form;
  filter: FilterSearch;
  filterProcess: ProcessJob;
  modal: ModalHireAssessmentJob;
}

export const initialState: StateProp = {
  loading: false,
  loadData: false,
  totalElements: 0,
  form,
  list: [],
  contributionJoblist: [],
  contributionDetail: contributionDetail,
  filter,
  modal,
  filterProcess,
};
