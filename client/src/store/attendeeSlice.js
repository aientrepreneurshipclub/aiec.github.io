import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAttendeeObj,createAttendeef } from "../api/attendee";
import {setIsLoad} from "./isLoadSlice"
import { toast } from "react-toastify";
const initialState = {
  value: {}
};
export const getAttendee = createAsyncThunk(
  "attendee/getAttendee",
  async (token,{dispatch}) => {
    dispatch(setIsLoad(true))
    if (token === "") return {value:{}};
    const value = await getAttendeeObj(token);
    setTimeout(()=>dispatch(setIsLoad(false)),500);
    return value
  }
);
export const creatAttendee = createAsyncThunk(
  "attendee/creatAttendee",
  async (attendee, thunk) => {
    const {getState}=thunk
    const lang=getState().lang.value
    const response=await createAttendeef(attendee)
    if(response.error){
      toast(response.error[lang], { type: "error" });
    }
    if(response.success){
      toast(response.success[lang], { type: "success" });
    }
    return 404;
  }
);
const attendeeSlice = createSlice({
  name: "attendee",
  initialState,
  extraReducers:{
    [getAttendee.fulfilled]: (state,action) => {
      state.value=action.payload
    }
  }
});

export default attendeeSlice.reducer;
