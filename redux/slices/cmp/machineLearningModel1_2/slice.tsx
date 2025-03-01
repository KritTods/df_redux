import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { sliceName, initialState, MachineLearningModel1_2ModalForm1, InitialState } from './types';
import { getMachineLearningModel1_2ModalForm } from './thunks';

const machineLearningModel1_2Slice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        setMachineLearningModel1_2ModalForm1: (state, action: { payload: MachineLearningModel1_2ModalForm1 }) => {
            state.machineLearningModel1_2ModalForm1 = action.payload;
        },
    },
    extraReducers(builder) {
        // *getMachineLearningModel1_2ModalForm
        builder.addCase(getMachineLearningModel1_2ModalForm.pending, (state) => {
            state.loading = true;
            state.loadData = false;
            state.machineLearningModel1_2ModalForm1 = initialState.machineLearningModel1_2ModalForm1;
        });
        builder.addCase(getMachineLearningModel1_2ModalForm.fulfilled, (state, action) => {
            state.loading = false;
            state.loadData = true;
            state.machineLearningModel1_2ModalForm1 = action.payload;
        });
        builder.addCase(getMachineLearningModel1_2ModalForm.rejected, (state) => {
            state.loading = false;
        });
    },
});



export const { setMachineLearningModel1_2ModalForm1 } = machineLearningModel1_2Slice.actions;
export default machineLearningModel1_2Slice.reducer;
export const machineLearningModel1_2Selector = (state: RootState): InitialState => state.machineLearningModel1_2Slice;
