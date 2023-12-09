import { configureStore } from '@reduxjs/toolkit'
import AccountReducer from '..//features/Accounts/AccountSlice'
export default configureStore({
  reducer: {
    Accounts: AccountReducer
  },
})