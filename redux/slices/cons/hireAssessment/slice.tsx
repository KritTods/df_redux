import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import {
  FilterSearch,
  Form,
  initialState,
  sliceName,
  StateProp,
  ModalHireAssessmentJob,
  contributionDetail,
} from './types';
import { getJobList, getContributionJob, getExcelSuccess, jobDelete, getExcelFail } from './thunks';
import { message } from 'wcf-component-lib/node_modules/antd';
import { TEXT } from 'wcf-component-lib/src/constants/message';

const hireAssessmentSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
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
    toggleModal: (state, action: { payload: ModalHireAssessmentJob }) => {
      if (action.payload.isOpen) {
        state.modal = {
          isOpen: true,
          contributionJobId: action.payload.contributionJobId,
          ssoBranchCode: action.payload.ssoBranchCode,
          contributionJobCode: action.payload.contributionJobCode,
        };
      } else {
        state.modal = {
          isOpen: false,
          contributionJobId: 0,
          ssoBranchCode: 0,
          contributionJobCode: '',
        };
      }
    },
  },
  extraReducers(builder) {
    // *getJobList
    builder.addCase(getJobList.pending, (state) => {
      state.loading = true;
      state.loadData = false;
      state.list = [];
    });
    builder.addCase(getJobList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.content;
      state.totalElements = action.payload.totalElements;
    });
    builder.addCase(getJobList.rejected, (state) => {
      state.loading = false;
    });
    // *jobDelete
    builder.addCase(jobDelete.pending, (state) => {
      state.loading = true;
      state.loadData = false;
    });
    builder.addCase(jobDelete.fulfilled, (state) => {
      state.loading = false;
      void message.success(TEXT.delete.success);
    });
    builder.addCase(jobDelete.rejected, (state) => {
      state.loading = false;
      void message.error(TEXT.delete.error);
    });
    // *getContributionJob
    builder.addCase(getContributionJob.pending, (state) => {
      state.loading = true;
      state.loadData = false;
      state.contributionJoblist = [];
      state.contributionDetail = contributionDetail;
    });
    builder.addCase(getContributionJob.fulfilled, (state, action) => {
      state.loading = false;
      state.contributionJoblist = action.payload.details;
      state.contributionDetail = action.payload.hireAssessment;
    });
    builder.addCase(getContributionJob.rejected, (state) => {
      state.loading = false;
      state.contributionJoblist = [];
    });
    //*download-excel-success
    builder.addCase(getExcelSuccess.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getExcelSuccess.fulfilled, (state) => {
      state.loading = false;

      void message.success(TEXT.get.success);
    });
    builder.addCase(getExcelSuccess.rejected, (state) => {
      state.loading = false;
      void message.error(TEXT.get.error);
    });
    //*download-excel-fails
    builder.addCase(getExcelFail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getExcelFail.fulfilled, (state) => {
      state.loading = false;

      void message.success(TEXT.get.success);
    });
    builder.addCase(getExcelFail.rejected, (state) => {
      state.loading = false;
      void message.error(TEXT.get.error);
    });
  },
});

export const { setFilter, setForm, resetForm, toggleModal } = hireAssessmentSlice.actions;
export default hireAssessmentSlice.reducer;
export const hireAssessmentSelector = (state: RootState): StateProp => state.hireAssessmentSlice;
