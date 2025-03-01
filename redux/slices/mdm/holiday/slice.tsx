import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { FilterHistoryHolidayLog, FilterSearch, Form, initialState, sliceName, StateProp } from './types';
import { createHoliday, getHolidayById, getHolidayList, getHolidayLogHistory, updateHoliday } from './thunks';
import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { TEXT } from 'wcf-component-lib/src/constants/message';
import { Pagination } from 'wcf-component-lib/src/constants/interface';

const holidaySlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setPagination: (state, action) => {
      const pagination = {
        ...state.filter.pagination,
        ...action.payload,
      } as Pagination;

      const newState = {
        ...state,
        filter: {
          ...state.filter,
          pagination,
        },
        loadData: true,
      };

      return newState;
    },
    setPaginationHistory: (state, action) => {
      const pagination = {
        ...state.historyHolidayLog.filterHistory.pagination,
        ...action.payload,
      } as Pagination;

      const newState = {
        ...state,
        historyHolidayLog: {
          ...state.historyHolidayLog,
          filterHistory: {
            ...state.historyHolidayLog.filterHistory,
            pagination,
          },
          loadData: true,
        },
      };

      return newState;
    },
    setFilterHistory: (state, action) => {
      state.historyHolidayLog.filterHistory = {
        ...state.historyHolidayLog.filterHistory,
        ...action.payload,
      } as FilterHistoryHolidayLog;
      state.historyHolidayLog.loadData = true;
    },
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload } as FilterSearch;
      state.loadData = true;
    },
    resetForm: (state) => {
      state.form = initialState.form;
    },
    setForm: (state, action) => {
      state.form = { ...state.form, ...action.payload } as Form;
    },
  },
  extraReducers(builder) {
    // *getHolidayList
    builder.addCase(getHolidayList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
      state.list = [];
      state.totalElements = 0;
    });
    builder.addCase(getHolidayList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
    });
    builder.addCase(getHolidayList.rejected, (state) => {
      state.loading = false;
    });
    // *getHolidayById
    builder.addCase(getHolidayById.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(getHolidayById.fulfilled, (state, action) => {
      state.form.loading = false;
      state.form.item = action.payload;
    });
    builder.addCase(getHolidayById.rejected, (state) => {
      state.form.loading = false;
    });
    // *createHoliday
    builder.addCase(createHoliday.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(createHoliday.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(createHoliday.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    // *updateHoliday
    builder.addCase(updateHoliday.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(updateHoliday.fulfilled, (state) => {
      state.form.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updateHoliday.rejected, (state) => {
      state.form.loading = false;
      BaseToastNotification({
        key: 'update',
        type: 'error',
        description: TEXT.edit.success,
      });
    });
    // *getHolidayLogHistory
    builder.addCase(getHolidayLogHistory.pending, (state, action) => {
      state.historyHolidayLog.loading = true;
      state.historyHolidayLog.loadData = false;
      state.historyHolidayLog.listHistory = [];
      state.historyHolidayLog.totalElements = 0;
      state.historyHolidayLog.filterHistory.holidayId = action.meta.arg.holidayId;
    });
    builder.addCase(getHolidayLogHistory.fulfilled, (state, action) => {
      state.historyHolidayLog.loading = false;
      state.historyHolidayLog.listHistory = action.payload.content;
      state.historyHolidayLog.totalElements = action.payload.totalElements;
    });
    builder.addCase(getHolidayLogHistory.rejected, (state) => {
      state.historyHolidayLog.loading = false;
    });
  },
});

export const { setFilter, setForm, resetForm, setPagination, setPaginationHistory, setFilterHistory } =
  holidaySlice.actions;
export default holidaySlice.reducer;
export const holidaySelector = (state: RootState): StateProp => state.holidaySlice;
