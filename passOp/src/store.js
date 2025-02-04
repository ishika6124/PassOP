import { configureStore } from '@reduxjs/toolkit'
import authReducer from './redux/auth/authSlice'
import passOpReducer from './redux/passwords/passOpSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    passOp: passOpReducer,
  },
})