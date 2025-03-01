import { InitialStateDefault } from 'wcf-component-lib/src/constants/interface';

export const sliceName = 'modules';

// * -- Item --
export interface ModuleItem {
  moduleId: number;
  code: string;
  name: string;
  description: string;
  moduleOrder: number;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export interface ItemCreate {
  code: string;
  name: string;
  description: string;
  moduleOrder?: number;
}

export interface ItemUpdate {
  moduleId: number;
  code: string;
  name: string;
  description: string;
  moduleOrder?: number;
}

export interface ModalModule {
  isOpen: boolean;
  moduleId: number | null;
}

// * -- Form --
export interface ItemForm {
  moduleId?: number;
  code: string;
  name: string;
  description: string;
  moduleOrder?: number | null;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

export const itemForm: ItemForm = {
  code: '',
  name: '',
  description: '',
  moduleOrder: null,
  createdDate: '',
  createdBy: '',
  lastUpdatedDate: '',
  lastUpdatedBy: '',
};

// * -- Initial State --

export interface InitialState extends InitialStateDefault {
  list: ModuleItem[] | [];
  modal: ModalModule;
  item: ItemForm;
}

export const initialState: InitialState = {
  loading: false,
  loadData: false,
  list: [],
  item: itemForm,
  modal: {
    isOpen: false,
    moduleId: null,
  },
};
