import { createSlice } from '@reduxjs/toolkit'
const initialState = {value:{}}

const isRegistedSlice = createSlice({
  name: 'isRegisted',
  initialState,
  reducers: {
    setIsRegisted(state, action) {
      if(action.payload){
        for(let event of action.payload)
          state.value[`${event}`]=true
      }
      // return state.value
    },
  },
})

export const { setIsRegisted} = isRegistedSlice.actions
export default isRegistedSlice.reducer