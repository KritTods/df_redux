import { FormDefault, InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
import { pagination } from 'wcf-component-lib/src/constants/initialValue';

export const sliceName = 'diagnosis';


// mock
export interface DigosisFormItem {
    accountNo: string;
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

export const item: DigosisFormItem = {
    hospitalInformation: [{ first: '' }],
    accountNo: '',
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
    dignosisId: number;
    item: DigosisFormItem;
}

export interface FilterSearch {
    pagination: Pagination;
    search?: string;
    type?: string | null;
    date?: string;
}

export const filter: FilterSearch = {
    pagination,
    search: '',
    type: null,
    date: '',
};


export interface HistoryDignosisLog {
    loading: boolean;
    loadData: boolean;
    listHistory: DiagnosisLogHistoryItem[];
    filterHistory: FilterHistoryDiagnosisLog;
    currentPage: number;
    totalElements: number;
}

export interface FilterHistoryDiagnosisLog {
    pagination: Pagination;
    operation?: string;
    fieldName?: string;
    diagnosisId: number;
}

export interface DiagnosisLogHistoryItem {
    diagnosisLogId: number;
    fieldName: string;
    before: string;
    after: string;
    createdDate: string;
    createdBy: string;
}

export interface ItemList {
    recordNo: number;
    accidentIssueId: string;
    accidentIssueCode: string;
    employeeCitizenId: string;
    employeeTtileName: string;
    employeeFirstName: string;
    employeeLastName: string;
    accidentDate: string;
    informDate: string;
    updatedDate: string;
    createdBy: string;
    createdDate: string;
    updatedBy: string;
    accidentIssueStatus: string
    accidentIssueStatusDesc: string;
    draft: string;
    informalFlag: string;
    informalAccidentIssueCode: string;
}

export const filterHistory: FilterHistoryDiagnosisLog = {
    diagnosisId: 0,
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


export const historyDignosisLog: HistoryDignosisLog = {
    loading: false,
    loadData: true,
    listHistory: [],
    filterHistory,
    currentPage: 0,
    totalElements: 0,
};

export const form: Form = {
    dignosisId: 0,
    type: 'add',
    loading: false,
    item,
};

export interface DataUpdateDiagnosis {
    email: string;
}


export interface StateProp extends InitialStateDefault {
    list: ItemList[];
    form: Form;
    totalElements: number;
    filter: FilterSearch;
    historyDignosisLog: HistoryDignosisLog;
}

export const initialState: StateProp = {
    loading: false,
    loadData: true,
    form,
    list: [],
    totalElements: 0,
    filter,
    historyDignosisLog,
};
