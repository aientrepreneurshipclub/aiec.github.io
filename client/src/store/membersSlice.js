import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllMembers } from "../api/members";
import {setIsLoad} from "./isLoadSlice"
const initialState = {
  value: []
};
export const getMembers = createAsyncThunk(
  "members/getMembers",
  async (_,{dispatch, getState}) => {
    dispatch(setIsLoad(true))
    const members = getState().members.value
    if (members.length > 0){
      dispatch(setIsLoad(false))
      return members
    }
    const value = await getAllMembers();
    dispatch(setIsLoad(false))
    return value
  });
const membersSlice = createSlice({
  name: "members",
  initialState,
  extraReducers:{
    [getMembers.fulfilled]: (state,action) => {
      state.value=action.payload
    }
  }
});

export default membersSlice.reducer;
