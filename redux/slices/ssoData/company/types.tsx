import { InitialStateDefault } from 'wcf-component-lib/src/constants/interface';
export const sliceName = 'ssoData-company';

// * -- Company --

export interface Company {
  lastIncremental: string;
  message: string;
  status: string;
  companyInfo: CompanyInfo;
}

interface CompanyInfo {
  accBranch: string;
  accNo: string;
  branchEmployeeNo: number;
  companyAddress: string;
  companyAddress1: string;
  companyAddress2: string;
  companyAmphurCode: string;
  companyName: string;
  companyName2: string;
  companyName3: string;
  companyRigNo: string;
  companyStatus: string;
  companyStatusDesc: string;
  companyTel: string;
  companyType: string;
  companyTypeDesc: string;
  companyZip: string;
  contactAddress: string;
  contactAddress1: string;
  contactAddress2: string;
  contactAmphurCode: string;
  contactFax: string;
  contactTel: string;
  contactZip: string;
  fdappl: string;
  lddate: string;
  newOperateDate: string;
  paySsoBranchCode: string;
  paySsoBranchName: string;
  pvdSsoBranchCode: string;
  pvdSsoBranchName: string;
  ssoBranchCode: string;
  ssoBranchName: string;
  totalEmployeeNo: string;
}

// * -- Initial State --

export const initialCompany: Company = {
  lastIncremental: '',
  message: '',
  status: '',
  companyInfo: {
    accBranch: '',
    accNo: '',
    branchEmployeeNo: 0,
    companyAddress: '',
    companyAddress1: '',
    companyAddress2: '',
    companyAmphurCode: '',
    companyName: '',
    companyName2: '',
    companyName3: '',
    companyRigNo: '',
    companyStatus: '',
    companyStatusDesc: '',
    companyTel: '',
    companyType: '',
    companyTypeDesc: '',
    companyZip: '',
    contactAddress: '',
    contactAddress1: '',
    contactAddress2: '',
    contactAmphurCode: '',
    contactFax: '',
    contactTel: '',
    contactZip: '',
    fdappl: '',
    lddate: '',
    newOperateDate: '',
    paySsoBranchCode: '',
    paySsoBranchName: '',
    pvdSsoBranchCode: '',
    pvdSsoBranchName: '',
    ssoBranchCode: '',
    ssoBranchName: '',
    totalEmployeeNo: '',
  },
};

export interface StateProp extends InitialStateDefault {
  company: {
    loading: boolean;
    data: Company;
  };
}

export const initialState: StateProp = {
  loading: false,
  loadData: true,
  company: {
    loading: true,
    data: initialCompany,
  },
};
