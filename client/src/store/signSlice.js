import { createSlice } from '@reduxjs/toolkit'

const initialState = {value:"hidde",event:{}}

const signSlice = createSlice({
  name: 'sign',
  initialState,
  reducers: {
    setSign(state, action) {
      state.value = action.payload
    },
    setSignAndEvent(state, action) {
      state.value = action.payload.team
      state.event = action.payload.event
    },
    switchSign(state) {
      if(state.value=="hidde")
        state.value="sign-in"
      else
        state.value="hidde"
    },
  },
})

export const { setSign, switchSign,setSignAndEvent } = signSlice.actions
export default signSlice.reducer