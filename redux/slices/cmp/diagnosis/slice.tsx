import { createSlice } from '@reduxjs/toolkit';
// import { message } from 'wcf-component-lib/node_modules/antd';
import { RootState } from '@/redux/store';
// import { TEXT } from 'wcf-component-lib/src/constants/message';
import { Pagination } from 'wcf-component-lib/src/constants/interface';
import { FilterHistoryDiagnosisLog, FilterSearch, Form, StateProp, initialState, sliceName } from './types';
import { getDiagnosisList } from './thunks';



const diagnosisSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        setFilterDiagnosis: (state, action) => {
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
                ...state.historyDignosisLog.filterHistory.pagination,
                ...action.payload,
            } as Pagination;

            const newState = {
                ...state,
                historyDignosisLog: {
                    ...state.historyDignosisLog,
                    loadData: true,
                    filterHistory: {
                        ...state.historyDignosisLog.filterHistory,
                        pagination,
                    },
                },
            };

            return newState;
        },
        setFilterHistory: (state, action) => {
            state.historyDignosisLog.filterHistory = {
                ...state.historyDignosisLog.filterHistory,
                ...action.payload,
            } as FilterHistoryDiagnosisLog;
            state.historyDignosisLog.loadData = true;
        },
    },
    extraReducers(builder) {
        builder.addCase(getDiagnosisList.pending, (state) => {
            state.loading = true;
            state.loadData = false;
        });
        builder.addCase(getDiagnosisList.fulfilled, (state, action) => {
            state.loading = false;
            state.list = action.payload.content;
            state.totalElements = action.payload.totalElements;
        });
        builder.addCase(getDiagnosisList.rejected, (state) => {
            state.loading = false;
        });
    }
});

export const { setFilterDiagnosis, setForm, resetForm, setPaginationHistory, setFilterHistory } =
    diagnosisSlice.actions;
export default diagnosisSlice.reducer;
export const diagnosisSelector = (state: RootState): StateProp => state.diagnosisSlice;
