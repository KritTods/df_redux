import { InitialStateDefault } from 'wcf-component-lib/src/constants/interface';
export const sliceName = 'ssoOfficer';

// * -- ItemByUserLogin --

export interface ItemByUserLogin {
  cn: string;
  sn: string;
  uid: string;
  accountActive: string;
  displayName: string;
  employeeType: string;
  givenName: string;
  initials: string;
  mail: string;
  mailDrop: string;
  quota: string;
  ssoBranchCode: string;
  ssoFirstName: string;
  ssoPersonBirthDate: string;
  ssoPersonCitizenId: string;
  ssoPersonClass: string;
  ssoPersonEmpDate: string;
  ssoPersonPosition: string;
  ssoSurName: string;
  title: string;
  workingDeptDescription: string;
  workingDeptNo: string;
}

export const initialItemByUserLogin: ItemByUserLogin = {
  cn: '',
  sn: '',
  uid: '',
  accountActive: '',
  displayName: '',
  employeeType: '',
  givenName: '',
  initials: '',
  mail: '',
  mailDrop: '',
  quota: '',
  ssoBranchCode: '',
  ssoFirstName: '',
  ssoPersonBirthDate: '',
  ssoPersonCitizenId: '',
  ssoPersonClass: '',
  ssoPersonEmpDate: '',
  ssoPersonPosition: '',
  ssoSurName: '',
  title: '',
  workingDeptDescription: '',
  workingDeptNo: '',
};

// * -- Initial State --

export interface StateProp extends InitialStateDefault {
  item: ItemByUserLogin;
  listByUserLogin: ItemByUserLogin[];
}

export const initialState: StateProp = {
  loading: false,
  loadData: true,
  item: initialItemByUserLogin,
  listByUserLogin: [],
};
