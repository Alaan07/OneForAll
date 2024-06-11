import { configureStore } from '@reduxjs/toolkit'
import reviewSlice from './reviewSystem/reviewSlice'
import registrationSlice from './registrationSystem/registrationSlice'

export const store = configureStore({
  reducer: {
    reviews: reviewSlice,
    auth : registrationSlice, //registrationSlice here is from the import statement above not actual slice 
  },
})