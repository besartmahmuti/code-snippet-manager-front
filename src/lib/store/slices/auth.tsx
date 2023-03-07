import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authType } from '../../types'


const persistConfig = {
  key: 'auth',
  storage,
}

const initialState: { value: authType } = {
  value: {
    isLoggedIn: false,
    username: '',
  },
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, actions: PayloadAction<authType>) => {
     
      state.value = { ...actions.payload }

      
    },
    logout: (state) => {
      state.value = { ...initialState.value }
    },
  },
})

export const { login, logout } = authSlice.actions
export default persistReducer(persistConfig, authSlice.reducer)