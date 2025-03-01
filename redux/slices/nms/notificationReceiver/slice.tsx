import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { FilterSearch, FormReceiver, initialState, ModalReceiver, sliceName, StateProp, ItemList } from './types';
import { getNotificationReceiverList } from './thunks';

const notificationReceiverSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    cleanUp: () => initialState,
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload } as FilterSearch;
      state.loadData = true;
    },
    resetForm: (state) => {
      state.form = initialState.form;
    },
    setForm: (state, action) => {
      state.form = { ...state.form, ...action.payload } as FormReceiver;
    },
    setSelected: (state, action) => {
      state.selected = action.payload as [];
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload as number;
      state.loadData = true;
    },
    toggleModal: (state, action: { payload: ModalReceiver }) => {
      if (action.payload.isOpen) {
        state.modal = {
          isOpen: true,
          type: action.payload.type,
        };
      } else {
        state.modal = {
          isOpen: false,
          type: '',
        };
      }
    },
    setList: (state, action) => {
      state.list = action.payload as ItemList[];
    },
    resetList: (state) => {
      state.list = [];
    },
  },

  extraReducers(builder) {
    // * getNotificationReceiverList
    builder.addCase(getNotificationReceiverList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
      state.list = [];
      state.totalElements = 0;
    });
    builder.addCase(getNotificationReceiverList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
      state.currentPage = action.payload.number;
    });
    builder.addCase(getNotificationReceiverList.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { cleanUp, setFilter, resetForm, setForm, setSelected, toggleModal, setList, resetList } =
  notificationReceiverSlice.actions;
export default notificationReceiverSlice.reducer;
export const notificationReceiverSelector = (state: RootState): StateProp => state.notificationReceiverSlice;
