import { createSlice } from '@reduxjs/toolkit'

const initialState = {value:false}

const isLoadSlice = createSlice({
  name: 'isLoad',
  initialState,
  reducers: {
    switchIsLoad(state) {
        state.value=!state.value
    },
    setIsLoad(state, action) {
      state.value = action.payload
    },
  },
})

export const { setIsLoad, switchIsLoad } = isLoadSlice.actions
export default isLoadSlice.reducer