import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { ItemByUserLogin, StateProp, initialState, sliceName } from './types';
import { getSsoOfficerById } from './thunks';
import { set } from 'lodash';

const ssoOfficerSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setItemByUserLogin: (state, action: PayloadAction<ItemByUserLogin>) => {
      set(state, 'item', action.payload);
    },
    setListByUserLogin: (state, action: PayloadAction<ItemByUserLogin>) => {
      state.listByUserLogin = [...state.listByUserLogin, action.payload];
    },
    resetForm: (state) => {
      state.item = initialState.item;
    },
  },
  extraReducers(builder) {
    // *getSsoOfficerById
    builder.addCase(getSsoOfficerById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSsoOfficerById.fulfilled, (state, action) => {
      state.loading = false;
      state.item = action.payload;
      state.listByUserLogin = [...state.listByUserLogin, action.payload];
    });
    builder.addCase(getSsoOfficerById.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setItemByUserLogin, setListByUserLogin , resetForm } = ssoOfficerSlice.actions;
export default ssoOfficerSlice.reducer;
export const ssoOfficerSelector = (state: RootState): StateProp => state.ssoOfficerSlice;
