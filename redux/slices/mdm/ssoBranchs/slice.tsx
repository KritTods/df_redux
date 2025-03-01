import { createSlice } from '@reduxjs/toolkit';
import { BaseToastNotification } from 'wcf-component-lib/src/components';
import { RootState } from '@/redux/store';
import { TEXT } from 'wcf-component-lib/src/constants/message';
import { FilterHistorySsoBranchLog, FilterSearch, Form, initialState, sliceName, StateProp } from './types';
import { getSsoBranchsList, getById, addSsoBranchs, updateSsoBranchs, getSsoBranchLogHistory , getSsoBranchsListByssoBranchTypeId } from './thunks';
import { Pagination } from 'wcf-component-lib/src/constants/interface';

const ssoBranchsSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    cleanUp: () => initialState,
    setFilterSsoBranch: (state, action) => {
      state.filter = { ...state.filter, ...action.payload } as FilterSearch;
      state.loadData = true;
    },

    setFilter: (state, action) => {
      state.filter = action.payload as FilterSearch;
    },
    resetForm: (state) => {
      state.form = initialState.form;
    },
    setForm: (state, action) => {
      state.form = { ...state.form, ...action.payload } as Form;
    },
    setPaginationHistory: (state, action) => {
      const pagination = {
        ...state.historySsoBranchLog.filterHistory.pagination,
        ...action.payload,
      } as Pagination;

      const newState = {
        ...state,
        historySsoBranchLog: {
          ...state.historySsoBranchLog,
          loadData: true,
          filterHistory: {
            ...state.historySsoBranchLog.filterHistory,
            pagination,
          },
        },
      };

      return newState;
    },
    setFilterHistory: (state, action) => {
      state.historySsoBranchLog.filterHistory = {
        ...state.historySsoBranchLog.filterHistory,
        ...action.payload,
      } as FilterHistorySsoBranchLog;
      state.historySsoBranchLog.loadData = true;
    },
  },
  extraReducers(builder) {
    // * getSsoBranchsList
    builder.addCase(getSsoBranchsList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
    });
    builder.addCase(getSsoBranchsList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
    });
    builder.addCase(getSsoBranchsList.rejected, (state) => {
      state.loading = false;
    });
    //getSsoBranchsListByssoBranchTypeId
    builder.addCase(getSsoBranchsListByssoBranchTypeId.pending, (state) => {
      state.loading = true;
      state.loadData = false;
    });
    builder.addCase(getSsoBranchsListByssoBranchTypeId.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    });
    builder.addCase(getSsoBranchsListByssoBranchTypeId.rejected, (state) => {
      state.loading = false;
    });
    // * getById
    builder.addCase(getById.pending, (state) => {
      state.form.loading = true;
    });
    builder.addCase(getById.fulfilled, (state, action) => {
      state.form.loading = false;
      state.form.item = action.payload as Form['item'];
    });
    builder.addCase(getById.rejected, (state) => {
      state.form.loading = false;
    });
    // * addSsoBranchs
    builder.addCase(addSsoBranchs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addSsoBranchs.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'create',
        type: 'success',
        description: TEXT.add.success,
      });
    });
    builder.addCase(addSsoBranchs.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key: 'create',
        type: 'error',
        description: TEXT.add.error,
      });
    });
    // * updateSsoBranchs
    builder.addCase(updateSsoBranchs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateSsoBranchs.fulfilled, (state) => {
      state.loading = false;
      state.loadData = true;
      BaseToastNotification({
        key: 'update',
        type: 'success',
        description: TEXT.edit.success,
      });
    });
    builder.addCase(updateSsoBranchs.rejected, (state) => {
      state.loading = false;
      BaseToastNotification({
        key: 'update',
        type: 'error',
        description: TEXT.edit.error,
      });
    });
    // * getSsoBranchLogHistory
    builder.addCase(getSsoBranchLogHistory.pending, (state, action) => {
      state.historySsoBranchLog.loading = true;
      state.historySsoBranchLog.loadData = false;
      state.historySsoBranchLog.listHistory = [];
      state.historySsoBranchLog.totalElements = 0;
      state.historySsoBranchLog.filterHistory.ssoBranchId = action.meta.arg.ssoBranchId;
    });
    builder.addCase(getSsoBranchLogHistory.fulfilled, (state, action) => {
      state.historySsoBranchLog.loading = false;
      state.historySsoBranchLog.listHistory = action.payload.content;
      state.historySsoBranchLog.totalElements = action.payload.totalElements;
    });
    builder.addCase(getSsoBranchLogHistory.rejected, (state) => {
      state.historySsoBranchLog.loading = false;
    });
  },
});

export const { cleanUp, setFilterSsoBranch, setFilter, resetForm, setForm, setPaginationHistory, setFilterHistory } =
  ssoBranchsSlice.actions;
export default ssoBranchsSlice.reducer;
export const ssoBranchsSelector = (state: RootState): StateProp => state.ssoBranchsSlice;
