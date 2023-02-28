import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import { ModalTypes } from "../../types";

const initialState: { value: ModalTypes  } = {
  value: {
    state: false,
    title: "",
    content: <></>,
  },
}
const persistConfig = {
    key: 'modal',
    storage,
  }
  

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModalContent: (state, actions: PayloadAction<ModalTypes>) => {
      state.value = { ...actions.payload, state: state.value.state }
    },
    hideModalState: (state) => {
      state.value = {...initialState.value}
    }
  },
})

export const { showModalContent, hideModalState } = modalSlice.actions;
export default persistReducer(persistConfig, modalSlice.reducer)