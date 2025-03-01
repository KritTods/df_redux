import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import reducer from './reducer';

export const store = configureStore({
  reducer,
  devTools: process.env.NEXT_PUBLIC_DEV === 'dev',
});

// create and export typed-hooks in file
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const stateAllSelector = (state: RootState): RootState => state;
