import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { RootState } from '@/redux/store';
import { TEXT } from 'wcf-component-lib/src/constants/message';
import { FilterHistoryUserLog, FilterSearch, Form, ItemById, StateProp, initialState, sliceName } from './types';
import { getUserList, getUserById, updateUser, getUserLogHistory, getUserActiveContactInfoList } from './thunks';
import { Pagination } from 'wcf-component-lib/src/constants/interface';

const userSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setFilterUser: (state, action) => {
      state.filter = { ...state.filter, ...action.payload } as FilterSearch;
      state.loadData = true;
    },
    resetForm: (state) => {
      state.form = initialState.form;
    },
    setForm: (state, action) => {
      state.form = { ...state.form, ...action.payload } as Form;
    },
    setPaginationHistory: (state, action) => {
      const pagination = {
        ...state.historyUserLog.filterHistory.pagination,
        ...action.payload,
      } as Pagination;

      const newState = {
        ...state,
        historyUserLog: {
          ...state.historyUserLog,
          loadData: true,
          filterHistory: {
            ...state.historyUserLog.filterHistory,
            pagination,
          },
        },
      };

      return newState;
    },
    setFilterHistory: (state, action) => {
      state.historyUserLog.filterHistory = {
        ...state.historyUserLog.filterHistory,
        ...action.payload,
      } as FilterHistoryUserLog;
      state.historyUserLog.loadData = true;
    },
    resetContactInfo: (state) => {
      state.contactInfo = initialState.contactInfo;
    },
  },
  extraReducers(builder) {
    // *getUserList
    builder.addCase(getUserList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
    });
    builder.addCase(getUserList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
    });
    builder.addCase(getUserList.rejected, (state) => {
      state.loading = false;
    });
    // *getUserById
    builder.addCase(getUserById.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(getUserById.fulfilled, (state, action: PayloadAction<unknown>) => {
      state.form.loading = false;
      state.form.item = action.payload as ItemById;
    });
    builder.addCase(getUserById.rejected, (state) => {
      state.form.loading = false;
    });
    // *updateUser
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key : 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updateUser.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key : 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
    // *getUserLogHistory
    builder.addCase(getUserLogHistory.pending, (state, action) => {
      state.historyUserLog.loading = true;
      state.historyUserLog.loadData = false;
      state.historyUserLog.filterHistory.userId = action.meta.arg.userId;
    });
    builder.addCase(getUserLogHistory.fulfilled, (state, action) => {
      state.historyUserLog.loading = false;
      state.historyUserLog.listHistory = action.payload.content;
      state.historyUserLog.totalElements = action.payload.totalElements;
    });
    builder.addCase(getUserLogHistory.rejected, (state) => {
      state.historyUserLog.loading = false;
    });
     // *getUserActiveContactInfoList
     builder.addCase(getUserActiveContactInfoList.pending, (state) => {
      state.contactInfo.loading = true;
      state.contactInfo.loadData = false;
    });
    builder.addCase(getUserActiveContactInfoList.fulfilled, (state, action) => {
      state.contactInfo.loading = false;
      state.contactInfo.list = action.payload;
    });
    builder.addCase(getUserActiveContactInfoList.rejected, (state) => {
      state.contactInfo.loading = false;
    });
  },
});

export const { setFilterUser, setForm, resetForm, setPaginationHistory, setFilterHistory , resetContactInfo } = userSlice.actions;
export default userSlice.reducer;
export const userSelector = (state: RootState): StateProp => state.userSlice;
