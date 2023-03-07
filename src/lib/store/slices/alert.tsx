import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertTypes } from "../../types";



const initialState: { value: AlertTypes  } = {
  value: {
    state: false,
    title: '', 
    content: '',
    type: ''
  },
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    updateAlertContent: (state, actions: PayloadAction<AlertTypes>) => {
      state.value = { ...actions.payload, state: state.value.state }
    },
    updateAlertState: (state, actions: PayloadAction<boolean>) => {
      state.value.state = actions.payload
    }
  },
});

export const { updateAlertContent, updateAlertState } = alertSlice.actions;
export default alertSlice.reducer