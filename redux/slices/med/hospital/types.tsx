import { pagination } from 'wcf-component-lib/src/constants/initialValue';
import { InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';
export const sliceName = 'med-hospital';

// * -- Hospital --

export interface Hospital {
  createdDate: string;
  createdBy: string;
  updatedDate: string;
  updatedBy: string;
  isActive: string;
  uuid: string;
  hospitalWcfCode: string;
  hospitalDbmsCode: string;
  hospitalMinistryCode: string;
  oldHospitalName: string;
  belongTo: string;
  numberOfBed: number;
  bps: number;
  hospitalType: string;
  hospitalCategory: string;
  hospitalName: string;
  revenueRegistrationCode: string;
  contractStartDate: string;
  contractEndDate: string;
  sp7StartDated: string;
  sp7EndDate: string;
  sp19StartDate: string;
  sp19EndDate: string;
  levelChangeDate: string;
  address: string;
  amphurCode: string;
  provinceCode: string;
  postalCode: string;
  telephoneNumber: string;
  faxNumber: string;
  ssoPartner: string;
  tempColumn2: string;
  tempColumn3: string;
  tempColumn4: string;
  tempColumn5: string;
  hospitalChangeNameDate: string;
  hospitalListBoi: string;
  hospitalListBoiStartDate: string;
  hospitalListBoiExpireDate: string;
  tambolCode: string;
  remarkChangeName: string;
  ssoProject: string;
  latitude: number;
  longitude: number;
  email: string;
  hospitalSp7: HospitalSp7[] | [];
  hospitalSp19: HospitalSp19[] | [];
  hospitalEtcFiles: HospitalEtcFile[] | [];
  hospitalAnnouncedPriceFiles: HospitalAnnouncedPriceFile[] | [];
  hospitalStaffContact: HospitalStaffContact[] | [];
}

interface HospitalStaffContact {
  createdDate: string;
  createdBy: string;
  updatedDate: string;
  updatedBy: string;
  isActive: string;
  uuid: string;
  firstName: string;
  lastName: string;
  position: string;
  contact: string;
}

interface HospitalAnnouncedPriceFile {
  createdDate: string;
  createdBy: string;
  updatedDate: string;
  updatedBy: string;
  isActive: string;
  uuid: string;
  fileName: string;
  announcedYear: string;
}

interface HospitalEtcFile {
  createdDate: string;
  createdBy: string;
  updatedDate: string;
  updatedBy: string;
  isActive: string;
  uuid: string;
  fileName: string;
}

interface HospitalSp19 {
  createdDate: string;
  createdBy: string;
  updatedDate: string;
  updatedBy: string;
  isActive: string;
  uuid: string;
  fileName: string;
  sp19StartDate: string;
  sp19EndDate: string;
}

interface HospitalSp7 {
  createdDate: string;
  createdBy: string;
  updatedDate: string;
  updatedBy: string;
  isActive: string;
  uuid: string;
  fileName: string;
  sp7StartDated: string;
  sp7EndDate: string;
}

// * -- FilterSearch --
export interface FilterSearch {
  pagination: Pagination;
  hospitalWcfCodeLike?: string;
  hospitalDbmsCodeLike?: string;
  hospitalMinistryCodeLike?: string;
  hospitalNameLike?: string;
  isActive?: string;
}

export const filter: FilterSearch = {
  pagination,
  hospitalWcfCodeLike: '',
  hospitalDbmsCodeLike: '',
  hospitalMinistryCodeLike: '',
  hospitalNameLike: '',
  isActive: '',
};
// * -- Initial State --

export interface StateProp extends InitialStateDefault {
  hospitalList: Hospital[] | [];
  totalElements: number;
  filter: FilterSearch;
}

export const initialState: StateProp = {
  loading: false,
  loadData: true,
  hospitalList: [],
  totalElements: 0,
  filter,
};
