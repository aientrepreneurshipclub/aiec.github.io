import { createSlice } from '@reduxjs/toolkit'
import Cookies from "js-cookie"

const getInit=()=>{
  if(Cookies.get('key')){
    const token=Cookies.get('key')
    return {value:token}
  }
  else{
    Cookies.set('key', '', { expires: 365 })
    return {value:""}
  }
}
const initialState = getInit()
const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken(state, action) {
      state.value = action.payload
      Cookies.set('key', state.value, { expires: 365 })
    },
  },
})

export const { setToken } = tokenSlice.actions
export default tokenSlice.reducer