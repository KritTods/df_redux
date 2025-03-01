import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { sliceName, initialState, InitialState } from './types';

const diagnosisFormSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        togglePrintDocumentModal: (state) => {
            state.isOpenPrintDocumentModal = !state.isOpenPrintDocumentModal;
        },
    },
});

export const { togglePrintDocumentModal } = diagnosisFormSlice.actions;
export default diagnosisFormSlice.reducer;
export const diagnosisFormSelector = (state: RootState): InitialState => state.diagnosisFormSlice;
