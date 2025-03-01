import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { sliceName, initialState, InitialState, MachineLearningSuggestion } from './types';
import { getMachineLearningSuggestion } from './thunks';

const mlSuggestionSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        setMachineLearningSuggestion: (state, action: { payload: MachineLearningSuggestion }) => {
            state.machineLearningSuggestion = action.payload;
            state.loadData = true;
        },
        setMachineLearningSuggestionSubmit: (state, action: { payload: boolean }) => {
            state.isSubmit = action.payload;
        },
        toggleModal: (state) => {
            state.isOpenModal = !state.isOpenModal;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getMachineLearningSuggestion.pending, (state) => {
            state.loading = true;
            state.loadData = false;
        });
        builder.addCase(getMachineLearningSuggestion.fulfilled, (state, action) => {
            state.loading = false;
            state.machineLearningSuggestion = action.payload.machineLearningSuggestion;
            state.loadData = true;
        });
        builder.addCase(getMachineLearningSuggestion.rejected, (state) => {
            state.loading = false;
        });
    },
});

export const { setMachineLearningSuggestion, setMachineLearningSuggestionSubmit, toggleModal } = mlSuggestionSlice.actions;
export default mlSuggestionSlice.reducer;
export const mlSuggestionSelector = (state: RootState): InitialState => state.mlSuggestionSlice;
