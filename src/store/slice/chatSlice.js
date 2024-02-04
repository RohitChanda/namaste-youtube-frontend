import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../../utils/constant";


const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages:[]
  },
  reducers: {
    addLiveMessages: (state, action) => {
      // after 10 message clear one message from the top
      state.messages.splice(LIVE_CHAT_COUNT, 1);

      // to insert the element at the begining of the array
      state.messages.unshift(action.payload)
    }
  },
});
export const { addLiveMessages } = chatSlice.actions;
export default chatSlice.reducer;
