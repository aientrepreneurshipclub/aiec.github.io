import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEmails } from "../api/attendee";
const initialState = { value: {} };
export const setEmails = createAsyncThunk(
  "emails/setEmails",
  async (_, { getState }) => {
    const state = {};
    if (Object.keys(getState().emails.value)==0) {
      const emails = await getEmails();
      for (let email of emails) {
        state[email] = true;
      }
      return state;
    } 
    else return getState().emails.value;
  }
);
const emailsSlice = createSlice({
  name: "emails",
  initialState,
  extraReducers: {
    [setEmails.fulfilled]: (state, action) => {
      state.value = action.payload;
    },
  },
});
export default emailsSlice.reducer;
