import { FormDefault, InitialStateDefault } from 'wcf-component-lib/src/constants/interface';

export const sliceName = 'userGroupPrivileges';

export interface ItemList {
  module: Module;
  pages: Page[];
}

export interface Module {
  code: string;
  name: string;
}

export interface Page {
  pageCode: string;
  pageName: string;
  pageLevel: number;
  pageLevelId: number;
}

export interface ItemForm {
  moduleId: number | null;
  pageId: number | null;
  pageLevel: number | null;
  code: string;
}

export interface Form extends FormDefault {
  item: ItemForm;
}

export interface InitialState extends InitialStateDefault {
  list: ItemList[];
  form: Form;
}

// ? -------- initialValue --------

export const item: ItemForm = {
  moduleId: null,
  pageId: null,
  pageLevel: null,
  code: '',
};

export const initialForm: Form = {
  type: 'add',
  loading: false,
  item: item,
};

export const initialState: InitialState = {
  loading: false,
  loadData: false,
  form: initialForm,
  list: [],
};
