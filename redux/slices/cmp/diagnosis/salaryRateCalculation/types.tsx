import { InitialStateDefault } from 'wcf-component-lib/src/constants/interface';

export const sliceName = 'salaryRateCalculation';

export interface SalaryCalculationForm {
    wageType: number | string;
    workingDayPerWeek: number | string;
    amount: number | string;
    totalAmount?: number | string;
    accidentIssueDate?: string;
    employeeProvince?: string;
}

const salaryCalculationForm: SalaryCalculationForm = {
    wageType: 0,
    workingDayPerWeek: 0,
    amount: 0,
    totalAmount: 0,
    accidentIssueDate: '',
    employeeProvince: '',
};

export interface Province {
    value: string;
    label: string;
}

export const province: Province[] = [
    {
        label: '',
        value: '',
    }
];

export interface SalaryCalculationInitailState extends InitialStateDefault {
    isOpenModal: boolean;
    salaryCalculationForm: SalaryCalculationForm;
    provinces: Province[];
}

export const initialState: SalaryCalculationInitailState = {
    loading: false,
    loadData: false,
    isOpenModal: false,
    salaryCalculationForm: salaryCalculationForm,
    provinces: province,
};
