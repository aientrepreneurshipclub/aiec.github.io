import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUpcomingEvents } from "../api/events";
import { setIsLoad } from "./isLoadSlice";
const initialState = {
  upcoming: [],
  past: [],
};
export const setUpcomingEvents = createAsyncThunk(
  "events/getUpcomingEvents",
  async (_, thunk) => {
    const { getState, dispatch } = thunk;
    if (!getState().events.upcoming.length) {
      dispatch(setIsLoad(true));
      const upcoming = await getUpcomingEvents("upcoming");  
      setTimeout(()=>dispatch(setIsLoad(false)),500)
      return upcoming;
    } else return getState().events.upcoming;
  }
);
export const setPastEvents = createAsyncThunk(
  "events/getPastEvents",
  async (_, thunk) => {
    const { getState, dispatch } = thunk;
    if (!getState().events.past.length) {
      dispatch(setIsLoad(true));
      const past = await getUpcomingEvents("past");
      dispatch(setIsLoad(false))
      return past;
    } else return getState().events.past;
  }
);
const eventsSlice = createSlice({
  name: "events",
  initialState,
  extraReducers: {
    [setUpcomingEvents.fulfilled]: (state, action) => {
      state.upcoming = action.payload;
    },
    [setPastEvents.fulfilled]: (state, action) => {
      state.past = action.payload;
    },
  },
});

export default eventsSlice.reducer;
