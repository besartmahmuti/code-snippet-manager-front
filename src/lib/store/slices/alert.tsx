import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import { AlertTypes } from "../../types";

const initialState: { value: AlertTypes  } = {
  value: {
    state: false,
    title: '', 
    content: '',
    type: ''
  },
};
const persistConfig = {
  key: 'alert',
  storage,
}
export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    updateAlertContent: (state, actions: PayloadAction<AlertTypes>) => {
     
      state.value = { ...actions.payload, state: actions.payload.state }
    },
    updateAlertState: (state, actions: PayloadAction<boolean>) => {
      state.value.state = actions.payload
    }
  },
});

export const { updateAlertContent, updateAlertState } = alertSlice.actions;
export default persistReducer(persistConfig, alertSlice.reducer) 