import { createSlice } from '@reduxjs/toolkit'
import Cookies from "js-cookie"
const getInit=()=>{
  const lang=Cookies.get('lang') || "english"
  if(lang=="english"){
    document.documentElement.setAttribute('dir',"ltr");
    return {value:lang}
  }
else{
  document.documentElement.setAttribute('dir',"rtl");
  return {value:lang}
}}
const initialState = getInit()

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLang(state) {
        if(state.value=="english"){
            state.value="arabic";
            Cookies.set('lang', 'arabic', { expires: 365 })
            document.documentElement.setAttribute('dir',"rtl");
          }
        else{
            state.value="english"; 
            Cookies.set('lang', 'english', { expires: 365 })
            document.documentElement.setAttribute('dir',"ltr");
          }
    },
    setLang(state, action) {
      state.value = action.payload
    },
  },
})

export const { setLang, changeLang } = langSlice.actions
export default langSlice.reducer