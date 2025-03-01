import { InitialStateDefault } from 'wcf-component-lib/src/constants/interface';
export const sliceName = 'employee';

// * -- Employments --

export interface Employments {
  lastIncremental: string;
  message: string;
  status: string;
  person: Person;
  employments: Employment[];
}

interface Employment {
  accBran: string;
  accNo: string;
  branName: string;
  companyName: string;
  employResignDate: string;
  employStartDate: string;
  employStatus: string;
  employStatusDesc: string;
}

interface Person {
  activeStatus: string;
  activeStatusDesc: string;
  empBirthDate: string;
  empRegisterDate: string;
}

// * -- Initial State --

export const initialEmployments: Employments = {
  lastIncremental: '',
  message: '',
  status: '',
  person: {
    activeStatus: '',
    activeStatusDesc: '',
    empBirthDate: '',
    empRegisterDate: '',
  },
  employments: [
    {
      accBran: '',
      accNo: '',
      branName: '',
      companyName: '',
      employResignDate: '',
      employStartDate: '',
      employStatus: '',
      employStatusDesc: '',
    },
  ],
};

export interface StateProp extends InitialStateDefault {
  employments: {
    loading: boolean;
    data: Employments;
  };
}

export const initialState: StateProp = {
  loading: false,
  loadData: true,
  employments: {
    loading: true,
    data: initialEmployments,
  },
};
