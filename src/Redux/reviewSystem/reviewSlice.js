import { createSlice } from '@reduxjs/toolkit'
import reviews from '../../dataStorage/reviewsData'

const initialState = {
  reviews
}

export const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
})

export default reviewSlice.reducer