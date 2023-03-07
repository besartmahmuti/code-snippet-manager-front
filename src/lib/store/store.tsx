import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth';
import thunk from "redux-thunk";
import modalSlice from './slices/modal';
import  alertSlice  from './slices/alert';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    modal: modalSlice,
    alert: alertSlice
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
