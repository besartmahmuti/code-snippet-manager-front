import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth';
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
