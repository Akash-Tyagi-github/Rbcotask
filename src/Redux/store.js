import { configureStore } from '@reduxjs/toolkit'
import addReducer from './Slices/slice1.jsx'
export default configureStore({
  reducer: {
    add: addReducer,
  },
})