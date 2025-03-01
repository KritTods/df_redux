import { createSlice } from '@reduxjs/toolkit';
import { message } from 'wcf-component-lib/node_modules/antd';
import { RootState } from '@/redux/store';
import { FilterHistoryAccidentIssueLog, FilterSearch, Form, StateProp, initialState, sliceName } from './types';
import { getAccidentIssueList, getAccidentIssueById, updateAccidentIssue, getAccidentIssueLogHistory } from './thunks';
import { TEXT } from 'wcf-component-lib/src/constants/message';
import { Pagination } from 'wcf-component-lib/src/constants/interface';

const accidentIssueSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setFilterAccidentIssue: (state, action) => {
      state.filter = { ...state.filter, ...action.payload } as FilterSearch;
      state.loadData = true;
      state.firstLoading = false;
    },
    resetForm: (state) => {
      state.form = initialState.form;
    },
    setForm: (state, action) => {
      state.form = { ...state.form, ...action.payload } as Form;
    },
    setPaginationHistory: (state, action) => {
      const pagination = {
        ...state.historyAccidentIssueLog.filterHistory.pagination,
        ...action.payload,
      } as Pagination;

      const newState = {
        ...state,
        historyAccidentIssueLog: {
          ...state.historyAccidentIssueLog,
          loadData: true,
          filterHistory: {
            ...state.historyAccidentIssueLog.filterHistory,
            pagination,
          },
        },
      };

      return newState;
    },
    setFilterHistory: (state, action) => {
      state.historyAccidentIssueLog.filterHistory = {
        ...state.historyAccidentIssueLog.filterHistory,
        ...action.payload,
      } as FilterHistoryAccidentIssueLog;
      state.historyAccidentIssueLog.loadData = true;
    },
  },
  extraReducers(builder) {
    // *getAccidentIssueList
    builder.addCase(getAccidentIssueList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
    });
    builder.addCase(getAccidentIssueList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
    });
    builder.addCase(getAccidentIssueList.rejected, (state) => {
      state.loading = false;
    });
    // *getAccidentIssueById
    builder.addCase(getAccidentIssueById.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(getAccidentIssueById.fulfilled, (state, action) => {
      state.form.loading = false;
      state.form.item = action.payload;
    });
    builder.addCase(getAccidentIssueById.rejected, (state) => {
      state.form.loading = false;
    });
    // *updateAccidentIssue
    builder.addCase(updateAccidentIssue.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateAccidentIssue.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      void message.success(TEXT.edit.success);
    });
    builder.addCase(updateAccidentIssue.rejected, (state) => {
      state.loading = false;
    });
    // *getAccidentIssueLogHistory
    builder.addCase(getAccidentIssueLogHistory.pending, (state, action) => {
      state.historyAccidentIssueLog.loading = true;
      state.historyAccidentIssueLog.loadData = false;
      state.historyAccidentIssueLog.listHistory = [];
      state.historyAccidentIssueLog.totalElements = 0;
      state.historyAccidentIssueLog.filterHistory.accidentIssueId = action.meta.arg.accidentIssueId;
    });
    builder.addCase(getAccidentIssueLogHistory.fulfilled, (state, action) => {
      state.historyAccidentIssueLog.loading = false;
      state.historyAccidentIssueLog.listHistory = action.payload.content;
      state.historyAccidentIssueLog.totalElements = action.payload.totalElements;
    });
    builder.addCase(getAccidentIssueLogHistory.rejected, (state) => {
      state.historyAccidentIssueLog.loading = false;
    });
  },
});

export const { setFilterAccidentIssue, setForm, resetForm, setPaginationHistory, setFilterHistory } =
  accidentIssueSlice.actions;
export default accidentIssueSlice.reducer;
export const accidentIssueSelector = (state: RootState): StateProp => state.accidentIssueSlice;
