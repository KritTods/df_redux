import { pagination } from 'wcf-component-lib/src/constants/initialValue';
import { FormDefault, InitialStateDefault, Pagination } from 'wcf-component-lib/src/constants/interface';

export const sliceName = 'emailTemplate';

// * -- Item --
export interface ItemList {
  templateId: number;
  categoryId: number;
  subCategoryId: number;
  code: string;
  name: string;
  subject: string;
  body: string;
  createdDate: string;
  createdBy: string;
  lastUpdatedDate: string;
  lastUpdatedBy: string;
}

// * -- Filter --
export interface FilterSearch {
  categoryId: number | null;
  subCategoryId: number | null;
  pagination: Pagination;
  nameLike: string;
  subjectLike: string;
}

export const filter: FilterSearch = {
  categoryId: null,
  subCategoryId: null,
  pagination,
  nameLike: '',
  subjectLike: '',
};

export interface ItemForm {
  categoryId: number | null;
  subCategoryId: number | null;
  code: string;
  name: string;
  subject: string;
  body: string;
}

export const item: ItemForm = {
  categoryId: null,
  subCategoryId: null,
  code: '',
  name: '',
  subject: '',
  body: '',
};

export interface Form extends FormDefault {
  item: ItemForm;
  templateId: string;
  categoryId: string;
  subCategoryId: string;
}

export const form: Form = {
  type: 'add',
  loading: false,
  item,
  templateId: '',
  categoryId: '',
  subCategoryId: '',
};

export interface CategoryDetail {
  categoryName: string;
  subCategoryName: string;
}

export const categoryDetail: CategoryDetail = {
  categoryName: '',
  subCategoryName: '',
};

//Modal
export interface Modal {
  isOpen: boolean;
  data: ItemForm | null;
}
export const modal: Modal = {
  isOpen: false,
  data: item,
};

// * -- Initial State --
export interface StateProp extends InitialStateDefault {
  list: ItemList[];
  totalElements: number;
  form: Form;
  selected: number[];
  filter: FilterSearch;
  currentPage: number;
  modal: Modal;
  categoryDetail: CategoryDetail;
}

export const initialState: StateProp = {
  loading: false,
  loadData: false,
  form,
  list: [],
  totalElements: 0,
  selected: [],
  filter,
  currentPage: 0,
  modal,
  categoryDetail,
};
