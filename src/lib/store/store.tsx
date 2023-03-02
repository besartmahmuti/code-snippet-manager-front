import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth';
import thunk from "redux-thunk";
import modalSlice from './slices/modal';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    modal: modalSlice,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
