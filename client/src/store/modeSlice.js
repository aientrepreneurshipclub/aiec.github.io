import { createSlice } from '@reduxjs/toolkit'
import Cookies from "js-cookie"
const getInit=()=>{
  const mode=Cookies.get('mode') || "light"
  if(mode=="light"){
    document.documentElement.style.setProperty('--bg-color',"white");
    document.documentElement.style.setProperty('--color',"black");
    document.documentElement.style.setProperty('--shadow',"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px");
    return {value:mode}
  }
else{
  document.documentElement.style.setProperty('--bg-color',"#18191a");
  document.documentElement.style.setProperty('--color',"white");
  document.documentElement.style.setProperty('--shadow',"rgba(200, 200, 200, 0.1) 0px 2px 4px 0px, rgba(200, 200, 200, 0.1) 0px 2px 16px 0px");
  return {value:mode}
}
}
const initialState = getInit()

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    changeMode(state) {
        if(state.value=="light"){
            state.value="dark";
            document.documentElement.style.setProperty('--bg-color',"#18191a");
            document.documentElement.style.setProperty('--color',"white");
            document.documentElement.style.setProperty('--shadow',"rgba(200, 200, 200, 0.1) 0px 2px 4px 0px, rgba(200, 200, 200, 0.1) 0px 2px 16px 0px");
            Cookies.set('mode', 'dark', { expires: 365 })
          }
        else{
            state.value="light"; 
            document.documentElement.style.setProperty('--bg-color',"white");
            document.documentElement.style.setProperty('--color',"black");
            document.documentElement.style.setProperty('--shadow',"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px");
            Cookies.set('mode', 'light', { expires: 365 })
          }
    }
  },
})

export const {changeMode} = modeSlice.actions
export default modeSlice.reducer