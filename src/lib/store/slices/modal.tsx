import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import { ModalTypes } from "../../types";

const initialState: { value: ModalTypes  } = {
  value: {
    show: false,
    title: "",
    body: "",
    footer: <></>,
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
    showModal: (state, actions: PayloadAction<ModalTypes>) => {
      state.value = { ...actions.payload, show: actions.payload.show }
    },
    hideModal: (state,actions: PayloadAction<boolean>) => {
      state.value.show = actions.payload
    }
  },
})

export const { showModal, hideModal } = modalSlice.actions;
export default persistReducer(persistConfig, modalSlice.reducer)