import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { sliceName, SalaryCalculationInitailState, initialState, SalaryCalculationForm } from './types';
import { getSalaryRateCalculationProvince } from './thunks';



const salaryRateCalculationSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        setSalaryCalculationForm: (state, action: { payload: SalaryCalculationForm }) => {
            state.salaryCalculationForm = action.payload;
        },
        toggleModal: (state) => {
            state.isOpenModal = !state.isOpenModal;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getSalaryRateCalculationProvince.pending, (state) => {
            state.loading = true;
            state.loadData = false;
        });
        builder.addCase(getSalaryRateCalculationProvince.fulfilled, (state, action) => {
            state.loading = false;
            state.provinces = action.payload.provinces;
            state.loadData = true;
        });
        builder.addCase(getSalaryRateCalculationProvince.rejected, (state) => {
            state.loading = false;
        });
    },
});

export const { setSalaryCalculationForm, toggleModal } = salaryRateCalculationSlice.actions;
export default salaryRateCalculationSlice.reducer;
export const salaryRateCalculationSelector = (state: RootState): SalaryCalculationInitailState => state.salaryRateCalculationSlice;
