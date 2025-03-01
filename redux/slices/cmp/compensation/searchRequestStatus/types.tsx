import { FormDefault, InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { StatusIndicatorType } from 'wcf-component-lib/src/components/BaseGrid/CustomGridCell/Cell/StatusIndicator';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';

export const sliceName = 'cmp-compensation-searchRequestStatus';

// * -- FilterSearch --
export interface FilterSearch {
  operation: string;
  pagination: Pagination;
  condition: {
    tabFlag: 'ALL' | 'NoECPS' | 'HaveECPS';
    searchFrom: number;
    searchId: string;
    informDate: string;
    informDateFrom: string;
    informDateTo: string;
    accidentDate: string;
    accidentDateFrom: string;
    accidentDateTo: string;
    accidentIssueStatus: string[];
    createdBy: string;
    updatedBy: string;
    // filterFlag: 'S' | 'F';
  };
}

export const filter: FilterSearch = {
  operation: 'OR',
  pagination: {
    ...pagination,
    orders: [
      {
        direction: 'ASC',
        property: 'accidentIssueCode',
      },
    ],
  },
  condition: {
    tabFlag: 'ALL',
    searchFrom: 0,
    searchId: '',
    informDate: '',
    informDateFrom: '',
    informDateTo: '',
    accidentDate: '',
    accidentDateFrom: '',
    accidentDateTo: '',
    accidentIssueStatus: [],
    createdBy: '',
    updatedBy: '',
    // filterFlag: 'S',
  },
};

// * -- History AccidentIssueLog --

export interface FilterHistoryAccidentIssueLog {
  pagination: Pagination;
  operation?: string;
  fieldName?: string;
  accidentIssueId: number;
}

export const filterHistory: FilterHistoryAccidentIssueLog = {
  accidentIssueId: 0,
  pagination: {
    pageNumber: 0,
    pageSize: 10,
    orders: [
      {
        direction: 'DESC',
        property: 'createdDate',
      },
    ],
  },
};

export interface AccidentIssueLogHistoryItem {
  accidentIssueLogId: number;
  fieldName: string;
  before: string;
  after: string;
  createdDate: string;
  createdBy: string;
}

export interface HistoryAccidentIssueLog {
  loading: boolean;
  loadData: boolean;
  listHistory: AccidentIssueLogHistoryItem[];
  filterHistory: FilterHistoryAccidentIssueLog;
  currentPage: number;
  totalElements: number;
}

export const historyAccidentIssueLog: HistoryAccidentIssueLog = {
  loading: false,
  loadData: true,
  listHistory: [],
  filterHistory,
  currentPage: 0,
  totalElements: 0,
};

// * -- Item --
export interface ItemList {
  accidentIssueCode: string;
  ecpsCode: string | null;
  employeeCitizenId: string;
  employeeTtileName: string;
  employeeFirstName: string;
  employeeLastName: string;
  accidentDate: string;
  informDate: string;
  createdBy: string;
  createdDate: string;
  updatedBy: string;
  updatedDate: string;
  accidentIssueStatus: string;
  accidentIssueStatusDesc: StatusIndicatorType;
  draft: string;
  informalFlag: string;
  informalAccidentIssueCode: string | null;
}

// * -- Form --
export interface ItemById {
  title: string;
}

export interface DataUpdateAccidentIssue {
  email: string;
}

export interface ItemAccidentIssueForm {
  accountNo: string;
  accidentCaus: string;

  genderText: string;
  branchNo: string;
  employeeCitizenId: string;
  employeeTitle: string;
  employeefirstName: string;
  employeelastName: string;
  gender: string;
  employeehouseNum: string;
  employeeRoad: string;
  EmployeeSoi: string;
  employeeTambol: string;
  employeeAmphur: string;
  employeeProvince: string;
  employeePostcode: string;
  employeeMoo: string;
  employeeTelephone: string;
  employeeMobile: string;
  employeeeMail: string;
  employeecurrentPosition: string;
  firstemploymentDate: string;
  startworkingTime: string;
  Finishworkingtime: string;
  Workingdayperweek: string;
  wageType: string;
  averageWage: string;
  otherIncome: string;
  accidentCause: string;
  accidentCauseText: string;
  accidentCase: string;
  accidentInjury: string;
  accidentInjuryText: string;
  accidentPlace: string;
  accidentHouseNum: string;
  accidentMoo: string;
  accidentRoad: string;
  accidentSoi: string;
  accidentTambol: string;
  accidentAmphur: string;
  accidentProvince: string;
  accidentPostcode: string;
  accidentCountry: string;
  accidentDate: string;
  accidentTime: string;
  accidentRemark: string;
  witnessTitle: string;
  witnessFirstName: string;
  witnessLastName: string;
  witnessHouseNum: string;
  witnessMoo: string;
  witnessRoad: string;
  witnessSoi: string;
  witnessTambol: string;
  witnessAmphur: string;
  witnessProvince: string;
  witnessPostcode: string;
  witnessTelephone: string;
  witnessMobile: string;
  witnessEmail: string;
  Companyacknowledgeddate: string;
  startsuspensedworkingDate: string;
  backtoworkDate: string;
  hospitalRight: string;
  hospitaladmissionpatientNo: string;
  patientNo: string;
  patientAn: string;
  informDate: string;
  severityCode: string;
  createdBy: string;
  employeeAge: string;
  accidentOrganSubGroup: string;
  fromWorkCauseCode: string;
  branceCode: string;
  foreignerFlag: string;
  positionCode: string;
  nationCode: string;
  businessGroupCode: string;
  tsicCode: string;
  companyTelephone: string;
  companyEmail: string;
  companyEmployeeNo: string;
  CompanyType: string;
  employeebirthDate: string;
  companyHouseNum: string;
  companyMoo: string;
  companyRoad: string;
  companySoi: string;
  companyTambol: string;
  companyAmphur: string;
  companyProvince: string;
  companyPostcode: string;
  specialCaseId: string;
  days: string;
  amount: string;
  microxAccidentAddress: string;
  branchAgreeDate: string;
  microxAccidentOrganSubGroup: string;
  microxAccidentCause: string;
  isDuplicate: string;
  isConfirmSpecialCase: string;
  isManual: string;
  accidentIssueCodeCompare: string;
  mixFlag: string;
  empNum: string;
  updFlg: string;
  accidentIssueCodeBack: string;
  informalAccidentIssueCode: string;
  InformalFlag: string;
  emcoCode: string;
  ecpsCode: string;
  ecpsInformDay: string;
  accidentLatLong: string;
  sendDocumentPlace: string;
  sendDocumentNum: string;
  sendDocumentMoo: string;
  sendDocumentRoad: string;
  sendDocumentSoi: string;
  sendDocumentTambol: string;
  sendDocumentAmphur: string;
  sendDocumentProvince: string;
  sendDocumentPostcode: string;
  sendDocumentTelephone: string;
  sendDocumentMobile: string;
  sendDocumentEmail: string;
  investigatedLogCode: string;
  hospitalWcfCode: string;
  startDate: string;
  endDate: string;
  ishave44: string;
  hospitalCategory: string;
  vnAn: string;
  txthospitalName: string;
  txtstartDate: string;
  txtVnAn: string;
  txtIshave44: string;
  txtHospitalcategory: string;
  companyAuthorizedSign1: string;
  companyAuthorizedSign2: string;
  companyAuthorizedSign3: string;
  updateBy: string;
  useAccidentAddress: string;
  useCompanyAddress: string;
  CustomAddress: string;
  TxttsicDesc: string;
  TxtbusinessGroupDsc: string;
  Txtfromworkcausecode: string;
  Documentmaster: string;
  DocumentOrder: string;
  documentName: string;
  fileName: string;
  createdDate: string;
  updatedDate: string;
  breatedBy: string;
  checkListDocument: string;
  telephoneNo: string;
  companyMobile: string;
  hospitalInformation: HospitalInformation[];
}

interface HospitalInformation {
  first: string;
}
export const item: ItemAccidentIssueForm = {
  hospitalInformation: [{ first: '' }],
  genderText: '',
  branchNo: '',
  accountNo: '',
  accidentCaus: '',
  employeeCitizenId: '',
  employeeTitle: '',
  employeefirstName: '',
  employeelastName: '',
  gender: '',
  employeehouseNum: '',
  employeeRoad: '',
  EmployeeSoi: '',
  employeeTambol: '',
  employeeAmphur: '',
  employeeProvince: '',
  employeePostcode: '',
  employeeMoo: '',
  employeeTelephone: '',
  employeeMobile: '',
  employeeeMail: '',
  employeecurrentPosition: '',
  firstemploymentDate: '',
  startworkingTime: '',
  Finishworkingtime: '',
  Workingdayperweek: '',
  wageType: '',
  averageWage: '',
  otherIncome: '',
  accidentCause: '',
  accidentCauseText: '',
  accidentCase: '',
  accidentInjury: '',
  accidentInjuryText: '',
  accidentPlace: '',
  accidentHouseNum: '',
  accidentMoo: '',
  accidentRoad: '',
  accidentSoi: '',
  accidentTambol: '',
  accidentAmphur: '',
  accidentProvince: '',
  accidentPostcode: '',
  accidentCountry: '',
  accidentDate: '',
  accidentTime: '',
  accidentRemark: '',
  witnessTitle: '',
  witnessFirstName: '',
  witnessLastName: '',
  witnessHouseNum: '',
  witnessMoo: '',
  witnessRoad: '',
  witnessSoi: '',
  witnessTambol: '',
  witnessAmphur: '',
  witnessProvince: '',
  witnessPostcode: '',
  witnessTelephone: '',
  witnessMobile: '',
  witnessEmail: '',
  Companyacknowledgeddate: '',
  startsuspensedworkingDate: '',
  backtoworkDate: '',
  hospitalRight: '',
  hospitaladmissionpatientNo: '',
  patientNo: '',
  patientAn: '',
  informDate: '',
  severityCode: '',
  createdBy: '',
  employeeAge: '',
  accidentOrganSubGroup: '',
  fromWorkCauseCode: '',
  branceCode: '',
  foreignerFlag: '',
  positionCode: '',
  nationCode: '',
  businessGroupCode: '',
  tsicCode: '',
  companyTelephone: '',
  companyEmail: '',
  companyEmployeeNo: '',
  CompanyType: '',
  employeebirthDate: '',
  companyHouseNum: '',
  companyMoo: '',
  companyRoad: '',
  companySoi: '',
  companyTambol: '',
  companyAmphur: '',
  companyProvince: '',
  companyPostcode: '',
  specialCaseId: '',
  days: '',
  amount: '',
  microxAccidentAddress: '',
  branchAgreeDate: '',
  microxAccidentOrganSubGroup: '',
  microxAccidentCause: '',
  isDuplicate: '',
  isConfirmSpecialCase: '',
  isManual: '',
  accidentIssueCodeCompare: '',
  mixFlag: '',
  empNum: '',
  updFlg: '',
  accidentIssueCodeBack: '',
  informalAccidentIssueCode: '',
  InformalFlag: '',
  emcoCode: '',
  ecpsCode: '',
  ecpsInformDay: '',
  accidentLatLong: '',
  sendDocumentPlace: '',
  sendDocumentNum: '',
  sendDocumentMoo: '',
  sendDocumentRoad: '',
  sendDocumentSoi: '',
  sendDocumentTambol: '',
  sendDocumentAmphur: '',
  sendDocumentProvince: '',
  sendDocumentPostcode: '',
  sendDocumentTelephone: '',
  sendDocumentMobile: '',
  sendDocumentEmail: '',
  investigatedLogCode: '',
  hospitalWcfCode: '',
  startDate: '',
  endDate: '',
  ishave44: '',
  hospitalCategory: '',
  vnAn: '',
  txthospitalName: '',
  txtstartDate: '',
  txtVnAn: '',
  txtIshave44: '',
  txtHospitalcategory: '',
  companyAuthorizedSign1: '',
  companyAuthorizedSign2: '',
  companyAuthorizedSign3: '',
  updateBy: '',
  useAccidentAddress: '',
  useCompanyAddress: '',
  CustomAddress: '',
  TxttsicDesc: '',
  TxtbusinessGroupDsc: '',
  Txtfromworkcausecode: '',
  Documentmaster: '',
  DocumentOrder: '',
  documentName: '',
  fileName: '',
  createdDate: '',
  updatedDate: '',
  breatedBy: '',
  checkListDocument: '',
  telephoneNo: '',
  companyMobile: '',
};

export interface Form extends FormDefault {
  accidentIssueId: number;
  item: ItemAccidentIssueForm;
}

export const form: Form = {
  accidentIssueId: 0,
  type: 'add',
  loading: false,
  item,
};

// * -- Initial State --

export interface StateProp extends InitialStateDefault {
  firstLoading: boolean;
  list: ItemList[];
  form: Form;
  totalElements: number;
  filter: FilterSearch;
  historyAccidentIssueLog: HistoryAccidentIssueLog;
}

export const initialState: StateProp = {
  firstLoading: true,
  loading: false,
  loadData: false,
  form,
  list: [],
  totalElements: 0,
  filter,
  historyAccidentIssueLog,
};
